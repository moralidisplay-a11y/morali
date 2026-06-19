'use client'

import { useState } from 'react'
import { TrendingUp, ArrowLeft, Calculator, AlertCircle } from 'lucide-react'

const domains = ['ביגוד', 'פרחים', 'פארם', 'קוסמטיקה', 'טלפונים', 'סופרמרקט', 'תכשיטים']
const areas = ['עד 30 מ״ר', '30–60 מ״ר', '60–120 מ״ר', '120–300 מ״ר', '300+ מ״ר']
const budgets = ['עד 50,000 ₪', '50,000–100,000 ₪', '100,000–200,000 ₪', '200,000+ ₪']

type ROIResult = {
  invest: string
  payback: string
  salesGrowth: string
  trafficGrowth: string
  annualReturn: string
}

const calcResult = (domain: string, budget: string): ROIResult => {
  const multipliers: Record<string, number> = {
    'ביגוד': 1.0, 'פרחים': 0.7, 'פארם': 1.2, 'קוסמטיקה': 1.1,
    'טלפונים': 0.9, 'סופרמרקט': 1.3, 'תכשיטים': 1.5,
  }
  const m = multipliers[domain] || 1.0
  const isHigh = budget.includes('200') || budget.includes('100,000–200')

  return {
    invest: budget === 'עד 50,000 ₪' ? '45,000 ₪' : budget === '50,000–100,000 ₪' ? '85,000 ₪' : budget === '100,000–200,000 ₪' ? '155,000 ₪' : '240,000 ₪',
    payback: isHigh ? `${Math.round(16 / m)}–${Math.round(22 / m)} חודשים` : `${Math.round(10 / m)}–${Math.round(16 / m)} חודשים`,
    salesGrowth: `${Math.round(25 * m)}%–${Math.round(55 * m)}%`,
    trafficGrowth: `${Math.round(20 * m)}%–${Math.round(45 * m)}%`,
    annualReturn: `${Math.round(30 * m)}%–${Math.round(70 * m)}%`,
  }
}

