'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Save, Camera, X } from 'lucide-react'

export default function AdminNewCategoryPage() {
  const router = useRouter()
  const fileRef = useRef<HTMLInputElement>(null)
  const [name, setName] = useState('')
  const [slug, setSlug] = useState('')
  const [nameEn, setNameEn] = useState('')
  const [desc, setDesc] = useState('')
  const [longDesc, setLongDesc] = useState('')
  const [image, setImage] = useState('')
  const [order, setOrder] = useState(0)
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  function handleNameChange(v: string) {
    setName(v)
    setSlug(v.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''))
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    const fd = new FormData()
    fd.append('file', file)
    const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
    const data = await res.json()
    if (data.url) setImage(data.url)
    else setError('שגיאה בהעלאת תמונה')
    setUploading(false)
  }

  async function handleSave() {
    if (!name || !slug) return
    setSaving(true)
    setError('')
    const res = await fetch('/api/admin/categories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, slug, name_en: nameEn, description: desc, long_description: longDesc, image, order }),
    })
    if (res.ok) {
      router.push('/admin/categories')
    } else {
      const d = await res.json()
      setError(d.error || 'שגיאה בשמירה')
      setSaving(false)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link href="/admin/categories" className="flex items-center gap-1.5 text-sm mb-2 transition-opacity hover:opacity-60" style={{ color: 'var(--text-muted)' }}>
            <ArrowLeft className="w-3.5 h-3.5 rotate-180" /> חזרה לקטגוריות
          </Link>
          <h1 className="font-black text-2xl" style={{ color: 'var(--foreground)' }}>קטגוריה חדשה</h1>
        </div>
        <button
          onClick={handleSave}
          disabled={!name || !slug || saving}
          className="btn-gold"
          style={{ fontSize: '0.85rem', padding: '10px 20px', opacity: (!name || !slug) ? 0.45 : 1 }}
        >
          <Save className="w-4 h-4" />
          {saving ? 'שומר...' : 'צור קטגוריה'}
        </button>
      </div>

      {error && (
        <div className="mb-5 p-4 rounded-xl text-sm" style={{ background: '#FFF0F0', border: '1px solid #FFCCCC', color: '#CC3333' }}>
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
            <h2 className="font-black text-base mb-5" style={{ color: 'var(--foreground)' }}>פרטי קטגוריה</h2>
            <div className="space-y-4">
              <Field label="שם קטגוריה (עברית) *" value={name} onChange={handleNameChange} placeholder="לדוגמה: ויטרינות" />
              <Field label="Slug (URL)" value={slug} onChange={setSlug} placeholder="vitrinot" />
              <Field label="שם באנגלית" value={nameEn} onChange={setNameEn} placeholder="Showcases" />
              <Field label="תיאור קצר" value={desc} onChange={setDesc} placeholder="תיאור קצר לכרטיס הקטגוריה" />
              <Field label="תיאור מלא" value={longDesc} onChange={setLongDesc} placeholder="תיאור מורחב שיופיע בדף הקטגוריה..." multiline />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
            <h2 className="font-black text-base mb-4" style={{ color: 'var(--foreground)' }}>תמונת קטגוריה</h2>
            {image ? (
              <div className="relative rounded-xl overflow-hidden mb-3" style={{ height: '200px', background: '#f5f5f5' }}>
                <img src={image} alt={name} className="w-full h-full object-cover" />
                <button onClick={() => setImage('')} className="absolute top-2 left-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => fileRef.current?.click()}
                className="w-full rounded-xl flex flex-col items-center justify-center gap-3 hover:bg-gray-50 mb-3"
                style={{ height: '140px', border: '2px dashed var(--border)' }}
              >
                <Camera className="w-7 h-7" style={{ color: 'var(--text-muted)' }} />
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>לחץ לבחירת תמונה</span>
              </button>
            )}
            <button onClick={() => fileRef.current?.click()} disabled={uploading} className="w-full py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-100" style={{ border: '1.5px solid var(--border)', color: 'var(--foreground)' }}>
              <Camera className="w-4 h-4 inline ml-2" />
              {uploading ? 'מעלה...' : image ? 'החלף תמונה' : 'העלה תמונה'}
            </button>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            <Field label="או הדבק URL" value={image} onChange={setImage} placeholder="https://..." />
          </div>
        </div>

        <div>
          <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
            <h2 className="font-black text-base mb-4" style={{ color: 'var(--foreground)' }}>הגדרות</h2>
            <Field label="סדר תצוגה" value={String(order)} onChange={v => setOrder(Number(v) || 0)} placeholder="0" />
          </div>
          <button
            onClick={handleSave}
            disabled={!name || !slug || saving}
            className="w-full btn-gold justify-center py-4 mt-4"
            style={{ opacity: (!name || !slug) ? 0.45 : 1 }}
          >
            <Save className="w-4 h-4" />
            {saving ? 'שומר...' : 'צור קטגוריה'}
          </button>
        </div>
      </div>
    </div>
  )
}

function Field({ label, value, onChange, placeholder, multiline }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; multiline?: boolean }) {
  const style: React.CSSProperties = { width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1.5px solid var(--border)', background: 'var(--muted)', fontSize: '0.9rem', color: 'var(--foreground)', outline: 'none', fontFamily: 'inherit', marginTop: '6px' }
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
