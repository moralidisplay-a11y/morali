'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Save, Camera, X } from 'lucide-react'

type Category = { id: string; slug: string; name: string }

export default function AdminNewProductPage() {
  const router = useRouter()
  const fileRef = useRef<HTMLInputElement>(null)

  const [categories, setCategories] = useState<Category[]>([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [desc, setDesc] = useState('')
  const [categorySlug, setCategorySlug] = useState('')
  const [badge, setBadge] = useState('')
  const [inStock, setInStock] = useState(true)
  const [img, setImg] = useState('')
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/admin/categories')
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCategories(data)
          if (data[0]) setCategorySlug(data[0].slug)
        }
      })
      .catch(() => {})
  }, [])

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
    if (!name) return
    setSaving(true)
    setError('')
    const res = await fetch('/api/admin/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        price,
        description: desc,
        category_slug: categorySlug,
        badge: badge || null,
        in_stock: inStock,
        img,
        images: img ? [img] : [],
        features: [],
      }),
    })
    if (res.ok) {
      router.push('/admin/products')
    } else {
      const d = await res.json()
      setError(d.error || 'שגיאה בשמירה')
      setSaving(false)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <Link href="/admin/products" className="flex items-center gap-1.5 text-sm mb-2 transition-opacity hover:opacity-60" style={{ color: 'var(--text-muted)' }}>
            <ArrowLeft className="w-3.5 h-3.5 rotate-180" /> חזרה למוצרים
          </Link>
          <h1 className="font-black text-2xl" style={{ color: 'var(--foreground)' }}>מוצר חדש</h1>
        </div>
        <button
          onClick={handleSave}
          disabled={!name || saving}
          className="btn-gold"
          style={{ fontSize: '0.85rem', padding: '10px 20px', opacity: !name || saving ? 0.5 : 1 }}
        >
          <Save className="w-4 h-4" />
          {saving ? 'שומר...' : 'צור מוצר'}
        </button>
      </div>

      {error && (
        <div className="mb-5 p-4 rounded-xl text-sm" style={{ background: '#FFF0F0', border: '1px solid #FFCCCC', color: '#CC3333' }}>{error}</div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Main fields */}
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
            <h2 className="font-black text-base mb-5" style={{ color: 'var(--foreground)' }}>פרטי מוצר</h2>
            <div className="space-y-4">
              <Field label="שם מוצר *" value={name} onChange={setName} placeholder="לדוגמה: מתלה כרום כפול" />
              <Field label="מחיר" value={price} onChange={setPrice} placeholder="₪200–₪400" />
              <Field label="תיאור" value={desc} onChange={setDesc} multiline placeholder="תיאור המוצר..." />
            </div>
          </div>

          {/* Image upload */}
          <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
            <h2 className="font-black text-base mb-4" style={{ color: 'var(--foreground)' }}>תמונת מוצר</h2>
            {img ? (
              <div className="relative rounded-xl overflow-hidden mb-3" style={{ height: '220px', background: '#f5f5f5' }}>
                <img src={img} alt="preview" className="w-full h-full object-contain" />
                <button
                  onClick={() => setImg('')}
                  className="absolute top-2 left-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => fileRef.current?.click()}
                disabled={uploading}
                className="w-full rounded-xl flex flex-col items-center justify-center gap-3 transition-colors hover:bg-gray-50"
                style={{ height: '160px', border: '2px dashed var(--border)' }}
              >
                <Camera className="w-8 h-8" style={{ color: uploading ? 'var(--accent)' : 'var(--text-muted)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>
                  {uploading ? 'מעלה תמונה...' : 'לחץ לבחירת תמונה מהמכשיר'}
                </span>
              </button>
            )}
            {!img && (
              <button
                onClick={() => fileRef.current?.click()}
                className="w-full mt-3 py-2.5 rounded-xl text-sm font-semibold transition-all hover:bg-gray-100"
                style={{ border: '1.5px solid var(--border)', color: 'var(--foreground)' }}
              >
                {uploading ? 'מעלה...' : img ? 'החלף תמונה' : 'בחר תמונה'}
              </button>
            )}
            {img && (
              <button
                onClick={() => fileRef.current?.click()}
                className="w-full mt-2 py-2.5 rounded-xl text-sm font-semibold transition-all hover:bg-gray-100"
                style={{ border: '1.5px solid var(--border)', color: 'var(--foreground)' }}
              >
                החלף תמונה
              </button>
            )}
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <Field label="או הדבק URL תמונה" value={img} onChange={setImg} placeholder="https://..." />
          </div>
        </div>

        {/* Sidebar */}
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
              <Field label="Badge (אופציונלי)" value={badge} onChange={setBadge} placeholder="חדש / נמכר ביותר" />
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

          <button
            onClick={handleSave}
            disabled={!name || saving}
            className="w-full btn-gold justify-center py-4"
            style={{ opacity: !name || saving ? 0.5 : 1 }}
          >
            <Save className="w-4 h-4" />
            {saving ? 'שומר...' : 'צור מוצר'}
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
