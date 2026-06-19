import { ArrowLeft } from 'lucide-react'

export default function PremiumCTA() {
  return (
    <section
      className="py-28 lg:py-48 relative overflow-hidden"
      style={{ background: '#070707' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px"
        style={{ height: '100px', background: 'linear-gradient(to bottom, transparent, rgba(199,154,75,0.35))' }}
      />

      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <div
          className="inline-flex items-center gap-3 mb-10 text-xs font-semibold tracking-[0.25em] uppercase"
          style={{ color: 'rgba(199,154,75,0.7)' }}
        >
          <span className="w-8 h-px" style={{ background: 'rgba(199,154,75,0.4)' }} />
          בואו נדבר
          <span className="w-8 h-px" style={{ background: 'rgba(199,154,75,0.4)' }} />
        </div>

        <h2
          className="font-black text-white leading-[1.05] mb-8"
          style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)' }}
        >
          מתכננים חנות?
          <br />
          <span style={{ color: 'var(--accent)' }}>נשמח לשמוע.</span>
        </h2>

        <p
          className="leading-relaxed mb-14 mx-auto"
          style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '440px', fontSize: '1.1rem' }}
        >
          בין אם פותחים סניף חדש או משדרגים קיים —
          ספרו לנו על הפרויקט ונחזור אליכם בהקדם.
        </p>

        <a
          href="https://wa.me/972500000000"
          className="inline-flex items-center gap-3 font-bold text-base px-10 py-5 rounded-full transition-all hover:opacity-85"
          style={{
            background: 'var(--accent)',
            color: 'white',
          }}
        >
          שלחו לנו הודעה
          <ArrowLeft className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
