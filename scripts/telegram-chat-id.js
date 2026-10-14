// Finds the TELEGRAM_CHAT_ID for /api/apply: lists the chats the careers bot has heard from.
//   1. add the bot to the group (or open the bot from @avortyxsupport and press Start)
//   2. send any message there
//   3. TELEGRAM_BOT_TOKEN=123:abc node scripts/telegram-chat-id.js
// (a group's id starts with -100; a person's id is a plain number)
const token = process.env.TELEGRAM_BOT_TOKEN
if (!token) {
  console.error('Set TELEGRAM_BOT_TOKEN first: TELEGRAM_BOT_TOKEN=123:abc node scripts/telegram-chat-id.js')
  process.exit(1)
}
const res = await fetch(`https://api.telegram.org/bot${token}/getUpdates`)
const out = await res.json()
if (!out.ok) {
  console.error('Telegram said:', out.description)
  process.exit(1)
}
const chats = new Map()
for (const u of out.result) {
  const c = (u.message || u.channel_post || u.my_chat_member || u.edited_message || {}).chat
  if (c) chats.set(c.id, c)
}
if (!chats.size) console.log('No chats yet. Send a message to the bot (or in the group with the bot), then run this again.')
for (const c of chats.values()) console.log(`${c.id}\t${c.type}\t${c.title || [c.first_name, c.last_name].filter(Boolean).join(' ')}${c.username ? ' @' + c.username : ''}`)
