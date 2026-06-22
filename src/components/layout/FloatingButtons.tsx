'use client'

import { useState } from 'react'
import { MessageCircle, Sparkles, X } from 'lucide-react'

export default function FloatingButtons() {
  const [aiOpen, setAiOpen] = useState(false)

  return (
    <div className="fixed bottom-6 left-4 z-50 md:bottom-8 md:left-6 flex flex-col items-start gap-3">

      {/* AI Planner popup */}
      {aiOpen && (
        <div
          className="bg-white rounded-2xl shadow-2xl p-5 w-72"
          style={{ border: '1px solid var(--border)', animation: 'fadeInUp 0.25s ease' }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: 'var(--primary)' }}>
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-sm" style={{ color: 'var(--foreground)' }}>מתכנן חנות AI</span>
            </div>
            <button onClick={() => setAiOpen(false)} className="p-1 rounded-lg hover:bg-gray-100 transition-colors">
              <X className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
            </button>
          </div>
          <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
            לא בטוחים איך החנות שלכם צריכה להיראות? ספרו לנו ונבנה לכם כיוון ראשוני בחינם.
          </p>
          <a
            href="#store-planner"
            onClick={() => setAiOpen(false)}
            className="btn-gold w-full justify-center text-xs"
            style={{ padding: '9px 16px' }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            התחילו תכנון חנות
          </a>
        </div>
      )}

      <div className="flex items-center gap-2">
        <button
          onClick={() => setAiOpen(!aiOpen)}
          className="flex items-center gap-2 px-4 py-3 rounded-2xl text-white text-xs font-bold shadow-xl transition-all hover:scale-105 hover:opacity-90"
          style={{ background: 'var(--primary)' }}
        >
          <Sparkles className="w-4 h-4" style={{ color: 'var(--accent)' }} />
          תכנון AI
        </button>
        <a
          href="https://wa.me/972501234567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-2xl text-white text-xs font-bold shadow-xl transition-all hover:scale-105"
          style={{ background: '#25D366' }}
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
