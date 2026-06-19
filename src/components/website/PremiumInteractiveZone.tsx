'use client'

import { useState } from 'react'
import { Sparkles, TrendingUp, ArrowLeft } from 'lucide-react'

// ─── AI Store Planner ───────────────────────────────────────────────
function AIStorePlanner() {
  const [form, setForm] = useState({ domain: '', area: '', budget: '' })
  const [result, setResult] = useState<null | { style: string; items: string; range: string }>(null)
  const [loading, setLoading] = useState(false)

  const generate = () => {
    if (!form.domain) return
    setLoading(true)
    setTimeout(() => {
      setResult({
        style: 'מודרני-יוקרתי',
        items: 'מדפי קיר, סטנדים מרכזיים, דלפק תצוגה',
        range: '35,000 – 80,000 ₪',
      })
      setLoading(false)
    }, 1400)
  }

  return (
    <div className="bg-white rounded-2xl border p-6 flex flex-col h-full" style={{ borderColor: 'var(--border)' }}>
      <div className="flex items-center gap-2 mb-1">
        <Sparkles className="w-5 h-5" style={{ color: 'var(--accent)' }} />
        <span className="font-black text-lg">מתכנן חנות AI</span>
      </div>
      <p className="text-sm mb-5" style={{ color: 'var(--text-muted)' }}>
        לא בטוחים איך החנות שלכם צריכה להיראות? ספרו לנו על העסק וקבלו רעיון ראשוני.
      </p>

      {!result ? (
        <div className="space-y-3 flex-1">
          <select
            className="w-full border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-yellow-500"
            style={{ borderColor: 'var(--border)' }}
            value={form.domain}
            onChange={(e) => setForm({ ...form, domain: e.target.value })}
          >
            <option value="">תחום העסק</option>
            {['ביגוד והנעלה', 'פרחים', 'קוסמטיקה ופארם', 'תכשיטים', 'צעצועים', 'טלפונים', 'סופרמרקט', 'אחר'].map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <select
            className="w-full border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none"
            style={{ borderColor: 'var(--border)' }}
            value={form.area}
            onChange={(e) => setForm({ ...form, area: e.target.value })}
          >
            <option value="">שטח החנות במ״ר</option>
            {['עד 30 מ״ר', '30–60 מ״ר', '60–120 מ״ר', '120–300 מ״ר', '300+ מ״ר'].map(a => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
          <select
            className="w-full border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none"
            style={{ borderColor: 'var(--border)' }}
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
          >
            <option value="">תקציב משוער</option>
            {['עד 20,000 ₪', '20,000–50,000 ₪', '50,000–150,000 ₪', '150,000+ ₪'].map(b => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
          <button
            onClick={generate}
            disabled={!form.domain || loading}
            className="btn-gold w-full justify-center mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                מחשב...
              </span>
            ) : (
              <>צור רעיון ראשוני <Sparkles className="w-4 h-4" /></>
            )}
          </button>
        </div>
      ) : (
        <div className="flex-1 space-y-3">
          <div className="rounded-xl p-4 text-sm space-y-3" style={{ background: 'var(--muted)' }}>
            <div>
              <span className="font-bold text-xs uppercase tracking-wider" style={{ color: 'var(--accent)' }}>סגנון מומלץ</span>
              <div className="font-semibold mt-0.5">{result.style}</div>
            </div>
            <div>
              <span className="font-bold text-xs uppercase tracking-wider" style={{ color: 'var(--accent)' }}>מתקנים מומלצים</span>
              <div className="font-semibold mt-0.5">{result.items}</div>
            </div>
            <div>
              <span className="font-bold text-xs uppercase tracking-wider" style={{ color: 'var(--accent)' }}>טווח תקציב</span>
              <div className="font-semibold mt-0.5">{result.range}</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setResult(null)} className="btn-outline text-sm flex-1 justify-center" style={{ padding: '10px' }}>
              נסה שוב
            </button>
            <a href="/quote" className="btn-gold text-sm flex-1 justify-center" style={{ padding: '10px' }}>
              קבל הצעה מלאה
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Before/After Slider ─────────────────────────────────────────────
const categories = ['בגדים', 'פרחים', 'פארם', 'קוסמטיקה', 'טלפונים']

function BeforeAfterSlider() {
  const [pos, setPos] = useState(50)
  const [activeCategory, setActiveCategory] = useState('בגדים')
  const [dragging, setDragging] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    setPos(Math.min(95, Math.max(5, x)))
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100
    setPos(Math.min(95, Math.max(5, x)))
  }

  return (
    <div className="bg-white rounded-2xl border p-6 flex flex-col h-full" style={{ borderColor: 'var(--border)' }}>
      <div className="font-black text-lg mb-1">לפני / אחרי</div>
      <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
        גררו את הפס לראות את ההבדל שעיצוב מקצועי עושה.
      </p>

      {/* Slider */}
      <div
        className="relative rounded-xl overflow-hidden cursor-col-resize select-none flex-1 min-h-[180px]"
        onMouseDown={() => setDragging(true)}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Before */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1604014237744-2e0d16f2e0c4?w=600&q=80"
            alt="לפני"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.3)' }} />
          <div className="absolute top-3 right-3 bg-black/60 text-white text-xs font-bold px-2.5 py-1 rounded-lg">לפני</div>
        </div>

        {/* After */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80"
            alt="אחרי"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.15)' }} />
          <div className="absolute top-3 left-3 text-white text-xs font-bold px-2.5 py-1 rounded-lg" style={{ background: 'var(--accent)' }}>
            אחרי
          </div>
        </div>

        {/* Divider */}
        <div
          className="absolute top-0 bottom-0 w-0.5 flex items-center justify-center"
          style={{ left: `${pos}%`, background: 'white', transform: 'translateX(-50%)' }}
        >
          <div
            className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center shadow-lg"
            style={{ background: 'var(--accent)' }}
          >
            <span className="text-white text-xs font-bold">⇔</span>
          </div>
        </div>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mt-4">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className="text-xs px-3 py-1.5 rounded-full font-medium transition-all"
            style={{
              background: activeCategory === c ? 'var(--primary)' : 'var(--muted)',
              color: activeCategory === c ? 'white' : 'var(--text-muted)',
            }}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── ROI Calculator ──────────────────────────────────────────────────
function ROICalculator() {
  const [form, setForm] = useState({ domain: '', area: '', budget: '' })
  const [result, setResult] = useState<null | { invest: string; payback: string; growth: string }>(null)

  const calculate = () => {
    setResult({
      invest: '120,000 ₪',
      payback: '14–18 חודשים',
      growth: '30%–60%',
    })
  }

  return (
    <div className="bg-white rounded-2xl border p-6 flex flex-col h-full" style={{ borderColor: 'var(--border)' }}>
      <div className="flex items-center gap-2 mb-1">
        <TrendingUp className="w-5 h-5" style={{ color: 'var(--accent)' }} />
        <span className="font-black text-lg">מחשבון ROI</span>
      </div>
      <p className="text-sm mb-5" style={{ color: 'var(--text-muted)' }}>
        גלו את החזר ההשקעה הצפוי בחנות החדשה שלכם.
      </p>

      {!result ? (
        <div className="space-y-3 flex-1">
          <select
            className="w-full border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none"
            style={{ borderColor: 'var(--border)' }}
            value={form.domain}
            onChange={(e) => setForm({ ...form, domain: e.target.value })}
          >
            <option value="">תחום העסק</option>
            {['ביגוד', 'פרחים', 'פארם', 'תכשיטים', 'טלפונים', 'סופרמרקט'].map(d => (
              <option key={d}>{d}</option>
            ))}
          </select>
          <select
            className="w-full border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none"
            style={{ borderColor: 'var(--border)' }}
            value={form.area}
            onChange={(e) => setForm({ ...form, area: e.target.value })}
          >
            <option value="">שטח החנות</option>
            {['עד 30 מ״ר', '30–60 מ״ר', '60–120 מ״ר', '120+ מ״ר'].map(a => (
              <option key={a}>{a}</option>
            ))}
          </select>
          <select
            className="w-full border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none"
            style={{ borderColor: 'var(--border)' }}
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
          >
            <option value="">תקציב משוער</option>
            {['עד 50,000 ₪', '50,000–150,000 ₪', '150,000+ ₪'].map(b => (
              <option key={b}>{b}</option>
            ))}
          </select>
          <button
            onClick={calculate}
            disabled={!form.domain}
            className="btn-gold w-full justify-center mt-2 disabled:opacity-50"
          >
            חשב ROI <TrendingUp className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="flex-1">
          <div className="rounded-xl p-4 mb-3 space-y-3" style={{ background: 'var(--muted)' }}>
            {[
              { label: 'השקעה משוערת', value: result.invest, color: 'var(--foreground)' },
              { label: 'זמן החזר משוער', value: result.payback, color: 'var(--accent)' },
              { label: 'צפי שיפור במכירות', value: result.growth, color: '#22c55e' },
            ].map(({ label, value, color }) => (
              <div key={label} className="flex justify-between items-center">
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{label}</span>
                <span className="font-black text-base" style={{ color }}>{value}</span>
              </div>
            ))}
          </div>
          <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>
            * הנתונים להמחשה בלבד ואינם התחייבות לתוצאה.
          </p>
          <div className="flex gap-2">
            <button onClick={() => setResult(null)} className="btn-outline text-sm flex-1 justify-center" style={{ padding: '10px' }}>
              חשב מחדש
            </button>
            <a href="/quote" className="btn-gold text-sm flex-1 justify-center" style={{ padding: '10px' }}>
              קבל הצעה
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────
export default function PremiumInteractiveZone() {
  return (
    <section className="py-16 lg:py-24" style={{ background: 'var(--muted)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="gold-label">כלים אינטראקטיביים</span>
          <h2 className="section-title">גלו את הפתרון הנכון לעסק שלכם</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <AIStorePlanner />
          <BeforeAfterSlider />
          <ROICalculator />
        </div>
      </div>
    </section>
  )
}
