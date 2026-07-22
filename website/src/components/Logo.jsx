// AND STARS logo — SVG placeholder in purple/white.
// Swap for your real logo file later: drop it in /public and replace the SVG,
// or set <img src="/logo.png" /> here.
export default function Logo({ showText = true, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="42" height="42" viewBox="0 0 64 64" fill="none" className="shrink-0">
        <defs>
          <linearGradient id="asGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A78BFA" />
            <stop offset="0.55" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#6366F1" />
          </linearGradient>
        </defs>
        {/* A */}
        <path d="M10 50 L24 16 L30 16 L30 50 L24 50 L24 40 L18 40 L15 50 Z" fill="url(#asGrad)" />
        {/* Knocks out part of the "A" to form the letter — tracks the page
            background token so it still reads correctly in light mode. */}
        <path d="M20 34 L24 24 L24 34 Z" fill="var(--color-ink)" />
        {/* S curve */}
        <path
          d="M52 22 C46 18 36 18 34 24 C32 30 44 30 46 36 C48 42 40 46 32 42"
          stroke="url(#asGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        {/* star */}
        <path d="M50 10 L52 16 L58 18 L52 20 L50 26 L48 20 L42 18 L48 16 Z" fill="#F8F8FC" className="animate-twinkle" />
      </svg>
      {showText && (
        <div className="leading-none">
          <div className="font-display font-semibold tracking-[0.22em] text-[0.95rem] text-cloud">
            AND STARS
          </div>
          <div className="text-[0.55rem] tracking-[0.25em] text-mist mt-1 uppercase">
            Young Minds · Bright Future
          </div>
        </div>
      )}
    </div>
  )
}
