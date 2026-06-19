import Link from 'next/link'
import { ArrowLeft, Package, Tag, FolderOpen, FileText, Users, TrendingUp, MessageCircle } from 'lucide-react'
import { categories, products } from '@/lib/catalog'

const stats = [
  { label: 'קטגוריות', value: '7', icon: Tag, href: '/admin/categories', color: '#C79A4B' },
  { label: 'מוצרים', value: products.length.toString(), icon: Package, href: '/admin/products', color: '#080808' },
  { label: 'פרויקטים', value: '3', icon: FolderOpen, href: '/admin/projects', color: '#4B7EC7' },
  { label: 'מאמרים', value: '0', icon: FileText, href: '/admin/articles', color: '#6B4BC7' },
]

const quickLinks = [
  { label: 'הוסף מוצר', href: '/admin/products/new', icon: Package },
  { label: 'הוסף קטגוריה', href: '/admin/categories/new', icon: Tag },
  { label: 'הוסף פרויקט', href: '/admin/projects/new', icon: FolderOpen },
  { label: 'כתוב מאמר', href: '/admin/articles/new', icon: FileText },
]

export default function AdminDashboard() {
  return (
    <div>
      {/* Header */}
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

      {/* Quick Links + Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

        {/* Quick Actions */}
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

        {/* DB Status */}
        <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
          <h2 className="font-black text-base mb-4" style={{ color: 'var(--foreground)' }}>סטטוס מערכת</h2>
          <div className="space-y-3">
            {[
              { label: 'Supabase DB', status: 'לא מחובר', ok: false },
              { label: 'Vercel Deploy', status: 'פעיל', ok: true },
              { label: 'WhatsApp CTA', status: 'פעיל', ok: true },
              { label: 'SEO Pages', status: 'סטטי', ok: true },
            ].map(({ label, status, ok }) => (
              <div key={label} className="flex items-center justify-between text-sm py-2.5" style={{ borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--foreground)' }}>{label}</span>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${ok ? 'bg-green-500' : 'bg-yellow-400'}`} />
                  <span style={{ color: ok ? '#22c55e' : '#eab308', fontWeight: 600 }}>{status}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 p-4 rounded-xl text-xs leading-relaxed" style={{ background: 'var(--muted)', color: 'var(--text-muted)' }}>
            <strong>לחיבור Supabase:</strong> הוסיפו NEXT_PUBLIC_SUPABASE_URL ו-NEXT_PUBLIC_SUPABASE_ANON_KEY בהגדרות הסביבה.
          </div>
        </div>
      </div>

      {/* Categories preview */}
      <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-black text-base" style={{ color: 'var(--foreground)' }}>קטגוריות ({categories.length})</h2>
          <Link href="/admin/categories" className="text-sm font-semibold flex items-center gap-1" style={{ color: 'var(--accent)' }}>
            ניהול <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/admin/categories/${c.slug}`}
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all hover:bg-gray-50"
              style={{ border: '1px solid var(--border)', color: 'var(--foreground)' }}
            >
              <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0">
                <img src={c.img} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0">
                <div className="truncate text-xs font-bold">{c.name}</div>
                <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{c.count}+ מוצ'</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
