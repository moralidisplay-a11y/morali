import Link from 'next/link'
import { Plus, ExternalLink } from 'lucide-react'

const staticProjects = [
  { slug: 'fashion-store-tel-aviv', name: 'רשת ביגוד פרימיום', type: 'Fashion Retail', location: 'תל אביב', year: '2024' },
  { slug: 'beauty-store-herzliya', name: 'בוטיק קוסמטיקה', type: 'Beauty & Cosmetics', location: 'הרצליה פיתוח', year: '2024' },
  { slug: 'pharmacy-chain', name: 'רשת פארמה ארצית', type: 'Pharmacy Chain', location: 'ארצי', year: '2023' },
]

export default function AdminProjectsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-black text-2xl mb-1" style={{ color: 'var(--foreground)' }}>פרויקטים</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{staticProjects.length} פרויקטים באתר</p>
        </div>
        <button className="btn-gold" style={{ fontSize: '0.85rem', padding: '10px 20px', opacity: 0.5, cursor: 'not-allowed' }}>
          <Plus className="w-4 h-4" />
          הוסף פרויקט
        </button>
      </div>

      <div className="p-5 rounded-2xl text-sm mb-8" style={{ background: '#FFF8EC', border: '1px solid #F0D7A0', color: '#8A6520' }}>
        <strong>כרגע סטטי:</strong> הפרויקטים מוגדרים ב-<code>src/app/projects/[slug]/page.tsx</code>. לאחר חיבור Supabase ניהול יהיה דינמי.
      </div>

      <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
        {staticProjects.map((p, i) => (
          <div
            key={p.slug}
            className="px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
            style={{ borderBottom: i < staticProjects.length - 1 ? '1px solid var(--border)' : 'none' }}
          >
            <div>
              <div className="font-bold text-sm" style={{ color: 'var(--foreground)' }}>{p.name}</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{p.type} · {p.location} · {p.year}</div>
            </div>
            <Link
              href={`/projects/${p.slug}`}
              target="_blank"
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg transition-colors hover:bg-gray-100"
              style={{ color: 'var(--text-muted)', border: '1px solid var(--border)' }}
            >
              <ExternalLink className="w-3 h-3" />
              צפייה
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
