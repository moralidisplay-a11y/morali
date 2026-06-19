'use client'

import { useState } from 'react'
import { Sparkles, ArrowLeft, Check, Store, Layers, DollarSign } from 'lucide-react'

const domains = [
  { value: 'fashion', label: 'ביגוד והנעלה', icon: '👗' },
  { value: 'flowers', label: 'פרחים', icon: '🌸' },
  { value: 'cosmetics', label: 'קוסמטיקה ופארם', icon: '💄' },
  { value: 'jewelry', label: 'תכשיטים', icon: '💍' },
  { value: 'phones', label: 'טלפונים ואלקטרוניקה', icon: '📱' },
  { value: 'supermarket', label: 'סופרמרקט', icon: '🛒' },
  { value: 'kids', label: 'צעצועים וילדים', icon: '🧸' },
  { value: 'other', label: 'אחר', icon: '🏪' },
]

const areas = ['עד 30 מ״ר', '30–60 מ״ר', '60–120 מ״ר', '120–300 מ״ר', '300+ מ״ר']
const budgets = ['עד 20,000 ₪', '20,000–50,000 ₪', '50,000–150,000 ₪', '150,000+ ₪']

type Result = {
  style: string
  items: string[]
  range: string
  tip: string
}

const resultsByDomain: Record<string, Result> = {
  fashion: { style: 'מודרני-יוקרתי', items: ['סטנדים לתלייה כפולים', 'קירות מחורצים', 'בובות ראווה', 'דלפק מרכזי'], range: '40,000–90,000 ₪', tip: 'שילוב תאורה ממוקדת על הבובות מגדיל מכירות ב-30%' },
  flowers: { style: 'בוטני-טבעי', items: ['מדפי רשת מאסיפה', 'ויטרינת קירור מוארת', 'שלטי מחיר עץ', 'עגלות תצוגה'], range: '25,000–55,000 ₪', tip: 'תצוגה בגובה עיניים של הפרחים היקרים מכפילה את המכירות' },
  cosmetics: { style: 'קלין-יוקרתי', items: ['ויטרינות זכוכית מוארות', 'קאונטרים לטיפוח', 'מדפי אקריליק', 'סטנד חינם-לנסות'], range: '35,000–80,000 ₪', tip: 'תאורה לבנה-קרה מציגה מוצרי קוסמטיקה בצורה אופטימלית' },
  jewelry: { style: 'יוקרה מינימליסטי', items: ['ויטרינות זכוכית משופעות', 'דלפק מרכזי מוסגר', 'תאורת LED ממוקדת', 'מדפי קטיפה'], range: '60,000–150,000 ₪', tip: 'תאורת ספוט על כל פריט בודד מגדילה את תפיסת הערך' },
  phones: { style: 'טק-מודרני', items: ['שולחנות חוויה אינטראקטיביים', 'מדפי מוצרים מודולריים', 'שלטי דיגיטל', 'תא אביזרים'], range: '30,000–70,000 ₪', tip: 'אזור "נסו את המכשיר" מגדיל המרה ב-45%' },
  supermarket: { style: 'פרקטי-נגיש', items: ['מדפי מתכת מודולריים', 'קירות פרוז׳ן', 'שלטי קטגוריות', 'עגלות ועמדות קופה'], range: '80,000–250,000 ₪', tip: 'מסלול לקוח נכון מגדיל את הסל הממוצע ב-20%' },
  kids: { style: 'צבעוני-כיפי', items: ['מדפי עץ צבעוניים', 'אזור משחק חווייתי', 'סטנדים בגובה ילדים', 'ויטרינת דגמים'], range: '20,000–50,000 ₪', tip: 'אזור ישיבה להורים ליד אזור משחק מאריך שהייה ב-60%' },
  other: { style: 'מותאם אישית', items: ['מדפים מודולריים', 'סטנד תצוגה מרכזי', 'דלפק שירות', 'שילוט מקצועי'], range: '25,000–70,000 ₪', tip: 'תכנון מסלול לקוח חכם מוביל לעלייה ישירה במכירות' },
}

