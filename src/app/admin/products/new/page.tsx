'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Save } from 'lucide-react'
import { categories } from '@/lib/catalog'

export default function AdminNewProductPage() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [desc, setDesc] = useState('')
  const [categorySlug, setCategorySlug] = useState(categories[0]?.slug ?? '')
  const [badge, setBadge] = useState('')
  const [inStock, setInStock] = useState(true)
  const [saved, setSaved] = useState(false)

  function handleSave() {
    if (!name || !price || !desc) return
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const canSave = name && price && desc

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link href="/admin/products" className="flex items-center gap-1.5 text-sm mb-2 transition-opacity hover:opacity-60" style={{ color: 'var(--text-muted)' }}>
            <ArrowLeft className="w-3.5 h-3.5 rotate-180" /> חזרה למוצרים
          </Link>
          <h1 className="font-black text-2xl" style={{ color: 'var(--foreground)' }}>מוצר חדש</h1>
        </div>
        <button onClick={handleSave} disabled={!canSave} className="btn-gold" style={{ fontSize: '0.85rem', padding: '10px 20px', opacity: !canSave ? 0.45 : 1 }}>
          <Save className="w-4 h-4" />
          {saved ? 'נשמר ✓' : 'צור מוצר'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
            <h2 className="font-black text-base mb-5" style={{ color: 'var(--foreground)' }}>פרטי מוצר</h2>
            <div className="space-y-4">
              <Field label="שם מוצר *" value={name} onChange={setName} placeholder="לדוגמה: מתלה כרום כפול" />
              <Field label="מחיר *" value={price} onChange={setPrice} placeholder="₪200–₪400" />
              <Field label="תיאור *" value={desc} onChange={setDesc} multiline placeholder="תיאור המוצר שיופיע בדף המוצר..." />
            </div>
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
              <Field label="Badge (אופציונלי)" value={badge} onChange={setBadge} placeholder="חדש / נמכר ביותר" />
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
          <div className="p-4 rounded-xl text-xs leading-relaxed" style={{ background: '#FFF8EC', border: '1px solid #F0D7A0', color: '#8A6520' }}>
            <strong>הערה:</strong> לאחר חיבור Supabase, המוצר יישמר לדאטאבייס ויופיע אוטומטית באתר.
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
