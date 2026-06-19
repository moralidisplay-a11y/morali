'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Grid3X3, Sparkles, Package, Phone } from 'lucide-react'

const tabs = [
  { icon: Home,       label: 'בית',        href: '/' },
  { icon: Grid3X3,    label: 'קטגוריות',   href: '/categories' },
  { icon: Sparkles,   label: 'AI',          href: '/#ai-planner' },
  { icon: Package,    label: 'מוצרים',     href: '/products' },
  { icon: Phone,      label: 'צור קשר',    href: '/contact' },
]

export default function MobileNav() {
  const pathname = usePathname()

  return (
    <nav
      className="md:hidden fixed bottom-0 right-0 left-0 z-50 flex border-t"
      style={{
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(20px)',
        borderColor: 'var(--border)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      {tabs.map(({ icon: Icon, label, href }) => {
        const active = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className="flex-1 flex flex-col items-center justify-center py-3 gap-0.5 transition-colors"
            style={{ color: active ? 'var(--accent)' : 'var(--text-muted)' }}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
