'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, ExternalLink, Search, Trash2, RefreshCw } from 'lucide-react'

type Product = {
  id: string
  slug: string
  category_slug: string
  name: string
  code: string
  price: string
  img: string
  in_stock: boolean
  badge?: string
  is_active: boolean
  created_at: string
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [activeCat, setActiveCat] = useState('all')
  const [deleting, setDeleting] = useState<string | null>(null)
  const [error, setError] = useState('')

  async function load() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/products')
      if (!res.ok) throw new Error('שגיאה בטעינה')
      setProducts(await res.json())
    } catch {
      setError('לא ניתן לטעון מוצרים. בדוק חיבור Supabase.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  async function handleDelete(id: string, name: string) {
    if (!confirm(`למחוק את "${name}"?`)) return
    setDeleting(id)
    await fetch(`/api/admin/products/${id}`, { method: 'DELETE' })
    setDeleting(null)
    load()
  }

  const cats = [...new Set(products.map(p => p.category_slug))]
  const filtered = products.filter(p => {
    const matchCat = activeCat === 'all' || p.category_slug === activeCat
    const matchQ = !query || p.name.includes(query) || p.code?.includes(query)
    return matchCat && matchQ
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-black text-2xl mb-1" style={{ color: 'var(--foreground)' }}>מוצרים</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{products.length} מוצרים בקטלוג</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={load} className="p-2.5 rounded-xl hover:bg-white transition-colors" style={{ border: '1px solid var(--border)' }} title="רענן">
            <RefreshCw className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
          </button>
          <Link href="/admin/products/new" className="btn-gold" style={{ fontSize: '0.85rem', padding: '10px 20px' }}>
            <Plus className="w-4 h-4" />
            הוסף מוצר
          </Link>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-xl text-sm" style={{ background: '#FFF0F0', border: '1px solid #FFCCCC', color: '#CC3333' }}>
          {error}
          <Link href="/admin/settings" className="font-bold underline mr-2">הגדרות Supabase</Link>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="חיפוש לפי שם / קוד..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="pr-10 pl-4 py-2.5 text-sm rounded-xl"
            style={{ border: '1.5px solid var(--border)', background: 'white', outline: 'none', color: 'var(--foreground)', minWidth: '240px', fontFamily: 'inherit' }}
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
          {cats.map(c => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
              style={{ background: activeCat === c ? 'var(--primary)' : 'white', color: activeCat === c ? 'white' : 'var(--text-muted)', border: '1.5px solid', borderColor: activeCat === c ? 'var(--primary)' : 'var(--border)' }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
        {loading ? (
          <div className="py-20 text-center text-sm" style={{ color: 'var(--text-muted)' }}>טוען מוצרים...</div>
        ) : filtered.length === 0 ? (
          <div className="py-20 text-center text-sm" style={{ color: 'var(--text-muted)' }}>
            {products.length === 0 ? 'אין מוצרים עדיין — הוסף את הראשון!' : 'לא נמצאו מוצרים'}
          </div>
        ) : (
          <>
            <div className="px-4 py-3 hidden sm:grid grid-cols-12 text-xs font-bold tracking-wider uppercase" style={{ color: 'var(--text-muted)', borderBottom: '1px solid var(--border)', background: 'var(--muted)' }}>
              <div className="col-span-5">מוצר</div>
              <div className="col-span-2">קוד</div>
              <div className="col-span-2">מחיר</div>
              <div className="col-span-1">מלאי</div>
              <div className="col-span-2">פעולות</div>
            </div>

            {filtered.map((p, i) => (
              <div
                key={p.id}
                className="px-4 py-4 grid grid-cols-12 items-center transition-colors hover:bg-gray-50"
                style={{ borderBottom: i < filtered.length - 1 ? '1px solid var(--border)' : 'none' }}
              >
                <div className="col-span-7 sm:col-span-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0" style={{ background: 'var(--muted)' }}>
                    {p.img && <img src={p.img} alt="" className="w-full h-full object-cover" />}
                  </div>
                  <div>
                    <div className="font-semibold text-sm leading-tight" style={{ color: 'var(--foreground)' }}>{p.name}</div>
                    {p.badge && (
                      <span className="inline-block text-[9px] font-bold px-2 py-0.5 rounded-full mt-0.5" style={{ background: 'var(--accent)', color: 'white' }}>{p.badge}</span>
                    )}
                  </div>
                </div>

                <div className="col-span-2 hidden sm:block">
                  <code className="text-xs px-2 py-1 rounded-lg" style={{ background: 'var(--muted)', color: 'var(--text-muted)' }}>{p.code || '—'}</code>
                </div>

                <div className="col-span-2 hidden sm:block text-sm font-bold" style={{ color: 'var(--accent)' }}>{p.price || '—'}</div>

                <div className="col-span-1 hidden sm:block">
                  <div className={`w-2.5 h-2.5 rounded-full ${p.in_stock ? 'bg-green-500' : 'bg-gray-300'}`} />
                </div>

                <div className="col-span-5 sm:col-span-2 flex items-center gap-2 justify-end sm:justify-start">
                  <Link
                    href={`/admin/products/${p.slug}`}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors hover:bg-gray-100"
                    style={{ color: 'var(--foreground)', border: '1px solid var(--border)' }}
                  >
                    עריכה
                  </Link>
                  <button
                    onClick={() => handleDelete(p.id, p.name)}
                    disabled={deleting === p.id}
                    className="p-1.5 rounded-lg transition-colors hover:bg-red-50"
                    style={{ color: '#CC3333', border: '1px solid #FFCCCC' }}
                    title="מחק"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}
