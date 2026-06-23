'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Save, ExternalLink, Trash2, Camera, X } from 'lucide-react'

type Category = { id: string; slug: string; name: string }
type Product = {
  id: string
  slug: string
  category_slug: string
  name: string
  code: string
  price: string
  description: string
  img: string
  images: string[]
  features: string[]
  in_stock: boolean
  badge: string
  is_active: boolean
}

export default function AdminEditProductPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const fileRef = useRef<HTMLInputElement>(null)
  const [product, setProduct] = useState<Product | null>(null)
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [desc, setDesc] = useState('')
  const [categorySlug, setCategorySlug] = useState('')
  const [inStock, setInStock] = useState(true)
  const [badge, setBadge] = useState('')
  const [img, setImg] = useState('')
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    Promise.all([
      fetch(`/api/admin/products/${params.slug}`).then(r => r.json()),
      fetch('/api/admin/categories').then(r => r.json()),
    ]).then(([prod, cats]) => {
      if (prod.error) { setError('מוצר לא נמצא'); setLoading(false); return }
      setProduct(prod)
      setName(prod.name || '')
      setPrice(prod.price || '')
      setDesc(prod.description || '')
      setCategorySlug(prod.category_slug || '')
      setInStock(prod.in_stock ?? true)
      setBadge(prod.badge || '')
      setImg(prod.img || '')
      if (Array.isArray(cats)) setCategories(cats)
      setLoading(false)
    }).catch(() => { setError('שגיאה בטעינה'); setLoading(false) })
  }, [params.slug])

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    const fd = new FormData()
    fd.append('file', file)
    const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
    const data = await res.json()
    if (data.url) setImg(data.url)
    else setError('שגיאה בהעלאת תמונה')
    setUploading(false)
  }

  async function handleSave() {
    if (!product) return
    setSaving(true)
    setError('')
    const res = await fetch(`/api/admin/products/${product.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name, price, description: desc,
        category_slug: categorySlug,
        in_stock: inStock,
        badge: badge || null,
        img,
        images: img ? [img] : [],
        features: product.features || [],
        is_active: product.is_active,
      }),
    })
    if (res.ok) {
      setSaved(true)
      setTimeout(() => setSaved(false), 2500)
    } else {
      const d = await res.json()
      setError(d.error || 'שגיאה בשמירה')
    }
    setSaving(false)
  }

  async function handleDelete() {
    if (!product || !confirm(`למחוק את "${name}"?`)) return
    await fetch(`/api/admin/products/${product.id}`, { method: 'DELETE' })
    router.push('/admin/products')
  }

  if (loading) return <div className="py-20 text-center text-sm" style={{ color: 'var(--text-muted)' }}>טוען...</div>
  if (!product) return <div className="py-20 text-center text-sm" style={{ color: '#CC3333' }}>{error || 'מוצר לא נמצא'}</div>

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <Link href="/admin/products" className="flex items-center gap-1.5 text-sm mb-2 transition-opacity hover:opacity-60" style={{ color: 'var(--text-muted)' }}>
            <ArrowLeft className="w-3.5 h-3.5 rotate-180" /> חזרה
          </Link>
          <h1 className="font-black text-2xl" style={{ color: 'var(--foreground)' }}>עריכה: {name}</h1>
        </div>
        <div className="flex items-center gap-2">
          <Link href={`/products/${product.slug}`} target="_blank" className="flex items-center gap-1.5 text-sm font-semibold px-3 py-2.5 rounded-xl transition-colors hover:bg-gray-100" style={{ border: '1.5px solid var(--border)', color: 'var(--text-muted)' }}>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          <button onClick={handleDelete} className="px-3 py-2.5 rounded-xl transition-colors hover:bg-red-50" style={{ border: '1.5px solid #FFCCCC', color: '#CC3333' }}>
            <Trash2 className="w-4 h-4" />
          </button>
          <button onClick={handleSave} disabled={saving} className="btn-gold" style={{ fontSize: '0.85rem', padding: '10px 20px' }}>
            <Save className="w-4 h-4" />
            {saved ? '✓ נשמר' : saving ? 'שומר...' : 'שמור'}
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-5 p-4 rounded-xl text-sm" style={{ background: '#FFF0F0', border: '1px solid #FFCCCC', color: '#CC3333' }}>{error}</div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
            <h2 className="font-black text-base mb-5" style={{ color: 'var(--foreground)' }}>פרטי מוצר</h2>
            <div className="space-y-4">
              <Field label="שם מוצר" value={name} onChange={setName} />
              <Field label="מחיר" value={price} onChange={setPrice} placeholder="₪100–₪200" />
              <Field label="תיאור" value={desc} onChange={setDesc} multiline />
            </div>
          </div>

          {/* Image */}
          <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
            <h2 className="font-black text-base mb-4" style={{ color: 'var(--foreground)' }}>תמונת מוצר</h2>
            {img ? (
              <div className="relative rounded-xl overflow-hidden mb-3" style={{ height: '220px', background: '#f5f5f5' }}>
                <img src={img} alt={name} className="w-full h-full object-contain" />
                <button onClick={() => setImg('')} className="absolute top-2 left-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => fileRef.current?.click()}
                className="w-full rounded-xl flex flex-col items-center justify-center gap-3 transition-colors hover:bg-gray-50 mb-3"
                style={{ height: '140px', border: '2px dashed var(--border)' }}
              >
                <Camera className="w-7 h-7" style={{ color: 'var(--text-muted)' }} />
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>לחץ לבחירת תמונה</span>
              </button>
            )}
            <button
              onClick={() => fileRef.current?.click()}
              disabled={uploading}
              className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all hover:bg-gray-100"
              style={{ border: '1.5px solid var(--border)', color: 'var(--foreground)' }}
            >
              <Camera className="w-4 h-4 inline ml-2" />
              {uploading ? 'מעלה...' : img ? 'החלף תמונה' : 'העלה תמונה'}
            </button>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            <Field label="או הדבק URL" value={img} onChange={setImg} placeholder="https://..." />
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
            <h2 className="font-black text-base mb-4" style={{ color: 'var(--foreground)' }}>הגדרות</h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold tracking-wider uppercase block mb-2" style={{ color: 'var(--text-muted)' }}>קטגוריה</label>
                <select
                  value={categorySlug}
                  onChange={e => setCategorySlug(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid var(--border)', background: 'var(--muted)', fontSize: '0.9rem', color: 'var(--foreground)', outline: 'none', fontFamily: 'inherit' }}
                >
                  {categories.map(c => (
                    <option key={c.slug} value={c.slug}>{c.name}</option>
                  ))}
                </select>
              </div>
              <Field label="Badge" value={badge} onChange={setBadge} placeholder="חדש / נמכר ביותר" />
              <div>
                <label className="text-xs font-bold tracking-wider uppercase block mb-2" style={{ color: 'var(--text-muted)' }}>מלאי</label>
                <div className="flex gap-3">
                  {([true, false] as const).map(v => (
                    <button
                      key={String(v)}
                      onClick={() => setInStock(v)}
                      className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all"
                      style={{ background: inStock === v ? 'var(--primary)' : 'var(--muted)', color: inStock === v ? 'white' : 'var(--text-muted)', border: '1.5px solid', borderColor: inStock === v ? 'var(--primary)' : 'var(--border)' }}
                    >
                      {v ? 'במלאי' : 'אזל'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5" style={{ border: '1px solid var(--border)' }}>
            <div className="text-sm space-y-2">
              <div className="flex justify-between py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--text-muted)' }}>קוד</span>
                <code className="text-xs px-2 py-0.5 rounded" style={{ background: 'var(--muted)' }}>{product.code || '—'}</code>
              </div>
              <div className="flex justify-between py-2">
                <span style={{ color: 'var(--text-muted)' }}>Slug</span>
                <code className="text-xs px-2 py-0.5 rounded" style={{ background: 'var(--muted)' }}>{product.slug}</code>
              </div>
            </div>
          </div>

          <button onClick={handleSave} disabled={saving} className="w-full btn-gold justify-center py-4">
            <Save className="w-4 h-4" />
            {saved ? '✓ נשמר' : saving ? 'שומר...' : 'שמור שינויים'}
          </button>
        </div>
      </div>
    </div>
  )
}

function Field({ label, value, onChange, placeholder, multiline }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; multiline?: boolean
}) {
  const style: React.CSSProperties = {
    width: '100%', padding: '10px 14px', borderRadius: '10px',
    border: '1.5px solid var(--border)', background: 'var(--muted)',
    fontSize: '0.9rem', color: 'var(--foreground)', outline: 'none',
    fontFamily: 'inherit', marginTop: '6px',
  }
  return (
    <div>
      <label className="text-xs font-bold tracking-wider uppercase block mt-2" style={{ color: 'var(--text-muted)' }}>{label}</label>
      {multiline
        ? <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={4} style={{ ...style, resize: 'vertical' }} />
        : <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={style} />
      }
    </div>
  )
}
