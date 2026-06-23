'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, ExternalLink, Package, Trash2, RefreshCw } from 'lucide-react'

type Category = {
  id: string
  slug: string
  name: string
  name_en: string
  image: string
  order: number
  is_active: boolean
}

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [deleting, setDeleting] = useState<string | null>(null)

  async function load() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/categories')
      if (!res.ok) throw new Error()
      setCategories(await res.json())
    } catch {
      setError('לא ניתן לטעון קטגוריות. בדוק חיבור Supabase.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  async function handleDelete(id: string, name: string) {
    if (!confirm(`למחוק את הקטגוריה "${name}"?`)) return
    setDeleting(id)
    await fetch(`/api/admin/categories/${id}`, { method: 'DELETE' })
    setDeleting(null)
    load()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-black text-2xl mb-1" style={{ color: 'var(--foreground)' }}>קטגוריות</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{categories.length} קטגוריות</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={load} className="p-2.5 rounded-xl hover:bg-white transition-colors" style={{ border: '1px solid var(--border)' }}>
            <RefreshCw className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
          </button>
          <Link href="/admin/categories/new" className="btn-gold" style={{ fontSize: '0.85rem', padding: '10px 20px' }}>
            <Plus className="w-4 h-4" />
            הוסף קטגוריה
          </Link>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-xl text-sm" style={{ background: '#FFF0F0', border: '1px solid #FFCCCC', color: '#CC3333' }}>
          {error} <Link href="/admin/settings" className="font-bold underline mr-2">הגדרות</Link>
        </div>
      )}

      <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
        {loading ? (
          <div className="py-20 text-center text-sm" style={{ color: 'var(--text-muted)' }}>טוען...</div>
        ) : categories.length === 0 ? (
          <div className="py-20 text-center text-sm" style={{ color: 'var(--text-muted)' }}>אין קטגוריות עדיין</div>
        ) : (
          <>
            <div className="px-6 py-3 hidden sm:grid grid-cols-12 text-xs font-bold tracking-wider uppercase" style={{ color: 'var(--text-muted)', borderBottom: '1px solid var(--border)', background: 'var(--muted)' }}>
              <div className="col-span-5">שם</div>
              <div className="col-span-3">slug</div>
              <div className="col-span-1">סדר</div>
              <div className="col-span-3">פעולות</div>
            </div>

            {categories.map((cat, i) => (
              <div
                key={cat.id}
                className="px-4 py-4 grid grid-cols-12 items-center transition-colors hover:bg-gray-50"
                style={{ borderBottom: i < categories.length - 1 ? '1px solid var(--border)' : 'none' }}
              >
                <div className="col-span-7 sm:col-span-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0" style={{ background: 'var(--muted)' }}>
                    {cat.image && <img src={cat.image} alt="" className="w-full h-full object-cover" />}
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: 'var(--foreground)' }}>{cat.name}</div>
                    {cat.name_en && <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{cat.name_en}</div>}
                  </div>
                </div>

                <div className="col-span-3 hidden sm:block">
                  <code className="text-xs px-2 py-1 rounded-lg" style={{ background: 'var(--muted)', color: 'var(--text-muted)' }}>{cat.slug}</code>
                </div>

                <div className="col-span-1 hidden sm:block text-sm" style={{ color: 'var(--text-muted)' }}>{cat.order}</div>

                <div className="col-span-5 sm:col-span-3 flex items-center gap-2 justify-end sm:justify-start">
                  <Link href={`/admin/categories/${cat.slug}`} className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors hover:bg-gray-100" style={{ color: 'var(--foreground)', border: '1px solid var(--border)' }}>
                    עריכה
                  </Link>
                  <Link href={`/categories/${cat.slug}`} target="_blank" className="flex items-center p-1.5 rounded-lg transition-colors hover:bg-gray-100" style={{ color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                  <button onClick={() => handleDelete(cat.id, cat.name)} disabled={deleting === cat.id} className="p-1.5 rounded-lg transition-colors hover:bg-red-50" style={{ color: '#CC3333', border: '1px solid #FFCCCC' }}>
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
