'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, ExternalLink, Search, Check } from 'lucide-react'
import { products, categories } from '@/lib/catalog'

export default function AdminProductsPage() {
  const [activeCat, setActiveCat] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = products.filter(p => {
    const matchCat = activeCat === 'all' || p.categorySlug === activeCat
    const matchQ = !query || p.name.includes(query) || p.code.includes(query)
    return matchCat && matchQ
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-black text-2xl mb-1" style={{ color: 'var(--foreground)' }}>מוצרים</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{products.length} מוצרים בקטלוג</p>
        </div>
        <Link href="/admin/products/new" className="btn-gold" style={{ fontSize: '0.85rem', padding: '10px 20px' }}>
          <Plus className="w-4 h-4" />
          הוסף מוצר
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="חיפוש לפי שם / קוד..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="pr-10 pl-4 py-2.5 text-sm rounded-xl"
            style={{ border: '1.5px solid var(--border)', background: 'white', outline: 'none', color: 'var(--foreground)', minWidth: '240px' }}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setActiveCat('all')}
            className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
            style={{ background: activeCat === 'all' ? 'var(--primary)' : 'white', color: activeCat === 'all' ? 'white' : 'var(--text-muted)', border: '1.5px solid', borderColor: activeCat === 'all' ? 'var(--primary)' : 'var(--border)' }}
          >
            הכל ({products.length})
          </button>
          {categories.map(c => (
            <button
              key={c.slug}
              onClick={() => setActiveCat(c.slug)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
              style={{ background: activeCat === c.slug ? 'var(--primary)' : 'white', color: activeCat === c.slug ? 'white' : 'var(--text-muted)', border: '1.5px solid', borderColor: activeCat === c.slug ? 'var(--primary)' : 'var(--border)' }}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
        <div className="px-6 py-4" style={{ borderBottom: '1px solid var(--border)', background: 'var(--muted)' }}>
          <div className="grid grid-cols-12 text-xs font-bold tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>
            <div className="col-span-4">מוצר</div>
            <div className="col-span-2">קוד</div>
            <div className="col-span-2">מחיר</div>
            <div className="col-span-1">מלאי</div>
            <div className="col-span-3">פעולות</div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="py-16 text-center text-sm" style={{ color: 'var(--text-muted)' }}>לא נמצאו מוצרים</div>
        ) : (
          filtered.map((p, i) => (
            <div
              key={p.slug}
              className="px-6 py-4 grid grid-cols-12 items-center transition-colors hover:bg-gray-50"
              style={{ borderBottom: i < filtered.length - 1 ? '1px solid var(--border)' : 'none' }}
            >
              {/* Product */}
              <div className="col-span-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0" style={{ background: 'var(--muted)' }}>
                  <img src={p.img} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-sm leading-tight" style={{ color: 'var(--foreground)' }}>{p.name}</div>
                  {p.badge && (
                    <span className="inline-block text-[9px] font-bold px-2 py-0.5 rounded-full mt-0.5" style={{ background: 'var(--accent)', color: 'white' }}>{p.badge}</span>
                  )}
                </div>
              </div>

              {/* Code */}
              <div className="col-span-2">
                <code className="text-xs px-2 py-1 rounded-lg" style={{ background: 'var(--muted)', color: 'var(--text-muted)' }}>{p.code}</code>
              </div>

              {/* Price */}
              <div className="col-span-2 text-sm font-bold" style={{ color: 'var(--accent)' }}>{p.price}</div>

              {/* Stock */}
              <div className="col-span-1">
                <div className={`w-2.5 h-2.5 rounded-full ${p.inStock ? 'bg-green-500' : 'bg-gray-300'}`} />
              </div>

              {/* Actions */}
              <div className="col-span-3 flex items-center gap-2">
                <Link
                  href={`/admin/products/${p.slug}`}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors hover:bg-gray-100"
                  style={{ color: 'var(--foreground)', border: '1px solid var(--border)' }}
                >
                  עריכה
                </Link>
                <Link
                  href={`/products/${p.slug}`}
                  target="_blank"
                  className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors hover:bg-gray-100"
                  style={{ color: 'var(--text-muted)', border: '1px solid var(--border)' }}
                >
                  <ExternalLink className="w-3 h-3" />
                  צפייה
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

      <p className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
        מציג {filtered.length} מתוך {products.length} מוצרים ·{' '}
        <Link href="/admin/settings" className="underline hover:no-underline">חיבור Supabase</Link>{' '}
        יאפשר עריכה ושמירה דינמית.
      </p>
    </div>
  )
}
