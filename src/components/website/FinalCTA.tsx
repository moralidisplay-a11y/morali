export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32" style={{ background: '#f8f7f5', borderTop: '1px solid #f0ede8' }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-black leading-none mb-5" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', color: '#0a0a0a', letterSpacing: '-0.04em' }}>
          מוכנים לצייד<br />
          <span style={{ color: '#c79a4b' }}>את החנות שלכם?</span>
        </h2>
        <p className="text-base mb-10" style={{ color: '#999' }}>
          שלחו לנו הודעה ונחזור אליכם עם הצעה מותאמת אישית.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/972505559491?text=שלום, אני מעוניין לקבל הצעת מחיר לציוד חנות"
            className="btn-gold"
            style={{ padding: '14px 36px', borderRadius: '999px', fontSize: '0.9rem' }}
          >
            שלחו הודעה ב-WhatsApp
          </a>
          <a
            href="tel:050-555-9491"
            className="text-sm font-semibold transition-colors hover:text-black"
            style={{ color: '#999', padding: '14px 24px' }}
          >
            050-555-9491
          </a>
        </div>
      </div>
    </section>
  )
}
