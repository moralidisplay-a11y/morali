import { Plus, FileText } from 'lucide-react'

export default function AdminArticlesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-black text-2xl mb-1" style={{ color: 'var(--foreground)' }}>בלוג ומאמרים</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>ניהול תוכן הבלוג</p>
        </div>
        <button className="btn-gold" style={{ fontSize: '0.85rem', padding: '10px 20px', opacity: 0.5, cursor: 'not-allowed' }}>
          <Plus className="w-4 h-4" />
          מאמר חדש
        </button>
      </div>

      <div className="py-24 flex flex-col items-center justify-center text-center bg-white rounded-2xl" style={{ border: '1px solid var(--border)' }}>
        <FileText className="w-10 h-10 mb-4" style={{ color: 'var(--border)' }} />
        <h2 className="font-black text-xl mb-2" style={{ color: 'var(--foreground)' }}>הבלוג עדיין ריק</h2>
        <p className="text-sm max-w-xs" style={{ color: 'var(--text-muted)' }}>
          לאחר חיבור Supabase ניתן יהיה לכתוב מאמרים, להוסיף תמונות, ולפרסם ישירות לאתר.
        </p>
      </div>
    </div>
  )
}
