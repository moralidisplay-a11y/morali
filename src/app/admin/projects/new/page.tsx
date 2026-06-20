'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Save } from 'lucide-react'

export default function AdminNewProjectPage() {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [location, setLocation] = useState('')
  const [goal, setGoal] = useState('')
  const [saved, setSaved] = useState(false)

  const canSave = title && type && location

  function handleSave() {
    if (!canSave) return
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link href="/admin/projects" className="flex items-center gap-1.5 text-sm mb-2 transition-opacity hover:opacity-60" style={{ color: 'var(--text-muted)' }}>
            <ArrowLeft className="w-3.5 h-3.5 rotate-180" /> חזרה לפרויקטים
          </Link>
          <h1 className="font-black text-2xl" style={{ color: 'var(--foreground)' }}>פרויקט חדש</h1>
        </div>
        <button onClick={handleSave} disabled={!canSave} className="btn-gold" style={{ fontSize: '0.85rem', padding: '10px 20px', opacity: !canSave ? 0.45 : 1 }}>
          <Save className="w-4 h-4" />
          {saved ? 'נשמר ✓' : 'צור פרויקט'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
            <h2 className="font-black text-base mb-5" style={{ color: 'var(--foreground)' }}>פרטי פרויקט</h2>
            <div className="space-y-4">
              <Field label="שם הפרויקט *" value={title} onChange={setTitle} placeholder="רשת ביגוד — תל אביב" />
              <Field label="סוג פרויקט *" value={type} onChange={setType} placeholder="Fashion Retail / Pharmacy / Beauty..." />
              <Field label="מיקום *" value={location} onChange={setLocation} placeholder="תל אביב / ארצי / הרצליה..." />
              <Field label="יעד הפרויקט" value={goal} onChange={setGoal} multiline placeholder="תיאור מטרת הפרויקט..." />
            </div>
          </div>
        </div>
        <div>
          <div className="p-5 rounded-2xl text-sm leading-relaxed" style={{ background: '#FFF8EC', border: '1px solid #F0D7A0', color: '#8A6520' }}>
            <strong>הערה:</strong> לאחר חיבור Supabase, הפרויקט יישמר ויופיע אוטומטית בדף הפרויקטים.
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
