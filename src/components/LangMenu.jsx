// The language menu (globe in the navbar). scripts/prerender.js points each link at this page in
// that language and ticks the current one; the names stay in their own language (data-avx-no-i18n).
export const LANGUAGES = [
  ['en', 'English', null],
  ['ru', 'Русский', 'Russian'],
  ['ja', '日本語', 'Japanese'],
  ['zh', '简体中文', 'Chinese'],
]

function Flag({ code }) {
  const common = { width: 20, height: 14, viewBox: '0 0 20 14', 'aria-hidden': true, className: 'avx-flag' }
  if (code === 'en') return (
    <svg {...common}>
      <rect width="20" height="14" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((y) => <rect key={y} y={y} width="20" height="1.08" fill="#b22234" />)}
      <rect width="9" height="7.5" fill="#3c3b6e" />
    </svg>
  )
  if (code === 'ru') return (
    <svg {...common}>
      <rect width="20" height="4.67" fill="#fff" />
      <rect y="4.67" width="20" height="4.67" fill="#0039a6" />
      <rect y="9.33" width="20" height="4.67" fill="#d52b1e" />
    </svg>
  )
  if (code === 'ja') return (
    <svg {...common}>
      <rect width="20" height="14" fill="#fff" />
      <circle cx="10" cy="7" r="4.2" fill="#bc002d" />
    </svg>
  )
  return (
    <svg {...common}>
      <rect width="20" height="14" fill="#de2910" />
      <path d="M4 2.2l.6 1.8h1.9l-1.5 1.1.6 1.8L4 5.8 2.4 6.9 3 5.1 1.5 4h1.9z" fill="#ffde00" />
    </svg>
  )
}

export default function LangMenu() {
  return (
    <li className="nav-item dropdown avx-lang ms-lg-2">
      <button className="avx-lang-btn" type="button" data-avx-lang-toggle="" aria-expanded="false" aria-haspopup="true" aria-label="Language">
        <i className="fa-solid fa-globe" aria-hidden="true" />
      </button>
      <ul className="dropdown-menu avx-lang-menu">
        <li className="avx-lang-head">Language</li>
        {LANGUAGES.map(([code, name, english]) => (
          <li key={code}>
            <a className="dropdown-item" href="/" data-avx-lang={code} hrefLang={code} lang={code} data-avx-no-i18n="">
              <Flag code={code} />
              <span className="avx-lang-name">{name}</span>
              {english && <span className="avx-lang-en">· {english}</span>}
              <i className="fa-solid fa-check avx-lang-check" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </li>
  )
}
