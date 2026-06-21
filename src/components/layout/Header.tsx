'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search, Heart, ShoppingCart, User, ChevronDown, Phone } from 'lucide-react'

const categories = [
  { label: 'רלסים ותצוגה', href: '/categories/hanging' },
  { label: 'בובות ראווה', href: '/categories/mannequins' },
  { label: 'מידוף לחניות', href: '/categories/shelving' },
  { label: 'קירות מחורצים', href: '/categories/slatwall' },
  { label: 'דלפקים וויטרינות', href: '/categories/counters' },
  { label: 'קולבים ואביזרים', href: '/categories/hangers' },
  { label: 'סטנדים ומחזיקים', href: '/categories/stands' },
]

const navItems = [
  { label: 'בית', href: '/' },
  { label: 'מוצרים', href: '/products', children: categories },
  { label: 'פתרונות לפי עסק', href: '/solutions' },
  { label: 'פרויקטים', href: '/projects' },
  { label: 'השראה', href: '/inspiration' },
  { label: 'בלוג', href: '/articles' },
  { label: 'אודות', href: '/about' },
  { label: 'צור קשר', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="sticky top-0 z-50 bg-white" style={{ borderBottom: '1px solid var(--border)', boxShadow: '0 2px 24px rgba(0,0,0,0.07)' }}>

      {/* Row 1: Logo + Search + Icons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3">

          {/* LEFT: Actions */}
          <div className="flex items-center gap-1 order-last lg:order-first shrink-0">
            <Link
              href="/quote"
              className="btn-gold hidden sm:inline-flex"
              style={{ padding: '8px 18px', fontSize: '0.82rem', whiteSpace: 'nowrap' }}
            >
              קבל הצעת מחיר
            </Link>
            <a
              href="https://wa.me/972501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl hover:bg-gray-50 transition-colors hidden lg:flex"
              title="WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" fill="#25D366"/>
              </svg>
            </a>
            <button className="p-2.5 rounded-xl hover:bg-gray-50 transition-colors relative" title="מועדפים">
              <Heart className="w-5 h-5" style={{ color: 'var(--text-muted)' }} />
            </button>
            <button className="p-2.5 rounded-xl hover:bg-gray-50 transition-colors relative" title="עגלה">
              <ShoppingCart className="w-5 h-5" style={{ color: 'var(--text-muted)' }} />
            </button>
            <button className="p-2.5 rounded-xl hover:bg-gray-50 transition-colors hidden sm:flex" title="חשבון">
              <User className="w-5 h-5" style={{ color: 'var(--text-muted)' }} />
            </button>
            <button
              className="lg:hidden p-2.5 rounded-xl hover:bg-gray-50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* CENTER: Search */}
          <div className="flex-1 max-w-xl hidden sm:block">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="חיפוש מוצרים, קטגוריות ומאמרים..."
                className="w-full text-sm"
                style={{
                  padding: '10px 42px 10px 16px',
                  borderRadius: '12px',
                  border: '1.5px solid var(--border)',
                  background: 'var(--muted)',
                  color: 'var(--foreground)',
                  outline: 'none',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: 'var(--text-muted)' }} />
            </div>
          </div>

          {/* RIGHT: Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 order-first lg:order-last">
            <div>
              <div className="font-black text-2xl leading-none tracking-tight" style={{ color: 'var(--primary)' }}>
                MORALI
              </div>
              <div className="text-[9px] font-medium tracking-widest uppercase" style={{ color: 'var(--accent)', marginTop: '2px' }}>
                מתקני תצוגה וציוד לחניות
              </div>
            </div>
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center font-black text-white text-lg shrink-0"
              style={{ background: 'var(--primary)' }}
            >
              M
            </div>
          </Link>

        </div>
      </div>

      {/* Row 2: Nav */}
      <div className="hidden lg:block" style={{ borderTop: '1px solid var(--border)', background: 'var(--muted)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">

            {/* Phone */}
            <a
              href="tel:050-1234567"
              className="flex items-center gap-1.5 text-xs font-semibold py-3 transition-opacity hover:opacity-70"
              style={{ color: 'var(--text-muted)' }}
            >
              <Phone className="w-3 h-3" style={{ color: 'var(--accent)' }} />
              050-1234567
            </a>

            {/* Nav items */}
            <div className="flex items-center">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <>
                      <button
                        className="flex items-center gap-1 px-4 py-3 text-sm font-medium transition-colors hover:text-black"
                        style={{ color: 'var(--foreground)' }}
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.label}
                        <ChevronDown className="w-3 h-3 opacity-50" />
                      </button>
                      {openDropdown === item.label && (
                        <div
                          className="absolute top-full right-0 w-52 bg-white rounded-2xl shadow-xl py-2 z-50"
                          style={{ border: '1px solid var(--border)', marginTop: '-1px' }}
                          onMouseEnter={() => setOpenDropdown(item.label)}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          <Link
                            href="/products"
                            className="block px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-gray-50"
                            style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)', marginBottom: '4px' }}
                          >
                            כל המוצרים
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
                      className="block px-4 py-3 text-sm font-medium transition-colors hover:text-black"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-white px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto" style={{ borderColor: 'var(--border)' }}>
          {/* Mobile search */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="חיפוש..."
              className="w-full text-sm"
              style={{ padding: '10px 40px 10px 14px', borderRadius: '10px', border: '1.5px solid var(--border)', background: 'var(--muted)', color: 'var(--foreground)', outline: 'none', fontFamily: 'inherit' }}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--text-muted)' }} />
          </div>

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
                <div className="pr-6 space-y-0.5 pb-2">
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

          <div className="pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
            <a href="tel:050-1234567" className="flex items-center gap-2 px-4 py-3 text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>
              <Phone className="w-4 h-4" style={{ color: 'var(--accent)' }} />
              050-1234567
            </a>
            <Link href="/quote" className="btn-gold w-full justify-center mt-2" onClick={() => setMobileOpen(false)}>
              קבל הצעת מחיר
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
