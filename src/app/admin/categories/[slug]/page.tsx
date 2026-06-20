'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Save, ExternalLink } from 'lucide-react'
import { getCategoryBySlug } from '@/lib/catalog'
import { notFound } from 'next/navigation'

export default function AdminEditCategoryPage({ params }: { params: { slug: string } }) {
  const cat = getCategoryBySlug(params.slug)
  if (!cat) notFound()

  const [name, setName] = useState(cat.name)
  const [desc, setDesc] = useState(cat.desc)
  const [longDesc, setLongDesc] = useState(cat.longDesc)
  const [saved, setSaved] = useState(false)

  function handleSave() {
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link href="/admin/categories" className="flex items-center gap-1.5 text-sm mb-2 transition-opacity hover:opacity-60" style={{ color: 'var(--text-muted)' }}>
            <ArrowLeft className="w-3.5 h-3.5 rotate-180" /> חזרה לקטגוריות
          </Link>
          <h1 className="font-black text-2xl" style={{ color: 'var(--foreground)' }}>עריכת קטגוריה: {cat.name}</h1>
        </div>
        <div className="flex items-center gap-3">
          <Link href={`/categories/${cat.slug}`} target="_blank" className="flex items-center gap-1.5 text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors hover:bg-gray-100" style={{ border: '1.5px solid var(--border)', color: 'var(--text-muted)' }}>
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
            <h2 className="font-black text-base mb-5" style={{ color: 'var(--foreground)' }}>פרטי קטגוריה</h2>
            <div className="space-y-4">
              <Field label="שם קטגוריה" value={name} onChange={setName} />
              <Field label="תיאור קצר" value={desc} onChange={setDesc} />
              <Field label="תיאור מלא" value={longDesc} onChange={setLongDesc} multiline />
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
            <h2 className="font-black text-base mb-4" style={{ color: 'var(--foreground)' }}>פרטים</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--text-muted)' }}>Slug</span>
                <code className="text-xs px-2 py-0.5 rounded" style={{ background: 'var(--muted)' }}>{cat.slug}</code>
              </div>
              <div className="flex justify-between py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--text-muted)' }}>שם באנגלית</span>
                <span style={{ color: 'var(--foreground)' }}>{cat.nameEn}</span>
              </div>
              <div className="flex justify-between py-2">
                <span style={{ color: 'var(--text-muted)' }}>מספר מוצרים</span>
                <span style={{ color: 'var(--foreground)' }}>{cat.count}+</span>
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

function Field({ label, value, onChange, multiline }: { label: string; value: string; onChange: (v: string) => void; multiline?: boolean }) {
  const style: React.CSSProperties = { width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid var(--border)', background: 'var(--muted)', fontSize: '0.9rem', color: 'var(--foreground)', outline: 'none', fontFamily: 'inherit' }
  return (
    <div>
      <label className="text-xs font-bold tracking-wider uppercase block mb-2" style={{ color: 'var(--text-muted)' }}>{label}</label>
      {multiline
        ? <textarea value={value} onChange={e => onChange(e.target.value)} rows={4} style={{ ...style, resize: 'vertical' }} />
        : <input value={value} onChange={e => onChange(e.target.value)} style={style} />
      }
    </div>
  )
}
