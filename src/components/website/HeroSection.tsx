'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'

const POPULAR = ['מוט כפול', 'מדף קיר', 'בובת ראווה', 'קיר מחורץ', 'דלפק קופה']

const CATS = [
  { label: 'מידוף', href: '/categories/shelving' },
  { label: 'מערכות תלייה', href: '/categories/hanging' },
  { label: 'קירות מחורצים', href: '/categories/slatwall' },
  { label: 'בובות ראווה', href: '/categories/mannequins' },
  { label: 'דלפקים', href: '/categories/counters' },
  { label: 'סטנדים', href: '/categories/stands' },
]

export default function HeroSection() {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) window.location.href = `/products?q=${encodeURIComponent(query.trim())}`
  }

  return (
    <section className="relative overflow-hidden" style={{ height: '100svh', minHeight: '680px' }}>
      <img
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=2400&q=90"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 30%' }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(165deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.75) 100%)' }} />

      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-20 lg:pb-28 px-6 lg:px-16">
        <div className="mb-4 text-[10px] font-bold tracking-[0.5em] uppercase" style={{ color: 'rgba(199,154,75,0.75)', animation: 'fadeUp 0.8s 0.1s both' }}>
          מתקני תצוגה מקצועיים · מורלי
        </div>

        <h1
          className="font-black text-white mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', lineHeight: 0.92, letterSpacing: '-0.04em', maxWidth: '12ch', animation: 'fadeUp 0.9s 0.2s both' }}
        >
          פתרונות<br />
          <span style={{ color: 'var(--accent)' }}>תצוגה</span><br />
          לחנויות
        </h1>

        <form onSubmit={handleSearch} className="mb-8" style={{ maxWidth: '500px', animation: 'fadeUp 0.9s 0.35s both' }}>
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl" style={{ background: 'rgba(255,255,255,0.97)', boxShadow: '0 12px 48px rgba(0,0,0,0.25)' }}>
            <Search className="w-4 h-4 shrink-0" style={{ color: '#aaa' }} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="חפש מוצר..."
              className="flex-1 bg-transparent outline-none text-right text-sm"
              style={{ color: '#111', direction: 'rtl' }}
            />
            <button type="submit" className="shrink-0 px-4 py-1.5 rounded-xl text-xs font-bold text-white" style={{ background: 'var(--primary)' }}>
              חיפוש
            </button>
          </div>
          <div className="flex items-center gap-2 mt-2.5 flex-wrap">
            <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.3)' }}>נפוץ:</span>
            {POPULAR.map(t => (
              <button key={t} type="button" onClick={() => { setQuery(t); inputRef.current?.focus() }} className="text-[10px] font-medium px-2 py-0.5 rounded-full transition-all hover:bg-white/20" style={{ color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.15)' }}>
                {t}
              </button>
            ))}
          </div>
        </form>

        <div className="flex flex-col gap-3" style={{ animation: 'fadeUp 0.9s 0.5s both' }}>
          <div className="flex items-center gap-3 flex-wrap">
            <Link href="/categories" className="btn-gold" style={{ fontSize: '0.85rem', padding: '12px 28px', borderRadius: '999px' }}>
              עיון בקטלוג
            </Link>
            <a href="https://wa.me/972505559491" className="text-sm font-semibold transition-all hover:text-white" style={{ color: 'rgba(255,255,255,0.55)', padding: '12px 24px', border: '1px solid rgba(255,255,255,0.18)', borderRadius: '999px' }}>
              קבלו הצעת מחיר
            </a>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {CATS.map(c => (
              <Link key={c.href} href={c.href} className="text-[11px] font-medium px-3 py-1.5 rounded-full transition-all hover:bg-white/15" style={{ color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.12)' }}>
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
