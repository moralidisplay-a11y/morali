const logos = [
  'רשת ביגוד MAX', 'Castro', 'HOD Group', 'Fox Fashion', 'GOLF', 'Renuar',
  'Hamashbir', 'SuperPharm', 'קפה נמרוד', 'ACE Hardware', 'Kravitz', 'LALINE',
  'Honigman', 'Michal Negrin', 'שטראוס', 'Victory', 'Mega Sport', 'Adika',
]

export default function ClientLogosMarquee() {
  return (
    <section className="py-10 border-y overflow-hidden" style={{ borderColor: 'var(--border)', background: 'var(--muted)' }}>
      <div className="mb-5 text-center">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: 'var(--text-muted)' }}>
          סומכים עלינו
        </p>
      </div>

      {/* Marquee track */}
      <div className="relative flex overflow-hidden gap-0" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
        {[0, 1].map((set) => (
          <div
            key={set}
            className="flex items-center gap-12 shrink-0"
            style={{
              animation: 'marquee 30s linear infinite',
              paddingLeft: set === 0 ? 0 : '3rem',
            }}
          >
            {logos.map((logo) => (
              <div
                key={`${set}-${logo}`}
                className="shrink-0 font-black text-lg tracking-tight whitespace-nowrap"
                style={{ color: 'rgba(0,0,0,0.18)', letterSpacing: '-0.02em' }}
              >
                {logo}
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  )
}
