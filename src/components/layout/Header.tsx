'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Search, ChevronDown } from 'lucide-react'

const MEGA_CATS = [
  {
    slug: 'hanging',
    name: 'מערכות תלייה',
    desc: '24 מוצרים',
    img: '/morali/IMG_4104.jpg',
    sub: ['מתלה מוט כפול', 'זרוע קיר', 'מעמד T', 'ווים ואביזרים'],
  },
  {
    slug: 'shelving',
    name: 'מידוף לחנויות',
    desc: '32 מוצרים',
    img: '/morali/IMG_4132.jpg',
    sub: ['מדפי קיר', 'מדפי עמידה', 'מדפי זכוכית', 'מודולרי'],
  },
  {
    slug: 'mannequins',
    name: 'בובות ראווה',
    desc: '18 מוצרים',
    img: '/morali/IMG_4096.jpg',
    sub: ['בובה מלאה', 'חצי גוף', 'ראשים וידיים', 'ילדים'],
  },
  {
    slug: 'slatwall',
    name: 'קירות מחורצים',
    desc: '45 מוצרים',
    img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=400&q=80',
    sub: ['לוחות MDF', 'לוחות PVC', 'ווים לסלאטוול', 'מדפי סלאטוול'],
  },
  {
    slug: 'counters',
    name: 'דלפקים וויטרינות',
    desc: '16 מוצרים',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80',
    sub: ['דלפק קופה', 'ויטרינות זכוכית', 'שולחן תצוגה', 'דלפק שירות'],
  },
  {
    slug: 'stands',
    name: 'סטנדים ומחזיקים',
    desc: '28 מוצרים',
    img: '/morali/IMG_4120.jpg',
    sub: ['סטנד מסתובב', 'מחזיק בקבוקים', 'מחזיקי ספרים', 'תצוגה חופשית'],
  },
  {
    slug: 'hangers',
    name: 'קולבים ואביזרים',
    desc: '120+ מוצרים',
    img: '/morali/IMG_4112.jpg',
    sub: ['קולבי עץ', 'קולבי מתכת', 'ווים', 'קליפסים ותגים'],
  },
]

