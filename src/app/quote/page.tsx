'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Check, MessageCircle } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TopBar from '@/components/layout/TopBar'
import { categories } from '@/lib/catalog'

const storeTypes = [
  'חנות ביגוד ואופנה',
  'חנות נעליים ואביזרים',
  'חנות קוסמטיקה ובישום',
  'פארמה ותרופות',
  'ספרים וכתיבה',
  'אלקטרוניקה',
  'מזון ומכולת',
  'צעצועים',
  'ספורט ופנאי',
  'אחר',
]

export default function QuotePage() {
  const [step, setStep] = useState(1)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    storeType: '',
    storeSize: '',
    branches: '1',
    needs: [] as string[],
    budget: '',
    timeline: '',
    notes: '',
  })

  function toggleNeed(n: string) {
    setForm(f => ({
      ...f,
      needs: f.needs.includes(n) ? f.needs.filter(x => x !== n) : [...f.needs, n],
    }))
  }

  function buildWhatsAppMessage() {
    const lines = [
      `*בקשת הצעת מחיר — MORALI*`,
      ``,
      `*פרטים:*`,
      `שם: ${form.name}`,
      `עסק: ${form.business}`,
      `טלפון: ${form.phone}`,
      form.email ? `מייל: ${form.email}` : '',
      ``,
      `*צרכי חנות:*`,
      `סוג חנות: ${form.storeType}`,
      `שטח: ${form.storeSize} מ״ר`,
      `מספר סניפים: ${form.branches}`,
      form.needs.length ? `מוצרים נדרשים: ${form.needs.join(', ')}` : '',
      form.budget ? `תקציב: ${form.budget}` : '',
      form.timeline ? `לו"ז: ${form.timeline}` : '',
      form.notes ? `הערות: ${form.notes}` : '',
    ].filter(Boolean)
    return encodeURIComponent(lines.join('\n'))
  }

  function handleSend() {
    const msg = buildWhatsAppMessage()
    window.open(`https://wa.me/972500000000?text=${msg}`, '_blank')
    setSent(true)
  }

  if (sent) {
    return (
      <>
        <TopBar />
        <Header />
        <main className="min-h-screen flex items-center justify-center py-20" style={{ background: 'var(--muted)' }}>
          <div className="text-center max-w-md mx-auto px-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'var(--accent)' }}>
              <Check className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-black text-3xl mb-4" style={{ color: 'var(--foreground)' }}>הבקשה נשלחה!</h1>
            <p className="leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
              פתחנו שיחת WhatsApp עם כל הפרטים. נחזור אליכם תוך יום עסקים.
            </p>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/972500000000" className="btn-gold w-full justify-center">
                <MessageCircle className="w-4 h-4" />
                המשיכו בשיחה
              </a>
              <Link href="/" className="btn-outline w-full justify-center">
                חזרה לדף הבית
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <TopBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 lg:py-24" style={{ background: 'var(--primary)' }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <div className="text-xs font-bold tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--accent)' }}>
              ללא עלות · ללא התחייבות
            </div>
            <h1 className="text-white font-black leading-[1.06] mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}>
              קבלו הצעת מחיר<br />
              <span style={{ color: 'var(--accent)' }}>מותאמת לחנות שלכם</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '400px', margin: '0 auto', lineHeight: 1.75 }}>
              מלאו את הטופס ונשלח לכם הצעה מפורטת תוך יום עסקים.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 lg:py-24" style={{ background: 'var(--muted)' }}>
          <div className="max-w-2xl mx-auto px-6 lg:px-0">

            {/* Steps */}
            <div className="flex items-center gap-3 mb-12">
              {[1, 2, 3].map(s => (
                <div key={s} className="flex items-center gap-3">
                  <button
                    onClick={() => s < step && setStep(s)}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black transition-all"
                    style={{
                      background: s === step ? 'var(--accent)' : s < step ? 'var(--primary)' : 'var(--border)',
                      color: s <= step ? 'white' : 'var(--text-muted)',
                    }}
                  >
                    {s < step ? <Check className="w-4 h-4" /> : s}
                  </button>
                  <span className="text-sm font-semibold hidden sm:block" style={{ color: s === step ? 'var(--foreground)' : 'var(--text-muted)' }}>
                    {s === 1 ? 'פרטים אישיים' : s === 2 ? 'פרטי החנות' : 'סיכום ושליחה'}
                  </span>
                  {s < 3 && <div className="w-12 h-px" style={{ background: 'var(--border)' }} />}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl p-8 lg:p-10" style={{ border: '1px solid var(--border)' }}>

              {/* Step 1 */}
              {step === 1 && (
                <div>
                  <h2 className="font-black text-2xl mb-8" style={{ color: 'var(--foreground)' }}>ספרו לנו עליכם</h2>
                  <div className="space-y-5">
                    <Field label="שם מלא *" value={form.name} onChange={v => setForm(f => ({...f, name: v}))} placeholder="ישראל ישראלי" />
                    <Field label="שם העסק *" value={form.business} onChange={v => setForm(f => ({...f, business: v}))} placeholder="שם הרשת / חנות" />
                    <Field label="טלפון *" value={form.phone} onChange={v => setForm(f => ({...f, phone: v}))} placeholder="050-0000000" type="tel" />
                    <Field label="מייל (אופציונלי)" value={form.email} onChange={v => setForm(f => ({...f, email: v}))} placeholder="name@business.co.il" type="email" />
                  </div>
                  <button
                    onClick={() => form.name && form.business && form.phone && setStep(2)}
                    disabled={!form.name || !form.business || !form.phone}
                    className="btn-gold w-full justify-center mt-8"
                    style={{ opacity: (!form.name || !form.business || !form.phone) ? 0.45 : 1 }}
                  >
                    המשך
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div>
                  <h2 className="font-black text-2xl mb-8" style={{ color: 'var(--foreground)' }}>פרטי החנות</h2>
                  <div className="space-y-6">
                    {/* Store type */}
                    <div>
                      <label className="text-xs font-bold tracking-wider uppercase block mb-3" style={{ color: 'var(--text-muted)' }}>סוג החנות *</label>
                      <div className="flex flex-wrap gap-2">
                        {storeTypes.map(t => (
                          <button
                            key={t}
                            onClick={() => setForm(f => ({...f, storeType: t}))}
                            className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
                            style={{
                              background: form.storeType === t ? 'var(--primary)' : 'var(--muted)',
                              color: form.storeType === t ? 'white' : 'var(--text-muted)',
                              border: '1.5px solid',
                              borderColor: form.storeType === t ? 'var(--primary)' : 'var(--border)',
                            }}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Field label='שטח החנות (מ"ר)' value={form.storeSize} onChange={v => setForm(f => ({...f, storeSize: v}))} placeholder="120" type="number" />
                      <Field label="מספר סניפים" value={form.branches} onChange={v => setForm(f => ({...f, branches: v}))} placeholder="1" type="number" />
                    </div>

                    {/* Needs */}
                    <div>
                      <label className="text-xs font-bold tracking-wider uppercase block mb-3" style={{ color: 'var(--text-muted)' }}>מה אתם צריכים?</label>
                      <div className="flex flex-wrap gap-2">
                        {categories.map(c => (
                          <button
                            key={c.slug}
                            onClick={() => toggleNeed(c.name)}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all"
                            style={{
                              background: form.needs.includes(c.name) ? 'var(--accent-bg)' : 'var(--muted)',
                              color: form.needs.includes(c.name) ? 'var(--accent)' : 'var(--text-muted)',
                              border: '1.5px solid',
                              borderColor: form.needs.includes(c.name) ? 'var(--accent)' : 'var(--border)',
                            }}
                          >
                            {form.needs.includes(c.name) && <Check className="w-3 h-3" />}
                            {c.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="text-xs font-bold tracking-wider uppercase block mb-3" style={{ color: 'var(--text-muted)' }}>תקציב משוער</label>
                      <div className="flex flex-wrap gap-2">
                        {['עד ₪10,000', '₪10,000–₪30,000', '₪30,000–₪80,000', '₪80,000+', 'טרם הוחלט'].map(b => (
                          <button
                            key={b}
                            onClick={() => setForm(f => ({...f, budget: b}))}
                            className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
                            style={{
                              background: form.budget === b ? 'var(--primary)' : 'var(--muted)',
                              color: form.budget === b ? 'white' : 'var(--text-muted)',
                              border: '1.5px solid',
                              borderColor: form.budget === b ? 'var(--primary)' : 'var(--border)',
                            }}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Timeline */}
                    <Field label="לו״ז מבוקש" value={form.timeline} onChange={v => setForm(f => ({...f, timeline: v}))} placeholder="פתיחה בחודש הבא / גמיש" />
                    <Field label="הערות נוספות" value={form.notes} onChange={v => setForm(f => ({...f, notes: v}))} placeholder="כל מה שחשוב לנו לדעת..." multiline />
                  </div>

                  <div className="flex gap-3 mt-8">
                    <button onClick={() => setStep(1)} className="btn-outline flex-1 justify-center">
                      חזרה
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      disabled={!form.storeType}
                      className="btn-gold flex-1 justify-center"
                      style={{ opacity: !form.storeType ? 0.45 : 1 }}
                    >
                      המשך
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div>
                  <h2 className="font-black text-2xl mb-2" style={{ color: 'var(--foreground)' }}>סיכום הבקשה</h2>
                  <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>בדקו שהכל נכון לפני שליחה.</p>

                  <div className="space-y-3 mb-8">
                    {[
                      { label: 'שם', value: form.name },
                      { label: 'עסק', value: form.business },
                      { label: 'טלפון', value: form.phone },
                      form.email ? { label: 'מייל', value: form.email } : null,
                      { label: 'סוג חנות', value: form.storeType },
                      form.storeSize ? { label: 'שטח', value: `${form.storeSize} מ"ר` } : null,
                      { label: 'סניפים', value: form.branches },
                      form.needs.length ? { label: 'צרכים', value: form.needs.join(', ') } : null,
                      form.budget ? { label: 'תקציב', value: form.budget } : null,
                      form.timeline ? { label: 'לו"ז', value: form.timeline } : null,
                      form.notes ? { label: 'הערות', value: form.notes } : null,
                    ].filter(Boolean).map(row => row && (
                      <div key={row.label} className="flex gap-4 text-sm py-2.5" style={{ borderBottom: '1px solid var(--border)' }}>
                        <span className="font-bold w-24 shrink-0" style={{ color: 'var(--text-muted)' }}>{row.label}</span>
                        <span style={{ color: 'var(--foreground)' }}>{row.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl p-5 mb-8" style={{ background: 'var(--accent-bg)', border: '1px solid rgba(199,154,75,0.3)' }}>
                    <div className="flex items-start gap-3">
                      <MessageCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--foreground)' }}>
                        לחיצה על "שלחו הצעה" תפתח שיחת WhatsApp עם כל הפרטים. נחזור אליכם תוך יום עסקים.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button onClick={() => setStep(2)} className="btn-outline flex-1 justify-center">
                      עריכה
                    </button>
                    <button onClick={handleSend} className="btn-gold flex-1 justify-center">
                      <MessageCircle className="w-4 h-4" />
                      שלחו הצעה
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function Field({ label, value, onChange, placeholder, type = 'text', multiline }: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
  multiline?: boolean
}) {
  const base: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1.5px solid var(--border)',
    background: 'var(--muted)',
    fontSize: '0.95rem',
    color: 'var(--foreground)',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
  }
  return (
    <div>
      <label className="text-xs font-bold tracking-wider uppercase block mb-2" style={{ color: 'var(--text-muted)' }}>{label}</label>
      {multiline ? (
        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          style={{ ...base, resize: 'vertical' }}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          style={base}
        />
      )}
    </div>
  )
}
