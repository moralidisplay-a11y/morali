'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search, Heart, ShoppingBag, ChevronDown, Phone } from 'lucide-react'

const navItems = [
  { label: 'בית', href: '/' },
  {
    label: 'קטגוריות', href: '/categories',
    children: [
      { label: 'מערכות תלייה', href: '/categories/hanging' },
      { label: 'בובות ראווה', href: '/categories/mannequins' },
      { label: 'קירות מחורצים', href: '/categories/slatwall' },
      { label: 'מידוף לחנויות', href: '/categories/shelving' },
      { label: 'סטנדים ומחזיקים', href: '/categories/stands' },
      { label: 'דלפקים', href: '/categories/counters' },
    ],
  },
  { label: 'מוצרים', href: '/products' },
  { label: 'פרויקטים', href: '/projects' },
  { label: 'פתרונות לעסק', href: '/solutions' },
  { label: 'השראה', href: '/inspiration' },
  { label: 'בלוג', href: '/articles' },
  { label: 'אודות', href: '/about' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-white" style={{ borderBottom: '1px solid var(--border)', boxShadow: '0 1px 20px rgba(0,0,0,0.06)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-white text-base"
              style={{ background: 'var(--primary)' }}
            >
              M
            </div>
            <div>
              <div className="font-black text-lg leading-none tracking-tight" style={{ color: 'var(--primary)' }}>
                MORALI
              </div>
              <div className="text-[10px] font-medium tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
                Retail Environments
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <>
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-50"
                      style={{ color: 'var(--foreground)' }}
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.label}
                      <ChevronDown className="w-3 h-3 opacity-50" />
                    </button>
                    {openDropdown === item.label && (
                      <div
                        className="absolute top-full right-0 mt-1 w-52 bg-white rounded-2xl shadow-xl border py-2 z-50"
                        style={{ borderColor: 'var(--border)' }}
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm transition-colors hover:bg-gray-50"
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
                    className="px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-50 block"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            {/* Phone — desktop only */}
            <a
              href="tel:050-1234567"
              className="hidden lg:flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors ml-1"
              style={{ color: 'var(--foreground)' }}
            >
              <Phone className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
              050-1234567
            </a>
            <button className="hidden lg:flex p-2.5 rounded-xl hover:bg-gray-50 transition-colors" title="חיפוש">
              <Search className="w-4.5 h-4.5" style={{ color: 'var(--text-muted)' }} />
            </button>
            <button className="hidden lg:flex p-2.5 rounded-xl hover:bg-gray-50 transition-colors relative" title="מועדפים">
              <Heart className="w-4.5 h-4.5" style={{ color: 'var(--text-muted)' }} />
            </button>
            <button className="hidden lg:flex p-2.5 rounded-xl hover:bg-gray-50 transition-colors relative" title="עגלה">
              <ShoppingBag className="w-4.5 h-4.5" style={{ color: 'var(--text-muted)' }} />
            </button>
            <Link
              href="/quote"
              className="btn-gold hidden sm:inline-flex mr-2"
              style={{ padding: '9px 20px', fontSize: '0.85rem' }}
            >
              קבל הצעת מחיר
            </Link>
            <button
              className="lg:hidden p-2.5 rounded-xl hover:bg-gray-50 transition-colors"
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
          className="lg:hidden border-t bg-white px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto"
          style={{ borderColor: 'var(--border)' }}
        >
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block px-4 py-3 text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pr-6 space-y-0.5">
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
            <Link href="/quote" className="btn-gold w-full justify-center" onClick={() => setMobileOpen(false)}>
              קבל הצעת מחיר
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