export default function ROICalculatorSection() {
  const [form, setForm] = useState({ domain: '', area: '', budget: '' })
  const [result, setResult] = useState<ROIResult | null>(null)
  const [loading, setLoading] = useState(false)

  const calculate = () => {
    if (!form.domain || !form.budget) return
    setLoading(true)
    setTimeout(() => {
      setResult(calcResult(form.domain, form.budget))
      setLoading(false)
    }, 800)
  }

  return (
    <section className="py-20 lg:py-32" style={{ background: 'var(--primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center reveal">

          {/* Left: Text */}
          <div>
            <span className="gold-label">מחשבון השקעה</span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mt-4 mb-5 leading-tight">
              כמה שדרוג החנות
              <span className="block" style={{ color: 'var(--accent)' }}>יכול להחזיר לכם?</span>
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              הכניסו את הפרטים ונחשב עבורכם את החזר ההשקעה הצפוי — על בסיס נתונים מ-8,500 פרויקטים שביצענו.
            </p>

            {/* Stats strips */}
            <div className="space-y-3">
              {[
                { label: 'ממוצע שיפור מכירות לאחר שדרוג', value: '+42%' },
                { label: 'זמן החזר ממוצע להשקעה', value: '14 חודשים' },
                { label: 'מהלקוחות ממליצים לאחרים', value: '97%' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-center justify-between px-5 py-3.5 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{label}</span>
                  <span className="font-black text-lg" style={{ color: 'var(--accent)' }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Calculator card */}
          <div
            className="rounded-3xl p-8"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: 'var(--accent)' }}>
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-black text-white text-base">מחשבון ROI</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>מבוסס על 8,500+ פרויקטים</div>
              </div>
            </div>

            {!result ? (
              <div className="space-y-5">
                {/* Domain */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: 'rgba(255,255,255,0.5)' }}>תחום העסק</label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {domains.map((d) => (
                      <button
                        key={d}
                        onClick={() => setForm(f => ({ ...f, domain: d }))}
                        className="py-2 px-2 rounded-xl text-xs font-semibold transition-all text-center"
                        style={{
                          background: form.domain === d ? 'var(--accent)' : 'rgba(255,255,255,0.07)',
                          color: form.domain === d ? 'white' : 'rgba(255,255,255,0.6)',
                          border: form.domain === d ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.1)',
                        }}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Area */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: 'rgba(255,255,255,0.5)' }}>שטח החנות</label>
                  <div className="flex flex-wrap gap-2">
                    {areas.map((a) => (
                      <button
                        key={a}
                        onClick={() => setForm(f => ({ ...f, area: a }))}
                        className="text-xs px-3 py-2 rounded-lg font-medium transition-all"
                        style={{
                          background: form.area === a ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)',
                          color: form.area === a ? 'white' : 'rgba(255,255,255,0.5)',
                          border: form.area === a ? '1px solid rgba(255,255,255,0.3)' : '1px solid transparent',
                        }}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: 'rgba(255,255,255,0.5)' }}>תקציב משוער</label>
                  <div className="grid grid-cols-2 gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        onClick={() => setForm(f => ({ ...f, budget: b }))}
                        className="py-2.5 px-3 rounded-xl text-xs font-semibold transition-all text-right"
                        style={{
                          background: form.budget === b ? 'rgba(199,154,75,0.2)' : 'rgba(255,255,255,0.05)',
                          color: form.budget === b ? 'var(--accent-light)' : 'rgba(255,255,255,0.55)',
                          border: form.budget === b ? '1px solid rgba(199,154,75,0.5)' : '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={calculate}
                  disabled={!form.domain || !form.budget || loading}
                  className="w-full py-3.5 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: 'var(--accent)', color: 'white' }}
                >
                  {loading ? (
                    <><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />מחשב...</>
                  ) : (
                    <><TrendingUp className="w-4 h-4" />חשב החזר השקעה</>
                  )}
                </button>
              </div>
            ) : (
              /* Results */
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'השקעה משוערת', value: result.invest, highlight: false },
                    { label: 'החזר השקעה', value: result.payback, highlight: false },
                    { label: 'שיפור מכירות', value: result.salesGrowth, highlight: true },
                    { label: 'גידול בתנועה', value: result.trafficGrowth, highlight: true },
                  ].map(({ label, value, highlight }) => (
                    <div
                      key={label}
                      className="rounded-2xl p-4"
                      style={{
                        background: highlight ? 'rgba(199,154,75,0.15)' : 'rgba(255,255,255,0.07)',
                        border: highlight ? '1px solid rgba(199,154,75,0.3)' : '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.45)' }}>{label}</div>
                      <div className="font-black text-lg" style={{ color: highlight ? 'var(--accent-light)' : 'white' }}>{value}</div>
                    </div>
                  ))}
                </div>

                {/* Annual return — big */}
                <div className="rounded-2xl p-5 text-center" style={{ background: 'linear-gradient(135deg, rgba(199,154,75,0.25), rgba(199,154,75,0.1))', border: '1px solid rgba(199,154,75,0.4)' }}>
                  <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>תשואה שנתית משוערת</div>
                  <div className="font-black text-3xl" style={{ color: 'var(--accent-light)' }}>{result.annualReturn}</div>
                </div>

                {/* Disclaimer */}
                <div className="flex items-start gap-2 rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: 'rgba(255,255,255,0.3)' }} />
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    הנתונים להמחשה בלבד ואינם התחייבות לתוצאה. מבוסס על ממוצעי פרויקטים קודמים.
                  </p>
                </div>

                <div className="flex gap-2 pt-1">
                  <button
                    onClick={() => { setResult(null); setForm({ domain: '', area: '', budget: '' }) }}
                    className="flex-1 py-3 rounded-xl text-sm font-semibold transition-colors"
                    style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)' }}
                  >
                    חשב מחדש
                  </button>
                  <a
                    href="/quote"
                    className="flex-1 py-3 rounded-xl text-sm font-bold text-center flex items-center justify-center gap-1.5"
                    style={{ background: 'var(--accent)', color: 'white' }}
                  >
                    קבל הצעה
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