export default function AIStorePlannerSection() {
  const [step, setStep] = useState<'form' | 'loading' | 'result'>('form')
  const [form, setForm] = useState({ domain: '', area: '', budget: '' })
  const [result, setResult] = useState<Result | null>(null)

  const selectedDomain = domains.find(d => d.value === form.domain)

  const generate = () => {
    if (!form.domain) return
    setStep('loading')
    setTimeout(() => {
      setResult(resultsByDomain[form.domain] || resultsByDomain.other)
      setStep('result')
    }, 1600)
  }

  const reset = () => {
    setStep('form')
    setResult(null)
    setForm({ domain: '', area: '', budget: '' })
  }

  return (
    <section className="py-20 lg:py-32" style={{ background: 'var(--muted)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="gold-label justify-center">
            <Sparkles className="w-3 h-3" />
            בינה מלאכותית
          </span>
          <h2 className="section-title mt-2">
            לא בטוחים איך החנות שלכם
            <span className="block" style={{ color: 'var(--accent)' }}>צריכה להיראות?</span>
          </h2>
          <p className="section-subtitle mt-4 mx-auto">
            ספרו לנו על העסק — ונראה לכם מה מתאים לו.
          </p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

          {/* Left: Form */}
          <div
            className="rounded-3xl p-7 flex flex-col"
            style={{ background: 'white', border: '1px solid var(--border)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'var(--accent)' }}>
                <Store className="w-4 h-4 text-white" />
              </div>
              <span className="font-black text-base">פרטי העסק</span>
            </div>

            <div className="space-y-4 flex-1">
              {/* Domain grid */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: 'var(--text-muted)' }}>תחום העסק</label>
                <div className="grid grid-cols-2 gap-2">
                  {domains.map((d) => (
                    <button
                      key={d.value}
                      onClick={() => setForm(f => ({ ...f, domain: d.value }))}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-right text-xs font-semibold transition-all"
                      style={{
                        background: form.domain === d.value ? 'var(--primary)' : 'var(--muted)',
                        color: form.domain === d.value ? 'white' : 'var(--foreground)',
                        border: form.domain === d.value ? '2px solid var(--primary)' : '2px solid transparent',
                      }}
                    >
                      <span>{d.icon}</span>
                      <span className="leading-tight">{d.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Area */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: 'var(--text-muted)' }}>שטח החנות</label>
                <div className="flex flex-wrap gap-2">
                  {areas.map((a) => (
                    <button
                      key={a}
                      onClick={() => setForm(f => ({ ...f, area: a }))}
                      className="text-xs px-3 py-2 rounded-lg font-medium transition-all"
                      style={{
                        background: form.area === a ? 'var(--accent)' : 'var(--muted)',
                        color: form.area === a ? 'white' : 'var(--text-muted)',
                      }}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: 'var(--text-muted)' }}>תקציב משוער</label>
                <div className="flex flex-col gap-2">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      onClick={() => setForm(f => ({ ...f, budget: b }))}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-right"
                      style={{
                        background: form.budget === b ? 'rgba(199,154,75,0.1)' : 'var(--muted)',
                        border: form.budget === b ? '1.5px solid var(--accent)' : '1.5px solid transparent',
                        color: form.budget === b ? 'var(--accent)' : 'var(--foreground)',
                      }}
                    >
                      {b}
                      {form.budget === b && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={generate}
              disabled={!form.domain || step === 'loading'}
              className="w-full mt-6 flex items-center justify-center gap-2 font-bold py-3.5 rounded-2xl transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                background: form.domain ? 'var(--primary)' : 'var(--muted)',
                color: form.domain ? 'white' : 'var(--text-muted)',
              }}
            >
              {step === 'loading' ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  מנתח את העסק שלכם...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  צור רעיון ראשוני
                </>
              )}
            </button>
          </div>

          {/* Center: Visual preview */}
          <div
            className="rounded-3xl overflow-hidden relative flex flex-col justify-end min-h-[420px]"
            style={{ background: '#111' }}
          >
            <img
              src={
                form.domain === 'flowers'
                  ? 'https://images.unsplash.com/photo-1487530811015-780db66d82e1?w=800&q=80'
                  : form.domain === 'cosmetics'
                  ? 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80'
                  : form.domain === 'phones'
                  ? 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=800&q=80'
                  : 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80'
              }
              alt="תצוגה"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
              style={{ opacity: form.domain ? 0.7 : 0.4 }}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }}
            />

            {/* Overlay content */}
            <div className="relative z-10 p-7">
              {form.domain ? (
                <>
                  <div className="text-4xl mb-3">{selectedDomain?.icon}</div>
                  <div className="text-white font-black text-xl mb-1">{selectedDomain?.label}</div>
                  <div className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {form.area || 'בחרו שטח'} · {form.budget || 'בחרו תקציב'}
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <Layers className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--accent)' }} />
                  <div className="text-white font-bold text-lg">בחרו סוג עסק</div>
                  <div className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>לקבלת תצוגה מותאמת</div>
                </div>
              )}
            </div>

            {/* Loading overlay */}
            {step === 'loading' && (
              <div className="absolute inset-0 flex items-center justify-center z-20" style={{ background: 'rgba(0,0,0,0.7)' }}>
                <div className="text-center">
                  <div className="w-12 h-12 border-3 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-3" style={{ borderWidth: '3px' }} />
                  <div className="text-white font-semibold">מנתח...</div>
                </div>
              </div>
            )}
          </div>

          {/* Right: Result card */}
          <div
            className="rounded-3xl p-7 flex flex-col"
            style={{
              background: step === 'result' ? 'var(--primary)' : 'white',
              border: step === 'result' ? 'none' : '1px solid var(--border)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              transition: 'background 0.4s ease',
            }}
          >
            {step !== 'result' ? (
              /* Placeholder state */
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'var(--muted)' }}>
                    <DollarSign className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
                  </div>
                  <span className="font-black text-base" style={{ color: 'var(--text-muted)' }}>הצעה מותאמת</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'var(--muted)' }}>
                    <Sparkles className="w-8 h-8" style={{ color: 'var(--border)' }} />
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-1" style={{ color: 'var(--text-muted)' }}>הצעת הAI תופיע כאן</div>
                    <div className="text-xs" style={{ color: 'var(--border)' }}>מלאו את הפרטים ולחצו על "צור רעיון"</div>
                  </div>
                  {/* Skeleton lines */}
                  {[1,2,3].map(i => (
                    <div key={i} className="w-full rounded-xl h-12" style={{ background: 'var(--muted)' }} />
                  ))}
                </div>
              </div>
            ) : (
              /* Result state */
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'var(--accent)' }}>
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-black text-base text-white">תוצאת הניתוח</span>
                </div>

                <div className="space-y-4 flex-1">
                  {/* Style */}
                  <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--accent)' }}>סגנון מומלץ</div>
                    <div className="font-black text-white text-lg">{result?.style}</div>
                  </div>

                  {/* Items */}
                  <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--accent)' }}>מתקנים מומלצים</div>
                    <div className="space-y-2">
                      {result?.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--accent)' }}>
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>
                          <span className="text-sm text-white">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Budget range */}
                  <div className="rounded-2xl p-4" style={{ background: 'rgba(199,154,75,0.2)', border: '1px solid rgba(199,154,75,0.3)' }}>
                    <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--accent)' }}>טווח תקציב</div>
                    <div className="font-black text-white text-xl">{result?.range}</div>
                  </div>

                  {/* Tip */}
                  <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--accent)' }}>טיפ מקצועי</div>
                    <div className="text-xs text-white leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>{result?.tip}</div>
                  </div>
                </div>

                <div className="flex gap-2 mt-5">
                  <button onClick={reset} className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors" style={{ background: 'rgba(255,255,255,0.1)' }}>
                    נסה שוב
                  </button>
                  <a
                    href="/quote"
                    className="flex-1 py-2.5 rounded-xl text-sm font-bold text-center flex items-center justify-center gap-1.5"
                    style={{ background: 'var(--accent)', color: 'white' }}
                  >
                    קבל הצעה מלאה
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
