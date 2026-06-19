import Link from 'next/link'
import { MessageCircle, Phone, Calendar, Tag } from 'lucide-react'

const mockLeads = [
  { id: 1, name: 'דנה כהן', business: 'בוטיק דנה', phone: '054-1234567', need: 'מערכות תלייה + בובות ראווה', budget: '₪20,000–₪30,000', date: '2025-01-10', status: 'חדש' },
  { id: 2, name: 'מוטי לוי', business: 'רשת ספורט אקטיב', phone: '052-9876543', need: 'מידוף + דלפקים', budget: '₪50,000+', date: '2025-01-09', status: 'בטיפול' },
  { id: 3, name: 'שירה אברמוב', business: 'חנות קוסמטיקה Glow', phone: '050-1122334', need: 'ויטרינות + מדפי קיר', budget: '₪15,000', date: '2025-01-08', status: 'הצעה נשלחה' },
]

const statusColors: Record<string, string> = {
  'חדש': '#22c55e',
  'בטיפול': '#eab308',
  'הצעה נשלחה': '#C79A4B',
  'סגור': '#6b7280',
}

export default function AdminLeadsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-black text-2xl mb-1" style={{ color: 'var(--foreground)' }}>לידים ובקשות הצעת מחיר</h1>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>בקשות שהגיעו דרך טופס ההצעה באתר</p>
      </div>

      {/* Placeholder note */}
      <div className="p-5 rounded-2xl text-sm mb-8 leading-relaxed" style={{ background: '#FFF8EC', border: '1px solid #F0D7A0', color: '#8A6520' }}>
        <strong>כרגע — דמו:</strong> הלידים שמוצגים כאן הם לדמו בלבד. לאחר חיבור Supabase, כל בקשת הצעת מחיר מהאתר תישמר אוטומטית כאן עם כל הפרטים.
      </div>

      <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
        <div className="px-6 py-4" style={{ borderBottom: '1px solid var(--border)', background: 'var(--muted)' }}>
          <div className="grid grid-cols-12 text-xs font-bold tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>
            <div className="col-span-3">לקוח</div>
            <div className="col-span-3">צורך</div>
            <div className="col-span-2">תקציב</div>
            <div className="col-span-2">תאריך</div>
            <div className="col-span-2">פעולות</div>
          </div>
        </div>

        {mockLeads.map((l, i) => (
          <div
            key={l.id}
            className="px-6 py-5 grid grid-cols-12 items-center hover:bg-gray-50 transition-colors"
            style={{ borderBottom: i < mockLeads.length - 1 ? '1px solid var(--border)' : 'none' }}
          >
            <div className="col-span-3">
              <div className="font-bold text-sm" style={{ color: 'var(--foreground)' }}>{l.name}</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{l.business}</div>
              <div className="flex items-center gap-1 mt-1">
                <div className="w-2 h-2 rounded-full" style={{ background: statusColors[l.status] ?? '#6b7280' }} />
                <span className="text-[10px] font-semibold" style={{ color: statusColors[l.status] ?? '#6b7280' }}>{l.status}</span>
              </div>
            </div>
            <div className="col-span-3 text-sm" style={{ color: 'var(--text-muted)' }}>{l.need}</div>
            <div className="col-span-2 text-sm font-bold" style={{ color: 'var(--accent)' }}>{l.budget}</div>
            <div className="col-span-2 text-xs" style={{ color: 'var(--text-muted)' }}>{l.date}</div>
            <div className="col-span-2 flex items-center gap-2">
              <a
                href={`https://wa.me/972${l.phone.replace(/[-\s]/g, '').replace(/^0/, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors hover:bg-green-50"
                style={{ color: '#22c55e', border: '1px solid #22c55e30' }}
              >
                <MessageCircle className="w-3 h-3" />
                WA
              </a>
              <a
                href={`tel:${l.phone}`}
                className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors hover:bg-gray-100"
                style={{ color: 'var(--text-muted)', border: '1px solid var(--border)' }}
              >
                <Phone className="w-3 h-3" />
                שיחה
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
