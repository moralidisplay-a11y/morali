'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Save, ExternalLink } from 'lucide-react'
import { getProductBySlug, categories } from '@/lib/catalog'
import { notFound } from 'next/navigation'

export default function AdminEditProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const [name, setName] = useState(product.name)
  const [price, setPrice] = useState(product.price)
  const [desc, setDesc] = useState(product.desc)
  const [categorySlug, setCategorySlug] = useState(product.categorySlug)
  const [inStock, setInStock] = useState(product.inStock)
  const [badge, setBadge] = useState(product.badge ?? '')
  const [saved, setSaved] = useState(false)

  function handleSave() {
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link href="/admin/products" className="flex items-center gap-1.5 text-sm mb-2 transition-opacity hover:opacity-60" style={{ color: 'var(--text-muted)' }}>
            <ArrowLeft className="w-3.5 h-3.5 rotate-180" /> חזרה למוצרים
          </Link>
          <h1 className="font-black text-2xl" style={{ color: 'var(--foreground)' }}>עריכת מוצר: {product.name}</h1>
        </div>
        <div className="flex items-center gap-3">
          <Link href={`/products/${product.slug}`} target="_blank" className="flex items-center gap-1.5 text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors hover:bg-gray-100" style={{ border: '1.5px solid var(--border)', color: 'var(--text-muted)' }}>
            <ExternalLink className="w-3.5 h-3.5" /> צפייה
          </Link>
          <button onClick={handleSave} className="btn-gold" style={{ fontSize: '0.85rem', padding: '10px 20px' }}>
            <Save className="w-4 h-4" />
            {saved ? 'נשמר ✓' : 'שמור שינויים'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
            <h2 className="font-black text-base mb-5" style={{ color: 'var(--foreground)' }}>פרטי מוצר</h2>
            <div className="space-y-4">
              <Field label="שם מוצר" value={name} onChange={setName} />
              <Field label="מחיר" value={price} onChange={setPrice} placeholder="₪100–₪200" />
              <Field label="תיאור" value={desc} onChange={setDesc} multiline />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
            <h2 className="font-black text-base mb-5" style={{ color: 'var(--foreground)' }}>תמונה ראשית</h2>
            <div className="rounded-xl overflow-hidden mb-4" style={{ height: '200px', background: 'var(--muted)' }}>
              <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>לאחר חיבור Supabase ניתן יהיה להעלות תמונות חדשות.</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
            <h2 className="font-black text-base mb-4" style={{ color: 'var(--foreground)' }}>הגדרות</h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold tracking-wider uppercase block mb-2" style={{ color: 'var(--text-muted)' }}>קטגוריה</label>
                <select value={categorySlug} onChange={e => setCategorySlug(e.target.value)} style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid var(--border)', background: 'var(--muted)', fontSize: '0.9rem', color: 'var(--foreground)', outline: 'none', fontFamily: 'inherit' }}>
                  {categories.map(c => (
                    <option key={c.slug} value={c.slug}>{c.name}</option>
                  ))}
                </select>
              </div>
              <Field label="Badge (אופציונלי)" value={badge} onChange={setBadge} placeholder="נמכר ביותר / חדש / פרימיום" />
              <div>
                <label className="text-xs font-bold tracking-wider uppercase block mb-2" style={{ color: 'var(--text-muted)' }}>מלאי</label>
                <div className="flex gap-3">
                  {[true, false].map(v => (
                    <button key={String(v)} onClick={() => setInStock(v)} className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all" style={{ background: inStock === v ? 'var(--primary)' : 'var(--muted)', color: inStock === v ? 'white' : 'var(--text-muted)', border: '1.5px solid', borderColor: inStock === v ? 'var(--primary)' : 'var(--border)' }}>
                      {v ? 'במלאי' : 'אזל'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
            <h2 className="font-black text-base mb-3" style={{ color: 'var(--foreground)' }}>פרטים</h2>
            <div className="text-sm space-y-2">
              <div className="flex justify-between py-1.5" style={{ borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--text-muted)' }}>קוד</span>
                <code className="text-xs px-2 py-0.5 rounded" style={{ background: 'var(--muted)' }}>{product.code}</code>
              </div>
              <div className="flex justify-between py-1.5">
                <span style={{ color: 'var(--text-muted)' }}>Slug</span>
                <code className="text-xs px-2 py-0.5 rounded" style={{ background: 'var(--muted)' }}>{product.slug}</code>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl text-xs leading-relaxed" style={{ background: '#FFF8EC', border: '1px solid #F0D7A0', color: '#8A6520' }}>
            <strong>הערה:</strong> שינויים ישמרו לאחר חיבור Supabase. כרגע הנתונים סטטיים.
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({ label, value, onChange, placeholder, multiline }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; multiline?: boolean }) {
  const style: React.CSSProperties = { width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid var(--border)', background: 'var(--muted)', fontSize: '0.9rem', color: 'var(--foreground)', outline: 'none', fontFamily: 'inherit' }
  return (
    <div>
      <label className="text-xs font-bold tracking-wider uppercase block mb-2" style={{ color: 'var(--text-muted)' }}>{label}</label>
      {multiline
        ? <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={4} style={{ ...style, resize: 'vertical' }} />
        : <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={style} />
      }
    </div>
  )
}
