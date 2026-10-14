// The Avortyx vortex mark followed by the wordmark, in avortyx.com's header colours
// (--vortyx-* in theme.css). Each copy on a page needs its own gradient id.
export default function BrandMark({ gradientId }) {
  const stroke = `url(#${gradientId})`
  const coreId = `${gradientId}-core`
  return (
    <>
      <span className="avx-logo-mark" aria-hidden="true">
        <span className="avx-logo-glow" />
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--vortyx-bright, #93c5fd)" />
              <stop offset="55%" stopColor="var(--vortyx-teal, #3b82f6)" />
              <stop offset="100%" stopColor="var(--vortyx-deep, #1739a8)" />
            </linearGradient>
            <radialGradient id={coreId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--vortyx-ultra, #dbeafe)" stopOpacity="0.9" />
              <stop offset="65%" stopColor="var(--vortyx-teal, #3b82f6)" stopOpacity="0.32" />
              <stop offset="100%" stopColor="var(--vortyx-teal, #3b82f6)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g transform="translate(32 32) scale(1.3) translate(-32 -32)">
            <circle cx="32" cy="32" r="20" fill={`url(#${coreId})`} opacity="0.4" />
            <path className="avx-mk-r1" d="M52 32a20 20 0 1 1-13.2-18.8" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
            <path className="avx-mk-r2" d="M44.5 32a12.5 12.5 0 1 1-8.9-11.9" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
            <path className="avx-mk-r3" d="M38 32a6 6 0 1 1-4.2-5.7" stroke={stroke} strokeWidth="2" strokeLinecap="round" opacity="0.8" />
            <circle cx="32" cy="32" r="1.7" fill="var(--vortyx-ultra, #dbeafe)" />
          </g>
        </svg>
      </span>
      <span
        className="avx-wordmark"
        style={{
          fontSize: '28px',
          fontWeight: '800',
          fontFamily: "'Inter', sans-serif",
          letterSpacing: '-1px',
          background: 'linear-gradient(120deg, #93c5fd 0%, #3b82f6 55%, #1739a8 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: '#93c5fd'
        }}
      >
        Avortyx
      </span>
    </>
  )
}
