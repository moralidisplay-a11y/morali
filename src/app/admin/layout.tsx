'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard, Tag, Package, FolderOpen, FileText,
  Users, Settings, Menu, X, ChevronLeft, ExternalLink
} from 'lucide-react'

const nav = [
  { label: 'דשבורד', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'קטגוריות', href: '/admin/categories', icon: Tag },
  { label: 'מוצרים', href: '/admin/products', icon: Package },
  { label: 'פרויקטים', href: '/admin/projects', icon: FolderOpen },
  { label: 'בלוג / מאמרים', href: '/admin/articles', icon: FileText },
  { label: 'לידים ובקשות', href: '/admin/leads', icon: Users },
  { label: 'הגדרות', href: '/admin/settings', icon: Settings },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen flex" style={{ background: '#F0EDE8', direction: 'rtl' }}>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-64 flex flex-col transition-transform duration-300 lg:translate-x-0 lg:static lg:flex ${open ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ background: '#080808', borderLeft: '1px solid rgba(255,255,255,0.06)' }}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-5 py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm" style={{ background: 'var(--accent)', color: 'white' }}>M</div>
            <div>
              <div className="font-black text-white text-sm">MORALI</div>
              <div className="text-[9px] font-semibold tracking-widest uppercase" style={{ color: 'var(--accent)' }}>Admin Panel</div>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="lg:hidden p-1 text-white/40 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {nav.map(({ label, href, icon: Icon }) => {
            const active = pathname === href || (href !== '/admin/dashboard' && pathname.startsWith(href))
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-5 py-3 text-sm font-semibold transition-all"
                style={{
                  color: active ? 'white' : 'rgba(255,255,255,0.4)',
                  background: active ? 'rgba(199,154,75,0.12)' : 'transparent',
                  borderRight: active ? '3px solid var(--accent)' : '3px solid transparent',
                }}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 text-xs px-3 py-2.5 rounded-lg transition-colors hover:bg-white/5"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            <ExternalLink className="w-3 h-3" />
            צפייה באתר
          </Link>
        </div>
      </aside>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: 'rgba(0,0,0,0.5)' }}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white px-6 py-4 flex items-center gap-4" style={{ borderBottom: '1px solid var(--border)', boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--text-muted)' }}>
            <span>ניהול</span>
            <ChevronLeft className="w-3 h-3" />
            <span className="font-semibold" style={{ color: 'var(--foreground)' }}>
              {nav.find(n => pathname === n.href || (n.href !== '/admin/dashboard' && pathname.startsWith(n.href)))?.label ?? 'דשבורד'}
            </span>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
