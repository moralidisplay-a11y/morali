'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, Save, ExternalLink, Trash2, Camera, X } from 'lucide-react'

type Category = {
  id: string
  slug: string
  name: string
  name_en: string
  description: string
  long_description: string
  image: string
  order: number
  is_active: boolean
}

export default function AdminEditCategoryPage() {
  const router = useRouter()
  const { slug } = useParams<{ slug: string }>()
  const fileRef = useRef<HTMLInputElement>(null)
  const [cat, setCat] = useState<Category | null>(null)
  const [loading, setLoading] = useState(true)

  const [name, setName] = useState('')
  const [nameEn, setNameEn] = useState('')
  const [desc, setDesc] = useState('')
  const [longDesc, setLongDesc] = useState('')
  const [image, setImage] = useState('')
  const [order, setOrder] = useState(0)
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`/api/admin/categories/${slug}`)
      .then(r => r.json())
      .then(data => {
        if (data.error) { setError('קטגוריה לא נמצאה'); setLoading(false); return }
        setCat(data)
        setName(data.name || '')
        setNameEn(data.name_en || '')
        setDesc(data.description || '')
        setLongDesc(data.long_description || '')
        setImage(data.image || '')
        setOrder(data.order ?? 0)
        setLoading(false)
      })
      .catch(() => { setError('שגיאה בטעינה'); setLoading(false) })
  }, [slug])

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
    if (!cat) return
    setSaving(true)
    setError('')
    const res = await fetch(`/api/admin/categories/${cat.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, name_en: nameEn, description: desc, long_description: longDesc, image, order, is_active: cat.is_active }),
    })
    if (res.ok) { setSaved(true); setTimeout(() => setSaved(false), 2500) }
    else { const d = await res.json(); setError(d.error || 'שגיאה בשמירה') }
    setSaving(false)
  }

  async function handleDelete() {
    if (!cat || !confirm(`למחוק את "${name}"?`)) return
    await fetch(`/api/admin/categories/${cat.id}`, { method: 'DELETE' })
    router.push('/admin/categories')
  }

  if (loading) return <div className="py-20 text-center text-sm" style={{ color: 'var(--text-muted)' }}>טוען...</div>
  if (!cat) return <div className="py-20 text-center text-sm" style={{ color: '#CC3333' }}>{error || 'לא נמצא'}</div>

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <Link href="/admin/categories" className="flex items-center gap-1.5 text-sm mb-2 transition-opacity hover:opacity-60" style={{ color: 'var(--text-muted)' }}>
            <ArrowLeft className="w-3.5 h-3.5 rotate-180" /> חזרה
          </Link>
          <h1 className="font-black text-2xl" style={{ color: 'var(--foreground)' }}>עריכה: {name}</h1>
        </div>
        <div className="flex items-center gap-2">
          <Link href={`/categories/${cat.slug}`} target="_blank" className="p-2.5 rounded-xl transition-colors hover:bg-gray-100" style={{ border: '1.5px solid var(--border)', color: 'var(--text-muted)' }}>
            <ExternalLink className="w-4 h-4" />
          </Link>
          <button onClick={handleDelete} className="p-2.5 rounded-xl transition-colors hover:bg-red-50" style={{ border: '1.5px solid #FFCCCC', color: '#CC3333' }}>
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
            <h2 className="font-black text-base mb-5" style={{ color: 'var(--foreground)' }}>פרטי קטגוריה</h2>
            <div className="space-y-4">
              <Field label="שם קטגוריה (עברית)" value={name} onChange={setName} />
              <Field label="שם באנגלית" value={nameEn} onChange={setNameEn} />
              <Field label="תיאור קצר" value={desc} onChange={setDesc} />
              <Field label="תיאור מלא" value={longDesc} onChange={setLongDesc} multiline />
            </div>
          </div>

          {/* Image */}
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
                className="w-full rounded-xl flex flex-col items-center justify-center gap-3 transition-colors hover:bg-gray-50 mb-3"
                style={{ height: '140px', border: '2px dashed var(--border)' }}
              >
                <Camera className="w-7 h-7" style={{ color: 'var(--text-muted)' }} />
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>לחץ לבחירת תמונה</span>
              </button>
            )}
            <button onClick={() => fileRef.current?.click()} disabled={uploading} className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all hover:bg-gray-100" style={{ border: '1.5px solid var(--border)', color: 'var(--foreground)' }}>
              <Camera className="w-4 h-4 inline ml-2" />
              {uploading ? 'מעלה...' : image ? 'החלף תמונה' : 'העלה תמונה'}
            </button>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            <Field label="או הדבק URL" value={image} onChange={setImage} placeholder="https://..." />
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
            <h2 className="font-black text-base mb-4" style={{ color: 'var(--foreground)' }}>הגדרות</h2>
            <Field label="סדר תצוגה" value={String(order)} onChange={v => setOrder(Number(v))} placeholder="0" />
            <div className="mt-4 text-sm py-3" style={{ borderTop: '1px solid var(--border)', color: 'var(--text-muted)' }}>
              <div className="flex justify-between py-1.5">
                <span>Slug</span>
                <code className="text-xs px-2 py-0.5 rounded" style={{ background: 'var(--muted)' }}>{cat.slug}</code>
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