const NAV = [
  { label: 'בית', href: '/' },
  { label: 'קטלוג', href: '/categories', mega: true },
  { label: 'פרויקטים', href: '/projects' },
  { label: 'השראה', href: '/inspiration' },
  { label: 'אודות', href: '/about' },
  { label: 'צור קשר', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setMegaOpen(true)
  }
  const closeMega = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120)
  }

  const textColor = scrolled || megaOpen ? 'var(--foreground)' : 'rgba(255,255,255,0.88)'

  return (
    <>
      <header
        className="sticky top-0 z-50 transition-all duration-500"
        style={{
          background: scrolled || megaOpen ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.0)',
          backdropFilter: scrolled || megaOpen ? 'blur(24px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled || megaOpen ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled || megaOpen ? '1px solid rgba(0,0,0,0.07)' : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 40px rgba(0,0,0,0.05)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-[68px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white text-sm" style={{ background: 'var(--primary)' }}>
                M
              </div>
              <div>
                <div className="font-black text-base leading-none tracking-tight" style={{ color: scrolled || megaOpen ? 'var(--primary)' : 'white', transition: 'color 0.4s' }}>
                  MORALI
                </div>
                <div className="text-[8px] font-semibold tracking-[0.2em] uppercase" style={{ color: 'var(--accent)' }}>
                  Retail Environments
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV.map(item => (
                <div key={item.label} className="relative">
                  {item.mega ? (
                    <button
                      className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors hover:bg-black/5"
                      style={{ color: textColor }}
                      onMouseEnter={openMega}
                      onMouseLeave={closeMega}
                    >
                      {item.label}
                      <ChevronDown className="w-3 h-3 opacity-60" style={{ transform: megaOpen ? 'rotate(180deg)' : '', transition: 'transform 0.3s' }} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors hover:bg-black/5"
                      style={{ color: textColor }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <button className="p-2 rounded-lg hidden sm:flex transition-colors hover:bg-black/5" style={{ color: textColor }}>
                <Search className="w-4 h-4" />
              </button>
              <Link
                href="/quote"
                className="hidden sm:inline-flex items-center gap-2 text-xs font-bold px-5 py-2.5 rounded-full transition-all ml-2"
                style={{
                  background: scrolled || megaOpen ? 'var(--primary)' : 'rgba(255,255,255,0.12)',
                  color: 'white',
                  border: scrolled || megaOpen ? 'none' : '1px solid rgba(255,255,255,0.25)',
                }}
              >
                הצעת מחיר
              </Link>
              <button
                className="lg:hidden p-2 rounded-lg transition-all"
                style={{ color: scrolled ? 'var(--foreground)' : 'white' }}
                onClick={() => setMobileOpen(v => !v)}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t px-4 py-5" style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(24px)', borderColor: 'rgba(0,0,0,0.07)' }}>
            <div className="space-y-1 mb-4">
              {NAV.map(item => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                    style={{ color: 'var(--foreground)' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.mega && (
                    <div className="pr-5 pb-2 grid grid-cols-2 gap-1">
                      {MEGA_CATS.map(c => (
                        <Link
                          key={c.slug}
                          href={`/categories/${c.slug}`}
                          className="block px-3 py-2 text-xs rounded-lg hover:bg-gray-50 transition-colors font-medium"
                          style={{ color: 'var(--text-muted)' }}
                          onClick={() => setMobileOpen(false)}
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Link href="/quote" className="btn-gold w-full justify-center" onClick={() => setMobileOpen(false)}>
              קבל הצעת מחיר
            </Link>
          </div>
        )}
      </header>

      {/* MEGA MENU — full width panel below header */}
      {megaOpen && (
        <div
          className="fixed inset-x-0 z-40"
          style={{ top: '68px' }}
          onMouseEnter={openMega}
          onMouseLeave={closeMega}
        >
          <div
            className="w-full shadow-2xl"
            style={{ background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(32px)', borderBottom: '1px solid rgba(0,0,0,0.07)' }}
          >
            <div className="max-w-7xl mx-auto px-10 py-8">
              <div className="flex gap-8">

                {/* Left: featured active category image */}
                <div className="hidden xl:block shrink-0" style={{ width: '240px' }}>
                  <div className="rounded-2xl overflow-hidden" style={{ height: '280px', background: '#f5f5f5' }}>
                    <img
                      src={MEGA_CATS[activeIdx].img}
                      alt={MEGA_CATS[activeIdx].name}
                      className="w-full h-full object-cover transition-all duration-400"
                    />
                  </div>
                  <div className="mt-3">
                    <div className="font-black text-sm" style={{ color: 'var(--primary)' }}>{MEGA_CATS[activeIdx].name}</div>
                    <Link
                      href={`/categories/${MEGA_CATS[activeIdx].slug}`}
                      className="text-xs font-semibold mt-1 inline-block transition-opacity hover:opacity-60"
                      style={{ color: 'var(--accent)' }}
                      onClick={() => setMegaOpen(false)}
                    >
                      צפה בכל המוצרים →
                    </Link>
                  </div>
                </div>

                {/* Right: category grid */}
                <div className="flex-1 grid grid-cols-3 lg:grid-cols-4 gap-3">
                  {MEGA_CATS.map((cat, i) => (
                    <div
                      key={cat.slug}
                      onMouseEnter={() => setActiveIdx(i)}
                    >
                      <Link
                        href={`/categories/${cat.slug}`}
                        className="group block rounded-xl overflow-hidden transition-all hover:shadow-md"
                        style={{ border: '1px solid rgba(0,0,0,0.07)', background: i === activeIdx ? '#f8f6f2' : 'white' }}
                        onClick={() => setMegaOpen(false)}
                      >
                        {/* Cat image */}
                        <div className="overflow-hidden" style={{ height: '110px', background: '#f5f5f5' }}>
                          <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div className="p-3">
                          <div className="font-black text-sm mb-1" style={{ color: 'var(--primary)' }}>{cat.name}</div>
                          <div className="text-[10px] font-semibold mb-2" style={{ color: 'var(--accent)' }}>{cat.desc}</div>
                          <div className="space-y-0.5">
                            {cat.sub.slice(0, 3).map(s => (
                              <div key={s} className="text-[11px]" style={{ color: 'var(--text-muted)' }}>· {s}</div>
                            ))}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}

                  {/* All products link */}
                  <Link
                    href="/categories"
                    className="group flex flex-col items-center justify-center rounded-xl transition-all hover:bg-gray-50"
                    style={{ border: '1.5px dashed var(--border)', minHeight: '160px' }}
                    onClick={() => setMegaOpen(false)}
                  >
                    <div className="text-2xl mb-2">→</div>
                    <div className="text-xs font-bold text-center" style={{ color: 'var(--primary)' }}>כל הקטגוריות</div>
                  </Link>
                </div>
              </div>

              {/* Bottom quick links */}
              <div className="mt-6 pt-5 flex items-center gap-6 flex-wrap" style={{ borderTop: '1px solid var(--border)' }}>
                <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>פופולרי:</span>
                {['מתלה מוט כפול', 'מדף קיר', 'בובת ראווה שחורה', 'דלפק קופה', 'קיר מחורץ לבן', 'סטנד מסתובב'].map(t => (
                  <Link
                    key={t}
                    href={`/products?q=${encodeURIComponent(t)}`}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all hover:bg-gray-100"
                    style={{ color: 'var(--foreground)', border: '1px solid var(--border)' }}
                    onClick={() => setMegaOpen(false)}
                  >
                    {t}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
