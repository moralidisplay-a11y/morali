import Link from 'next/link'
import { Package, Tag, FolderOpen, FileText } from 'lucide-react'
import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'

async function getDashboardData() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return { supabaseOk: false, categoryCount: 0, productCount: 0 }

  try {
    const db = createClient(url, key)
    const [{ count: catCount }, { count: prodCount }] = await Promise.all([
      db.from('categories').select('*', { count: 'exact', head: true }),
      db.from('products').select('*', { count: 'exact', head: true }),
    ])
    return { supabaseOk: true, categoryCount: catCount ?? 0, productCount: prodCount ?? 0 }
  } catch {
    return { supabaseOk: false, categoryCount: 0, productCount: 0 }
  }
}

const quickLinks = [
  { label: 'הוסף מוצר', href: '/admin/products/new', icon: Package },
  { label: 'הוסף קטגוריה', href: '/admin/categories/new', icon: Tag },
  { label: 'הוסף פרויקט', href: '/admin/projects/new', icon: FolderOpen },
  { label: 'כתוב מאמר', href: '/admin/articles/new', icon: FileText },
]

export default async function AdminDashboard() {
  const { supabaseOk, categoryCount, productCount } = await getDashboardData()

  const stats = [
    { label: 'קטגוריות', value: categoryCount.toString(), icon: Tag, href: '/admin/categories', color: '#C79A4B' },
    { label: 'מוצרים', value: productCount.toString(), icon: Package, href: '/admin/products', color: '#080808' },
    { label: 'פרויקטים', value: '3', icon: FolderOpen, href: '/admin/projects', color: '#4B7EC7' },
    { label: 'מאמרים', value: '0', icon: FileText, href: '/admin/articles', color: '#6B4BC7' },
  ]

  const systemStatus = [
    { label: 'Supabase DB', status: supabaseOk ? 'מחובר' : 'לא מחובר', ok: supabaseOk },
    { label: 'Vercel Deploy', status: 'פעיל', ok: true },
    { label: 'WhatsApp CTA', status: 'פעיל', ok: true },
    { label: 'דפים דינמיים', status: 'פעיל', ok: true },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-black text-2xl mb-1" style={{ color: 'var(--foreground)' }}>ברוכים הבאים, MORALI 👋</h1>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>לוח הניהול של האתר — ניהול מוצרים, פרויקטים, ומאמרים.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(({ label, value, icon: Icon, href, color }) => (
          <Link
            key={label}
            href={href}
            className="bg-white rounded-2xl p-6 flex flex-col gap-4 transition-all hover:shadow-md"
            style={{ border: '1px solid var(--border)' }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: color + '15' }}>
              <Icon className="w-5 h-5" style={{ color }} />
            </div>
            <div>
              <div className="font-black text-3xl leading-none mb-1" style={{ color: 'var(--foreground)' }}>{value}</div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{label}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Links + Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
          <h2 className="font-black text-base mb-4" style={{ color: 'var(--foreground)' }}>פעולות מהירות</h2>
          <div className="grid grid-cols-2 gap-3">
            {quickLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-2.5 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all hover:bg-gray-50"
                style={{ border: '1.5px solid var(--border)', color: 'var(--foreground)' }}
              >
                <Icon className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
          <h2 className="font-black text-base mb-4" style={{ color: 'var(--foreground)' }}>סטטוס מערכת</h2>
          <div className="space-y-3">
            {systemStatus.map(({ label, status, ok }) => (
              <div key={label} className="flex items-center justify-between text-sm py-2.5" style={{ borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--foreground)' }}>{label}</span>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${ok ? 'bg-green-500' : 'bg-yellow-400'}`} />
                  <span style={{ color: ok ? '#22c55e' : '#eab308', fontWeight: 600 }}>{status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories preview */}
      <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-black text-base" style={{ color: 'var(--foreground)' }}>ניהול מהיר</h2>
          <Link href="/admin/categories" className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>
            כל הקטגוריות →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { slug: 'hanging', name: 'מערכות תלייה' },
            { slug: 'mannequins', name: 'בובות ראווה' },
            { slug: 'shelving', name: 'מידוף לחנויות' },
            { slug: 'slatwall', name: 'קירות מחורצים' },
            { slug: 'counters', name: 'דלפקים וויטרינות' },
            { slug: 'hangers', name: 'קולבים ואביזרים' },
            { slug: 'stands', name: 'סטנדים ומחזיקים' },
          ].map((c) => (
            <Link
              key={c.slug}
              href={`/admin/categories/${c.slug}`}
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all hover:bg-gray-50"
              style={{ border: '1px solid var(--border)', color: 'var(--foreground)' }}
            >
              <Tag className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
              <span className="truncate text-xs font-bold">{c.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
