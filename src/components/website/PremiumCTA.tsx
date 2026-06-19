import { ArrowLeft } from 'lucide-react'

export default function PremiumCTA() {
  return (
    <section
      className="py-28 lg:py-40 relative overflow-hidden"
      style={{ background: '#070707' }}
    >
      {/* Subtle gold accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px"
        style={{ height: '80px', background: 'linear-gradient(to bottom, transparent, rgba(199,154,75,0.4))' }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <div
          className="inline-flex items-center gap-2 mb-8 text-xs font-semibold tracking-[0.2em] uppercase"
          style={{ color: 'var(--accent)' }}
        >
          <span className="w-6 h-px" style={{ background: 'var(--accent)' }} />
          מוכנים להתחיל
          <span className="w-6 h-px" style={{ background: 'var(--accent)' }} />
        </div>

        <h2
          className="font-black text-white leading-[1.05] mb-6"
          style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}
        >
          מתכננים חנות חדשה?
          <br />
          <span style={{ color: 'var(--accent)' }}>אנחנו כאן לבנות אותה.</span>
        </h2>

        <p
          className="text-lg lg:text-xl leading-relaxed mb-12 mx-auto"
          style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '520px' }}
        >
          בין אם פותחים סניף חדש או משדרגים קיים —
          נבנה עבורכם סביבת מכירה שעובדת.
        </p>

        <a
          href="https://wa.me/972500000000"
          className="inline-flex items-center gap-3 font-black text-lg px-10 py-5 rounded-full transition-all hover:opacity-90"
          style={{
            background: 'var(--accent)',
            color: 'white',
            boxShadow: '0 0 60px rgba(199,154,75,0.25)',
          }}
        >
          דברו איתנו בוואטסאפ
          <ArrowLeft className="w-5 h-5" />
        </a>

        <div
          className="mt-12 pt-12 flex flex-wrap justify-center gap-12"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          {[
            { value: '15+', label: 'שנות ניסיון' },
            { value: '8,500+', label: 'פרויקטים' },
            { value: '97%', label: 'ממליצים' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-black text-3xl text-white mb-1">{value}</div>
              <div className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
