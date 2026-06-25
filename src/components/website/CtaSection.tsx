import Link from 'next/link'
import { ArrowLeft, Phone } from 'lucide-react'

export default function CtaSection() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--primary)' }}
    >
      {/* Gold glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(199,154,75,0.15) 0%, transparent 70%)' }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <span className="gold-label justify-center">מוכנים להתחיל?</span>
        <h2 className="text-4xl lg:text-5xl font-black text-white mt-4 mb-5 leading-tight">
          רוצים לשדרג את החנות?
        </h2>
        <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
          אנחנו כאן כדי להפוך את החלום למציאות.
          קבלו ייעוץ חינם והצעת מחיר תוך 24 שעות.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/quote" className="btn-gold animate-pulse-gold">
            קבלו הצעת מחיר <ArrowLeft className="w-4 h-4" />
          </Link>
          <a href="tel:050-555-9491" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
            <Phone className="w-4 h-4" />
            דברו איתנו
          </a>
        </div>

        <p className="mt-6 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          ייעוץ חינם ● ללא התחייבות ● מענה תוך 24 שעות
        </p>
      </div>
    </section>
  )
}
