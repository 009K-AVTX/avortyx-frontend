// POST /api/apply — a job application from the careers page, CV attached.
// Sends the CV to the hiring team on Telegram (a bot posting to a chat or group) and by email
// (SMTP), at the same time. The application counts as received when at least one of them lands.
//
// Environment (Vercel → Project → Settings → Environment Variables, or .env.local for `npm run dev`):
//   TELEGRAM_BOT_TOKEN   the bot's token from @BotFather
//   TELEGRAM_CHAT_ID     where the bot posts: a group (-100…) or a person who has pressed Start
//                        on the bot; `node scripts/telegram-chat-id.js` finds it
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS   the mailbox that sends the email
//   CAREERS_EMAIL_TO     who receives it (default hello@avortyx.io)
//   SMTP_FROM            the sender shown (default SMTP_USER)
import nodemailer from 'nodemailer'

// Vercel refuses request bodies over 4.5 MB, so the CV stays under that with the form around it
const MAX_CV = 4 * 1024 * 1024
// extension -> the bytes such a file starts with
const CV_TYPES = {
  pdf: [0x25, 0x50, 0x44, 0x46], // %PDF
  docx: [0x50, 0x4b, 0x03, 0x04], // a zip
  doc: [0xd0, 0xcf, 0x11, 0xe0], // an OLE compound file
}
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const json = (status, body) => Response.json(body, { status })
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export async function POST(request) {
  let form
  try {
    form = await request.formData()
  } catch {
    return json(400, { error: 'Your application could not be read. Please try again.' })
  }
  const v = (k, max = 200) => String(form.get(k) || '').trim().slice(0, max)
  // the hidden field people never see; bots fill it in
  if (v('company_site')) return json(200, { ok: true })

  const app = {
    role: v('role') || 'Open application',
    name: v('name'),
    email: v('email'),
    phone: v('phone', 40),
    telegram: v('telegram', 64),
    link: v('link', 300),
    note: v('note', 3000),
  }
  const cv = form.get('cv')
  const problem = !app.name ? 'Please add your full name.' :
    !EMAIL.test(app.email) ? 'Please add a valid email address.' :
    !(cv && typeof cv === 'object' && cv.size) ? 'Please attach your CV.' :
    cv.size > MAX_CV ? 'Your CV is over 4 MB. Please send a smaller file.' : ''
  if (problem) return json(400, { error: problem })

  const ext = (cv.name.match(/\.([a-z0-9]+)$/i) || [])[1]?.toLowerCase()
  const bytes = Buffer.from(await cv.arrayBuffer())
  const magic = CV_TYPES[ext]
  if (!magic || !magic.every((b, i) => bytes[i] === b)) return json(400, { error: 'Please attach your CV as a PDF or Word document.' })
  const fileName = `CV - ${app.name.replace(/[^\p{L}\p{N} .'-]/gu, '').slice(0, 60) || 'applicant'}.${ext}`
  const file = { bytes, fileName, type: cv.type || 'application/octet-stream' }

  const [tg, mail] = await Promise.allSettled([toTelegram(app, file), toEmail(app, file)])
  for (const [name, r] of [['telegram', tg], ['email', mail]]) if (r.status === 'rejected') console.error(`apply: ${name} failed:`, r.reason?.message || r.reason)
  if (tg.status === 'rejected' && mail.status === 'rejected') {
    return json(502, { error: 'We could not send your application just now. Please try again in a few minutes.' })
  }
  return json(200, { ok: true })
}

// the application as lines of text, for the Telegram caption and the email body
function details(app, html) {
  const b = (s) => (html ? `<b>${s}</b>` : s)
  const t = html ? esc : (s) => s
  const fields = [
    `Name: ${t(app.name)}`,
    `Email: ${t(app.email)}`,
    app.phone && `Phone: ${t(app.phone)}`,
    app.telegram && `Telegram: ${t(app.telegram)}`,
    app.link && `Link: ${t(app.link)}`,
  ].filter(Boolean)
  return `${b('New application')}: ${t(app.role)}\n\n${fields.join('\n')}` + (app.note ? `\n\n${b('Note')}:\n${t(app.note)}` : '')
}

async function toTelegram(app, file) {
  const { TELEGRAM_BOT_TOKEN: token, TELEGRAM_CHAT_ID: chat } = process.env
  if (!token || !chat) throw new Error('TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set')
  const call = async (method, body) => {
    const res = await fetch(`https://api.telegram.org/bot${token}/${method}`, { method: 'POST', body })
    const out = await res.json().catch(() => ({}))
    if (!out.ok) throw new Error(`${method}: ${out.description || res.status}`)
  }
  const text = details(app, true)
  // a caption holds 1024 characters; a longer application goes first as its own message
  const long = text.length > 1024
  if (long) {
    const msg = new FormData()
    msg.set('chat_id', chat)
    msg.set('parse_mode', 'HTML')
    msg.set('text', text.slice(0, 4000))
    await call('sendMessage', msg)
  }
  const doc = new FormData()
  doc.set('chat_id', chat)
  doc.set('parse_mode', 'HTML')
  doc.set('caption', long ? `<b>CV</b>: ${esc(app.name)}, ${esc(app.role)}` : text)
  doc.set('document', new Blob([file.bytes], { type: file.type }), file.fileName)
  await call('sendDocument', doc)
}

async function toEmail(app, file) {
  const { SMTP_HOST: host, SMTP_PORT: port = '465', SMTP_USER: user, SMTP_PASS: pass } = process.env
  if (!host || !user || !pass) throw new Error('SMTP_HOST, SMTP_USER or SMTP_PASS is not set')
  const transport = nodemailer.createTransport({ host, port: +port, secure: +port === 465, auth: { user, pass } })
  await transport.sendMail({
    from: { name: 'Avortyx Careers', address: process.env.SMTP_FROM || user },
    to: process.env.CAREERS_EMAIL_TO || 'hello@avortyx.io',
    replyTo: { name: app.name, address: app.email },
    subject: `Application: ${app.role} — ${app.name}`,
    text: details(app, false),
    attachments: [{ filename: file.fileName, content: file.bytes, contentType: file.type }],
  })
}
