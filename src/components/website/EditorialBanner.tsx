type Props = {
  eyebrow?: string
  headline: string
  sub: string
  cta: string
  href: string
  variant?: 'dark' | 'gold' | 'light'
}

export default function EditorialBanner({ eyebrow, headline, sub, cta, href, variant = 'dark' }: Props) {
  const bg = variant === 'gold' ? 'var(--accent)' : variant === 'light' ? '#f5f4f1' : '#0a0a0a'
  const color = variant === 'light' ? 'var(--primary)' : 'white'
  const subColor = variant === 'light' ? 'var(--text-muted)' : 'rgba(255,255,255,0.48)'
  const btnBg = variant === 'gold' ? 'white' : variant === 'light' ? 'var(--primary)' : 'var(--accent)'
  const btnColor = variant === 'gold' ? 'var(--accent)' : 'white'

  return (
    <section className="relative overflow-hidden" style={{ background: bg }}>
      {/* Decorative lines */}
      <div className="absolute inset-y-0 right-0 w-px opacity-10" style={{ background: 'white' }} />
      <div className="absolute top-0 inset-x-0 h-px opacity-10" style={{ background: 'white' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="max-w-2xl">
          {eyebrow && (
            <div className="text-[10px] font-bold tracking-[0.4em] uppercase mb-4" style={{ color: variant === 'light' ? 'var(--accent)' : 'rgba(199,154,75,0.8)' }}>
              {eyebrow}
            </div>
          )}
          <h2
            className="font-black leading-none mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', color, letterSpacing: '-0.035em' }}
          >
            {headline}
          </h2>
          <p className="text-base mb-10 leading-relaxed" style={{ color: subColor, maxWidth: '40ch' }}>
            {sub}
          </p>
          <a
            href={href}
            className="inline-flex items-center gap-2 font-black text-sm px-8 py-4 rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: btnBg, color: btnColor }}
          >
            {cta}
            <span>←</span>
          </a>
        </div>
      </div>

      {/* Decorative large text */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 font-black select-none pointer-events-none opacity-[0.03]"
        style={{ fontSize: 'clamp(8rem, 18vw, 20rem)', color: 'white', letterSpacing: '-0.05em', whiteSpace: 'nowrap' }}
        aria-hidden
      >
        MORALI
      </div>
    </section>
  )
}
