'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Search, Heart, ShoppingCart, ChevronDown } from 'lucide-react'

const categories = [
  { label: 'רלסים ומערכות תלייה', href: '/categories/hanging' },
  { label: 'בובות ראווה', href: '/categories/mannequins' },
  { label: 'מידוף לחנויות', href: '/categories/shelving' },
  { label: 'קירות מחורצים', href: '/categories/slatwall' },
  { label: 'דלפקים וויטרינות', href: '/categories/counters' },
  { label: 'קולבים ואביזרים', href: '/categories/hangers' },
  { label: 'סטנדים ומחזיקים', href: '/categories/stands' },
]

const navItems = [
  { label: 'בית', href: '/' },
  { label: 'מוצרים', href: '/products', children: categories },
  { label: 'פרויקטים', href: '/projects' },
  { label: 'פתרונות', href: '/solutions' },
  { label: 'השראה', href: '/inspiration' },
  { label: 'אודות', href: '/about' },
  { label: 'צור קשר', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.0)',
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 40px rgba(0,0,0,0.05)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white text-sm"
              style={{ background: 'var(--primary)' }}
            >
              M
            </div>
            <div>
              <div
                className="font-black text-base leading-none tracking-tight transition-colors duration-500"
                style={{ color: scrolled ? 'var(--primary)' : 'white' }}
              >
                MORALI
              </div>
              <div
                className="text-[8px] font-semibold tracking-[0.2em] uppercase transition-colors duration-500"
                style={{ color: scrolled ? 'var(--accent)' : 'rgba(199,154,75,0.7)' }}
              >
                Retail Environments
              </div>
            </div>
          </Link>

          {/* Desktop Nav — centered */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <>
                    <button
                      className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-black/5"
                      style={{ color: scrolled ? 'var(--foreground)' : 'rgba(255,255,255,0.85)' }}
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.label}
                      <ChevronDown className="w-3 h-3 opacity-50" />
                    </button>
                    {openDropdown === item.label && (
                      <div
                        className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl py-2 z-50"
                        style={{ border: '1px solid rgba(0,0,0,0.06)', backdropFilter: 'blur(12px)' }}
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <Link
                          href="/products"
                          className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-gray-50"
                          style={{ color: 'var(--accent)', borderBottom: '1px solid rgba(0,0,0,0.05)', marginBottom: '4px' }}
                        >
                          כל המוצרים →
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm transition-colors hover:bg-gray-50"
                            style={{ color: 'var(--foreground)' }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-black/5"
                    style={{ color: scrolled ? 'var(--foreground)' : 'rgba(255,255,255,0.85)' }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button
              className="p-2 rounded-lg transition-all duration-200 hover:bg-black/8 hidden sm:flex"
              style={{ color: scrolled ? 'var(--text-muted)' : 'rgba(255,255,255,0.65)' }}
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              className="p-2 rounded-lg transition-all duration-200 hover:bg-black/8 hidden sm:flex"
              style={{ color: scrolled ? 'var(--text-muted)' : 'rgba(255,255,255,0.65)' }}
            >
              <Heart className="w-4 h-4" />
            </button>

            <Link
              href="/quote"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-bold px-5 py-2.5 rounded-full transition-all ml-2"
              style={{
                background: scrolled ? 'var(--primary)' : 'rgba(255,255,255,0.12)',
                color: 'white',
                border: scrolled ? 'none' : '1px solid rgba(255,255,255,0.22)',
                backdropFilter: scrolled ? 'none' : 'blur(8px)',
              }}
            >
              הצעת מחיר
            </Link>

            <button
              className="lg:hidden p-2 rounded-lg transition-all"
              style={{ color: scrolled ? 'var(--foreground)' : 'white' }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t px-4 py-5 space-y-1"
          style={{
            background: 'rgba(255,255,255,0.96)',
            backdropFilter: 'blur(24px)',
            borderColor: 'rgba(0,0,0,0.06)',
          }}
        >
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block px-4 py-3 text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                style={{ color: 'var(--foreground)' }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pr-6 pb-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-3 py-2 text-sm rounded-lg hover:bg-gray-50 transition-colors"
                      style={{ color: 'var(--text-muted)' }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-3 border-t" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
            <Link href="/quote" className="btn-gold w-full justify-center" onClick={() => setMobileOpen(false)}>
              קבל הצעת מחיר
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
