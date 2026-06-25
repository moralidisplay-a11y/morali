export default function PremiumCTA() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#070707', paddingTop: 'clamp(5rem, 12vw, 10rem)', paddingBottom: 'clamp(5rem, 12vw, 10rem)' }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(199,154,75,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Thin gold line top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{ width: '1px', height: '80px', background: 'linear-gradient(to bottom, transparent, rgba(199,154,75,0.3))' }}
      />

      <div className="relative z-10 text-center px-6">

        {/* Eyebrow */}
        <p
          className="mb-8 text-[10px] font-bold tracking-[0.45em] uppercase"
          style={{ color: 'rgba(199,154,75,0.5)' }}
        >
          בואו נדבר
        </p>

        {/* Headline — cinematic scale */}
        <h2
          className="font-black text-white mx-auto"
          style={{
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            lineHeight: 0.96,
            letterSpacing: '-0.04em',
            maxWidth: '14ch',
          }}
        >
          מתכננים
          <br />
          <span style={{ color: 'var(--accent)' }}>חנות חדשה?</span>
        </h2>

        {/* Sub */}
        <p
          className="mt-8 mb-14 mx-auto leading-relaxed"
          style={{
            color: 'rgba(255,255,255,0.35)',
            fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
            maxWidth: '42ch',
          }}
        >
          בין אם פותחים סניף חדש, משדרגים קיים או מתכננים רשת —
          אנחנו כאן מהרגע הראשון ועד לפתיחה.
        </p>

        {/* Two CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/972505559491"
            className="inline-flex items-center gap-2 font-bold px-10 py-4 rounded-full transition-all hover:opacity-85 hover:-translate-y-0.5"
            style={{ background: 'var(--accent)', color: 'white', fontSize: '0.9rem' }}
          >
            שלחו הודעה ב-WhatsApp
          </a>
          <a
            href="tel:050-555-9491"
            className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-full transition-all hover:bg-white/8"
            style={{
              color: 'rgba(255,255,255,0.55)',
              border: '1px solid rgba(255,255,255,0.12)',
              fontSize: '0.9rem',
            }}
          >
            050-555-9491
          </a>
        </div>

      </div>
    </section>
  )
}
