'use client'

import { useState } from 'react'
import { MessageCircle, Sparkles, X } from 'lucide-react'

export default function FloatingButtons() {
  const [aiOpen, setAiOpen] = useState(false)

  return (
    <div className="fixed bottom-6 left-4 z-50 flex flex-col gap-3 items-start md:bottom-8 md:left-6">
      {/* WhatsApp */}
      <a
        href="https://wa.me/972501234567"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 rounded-2xl text-white text-sm font-semibold shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
        style={{ background: '#25D366' }}
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:block">WhatsApp</span>
      </a>

      {/* AI Planner */}
      <button
        onClick={() => setAiOpen(!aiOpen)}
        className="flex items-center gap-2 px-4 py-3 rounded-2xl text-white text-sm font-bold shadow-xl transition-all hover:scale-105 hover:shadow-2xl animate-pulse-gold"
        style={{ background: 'var(--accent)' }}
      >
        <Sparkles className="w-5 h-5" />
        <span className="hidden sm:block">תכנן לי חנות 🤖</span>
        {aiOpen && <X className="w-4 h-4" />}
      </button>

      {/* AI Quick Form */}
      {aiOpen && (
        <div
          className="absolute bottom-full mb-3 left-0 w-72 bg-white rounded-2xl shadow-2xl border p-4"
          style={{ borderColor: 'var(--border)' }}
        >
          <div className="font-bold mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4" style={{ color: 'var(--accent)' }} />
            מתכנן חנות AI
          </div>
          <select className="w-full border rounded-xl px-3 py-2.5 text-sm mb-2 focus:outline-none" style={{ borderColor: 'var(--border)' }}>
            <option value="">תחום העסק</option>
            {['ביגוד', 'פרחים', 'פארם', 'תכשיטים', 'אחר'].map(d => <option key={d}>{d}</option>)}
          </select>
          <select className="w-full border rounded-xl px-3 py-2.5 text-sm mb-3 focus:outline-none" style={{ borderColor: 'var(--border)' }}>
            <option value="">שטח החנות</option>
            {['עד 30 מ״ר', '30–60 מ״ר', '60–120 מ״ר', '120+ מ״ר'].map(a => <option key={a}>{a}</option>)}
          </select>
          <a href="/#ai-planner" className="btn-gold w-full justify-center text-sm" style={{ padding: '10px' }}>
            לתוצאה המלאה
          </a>
        </div>
      )}
    </div>
  )
}
