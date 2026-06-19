import Link from 'next/link'
import { Plus, ArrowLeft, ExternalLink, Package } from 'lucide-react'
import { categories, getProductsByCategory } from '@/lib/catalog'

export default function AdminCategoriesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-black text-2xl mb-1" style={{ color: 'var(--foreground)' }}>קטגוריות</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{categories.length} קטגוריות פעילות באתר</p>
        </div>
        <Link href="/admin/categories/new" className="btn-gold" style={{ fontSize: '0.85rem', padding: '10px 20px' }}>
          <Plus className="w-4 h-4" />
          הוסף קטגוריה
        </Link>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
        <div className="px-6 py-4" style={{ borderBottom: '1px solid var(--border)', background: 'var(--muted)' }}>
          <div className="grid grid-cols-12 text-xs font-bold tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>
            <div className="col-span-5">שם</div>
            <div className="col-span-2">slug</div>
            <div className="col-span-2">מוצרים</div>
            <div className="col-span-3">פעולות</div>
          </div>
        </div>

        {categories.map((cat, i) => {
          const prods = getProductsByCategory(cat.slug)
          return (
            <div
              key={cat.slug}
              className="px-6 py-5 grid grid-cols-12 items-center transition-colors hover:bg-gray-50"
              style={{ borderBottom: i < categories.length - 1 ? '1px solid var(--border)' : 'none' }}
            >
              {/* Name + image */}
              <div className="col-span-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0">
                  <img src={cat.img} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ color: 'var(--foreground)' }}>{cat.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{cat.nameEn}</div>
                </div>
              </div>

              {/* slug */}
              <div className="col-span-2">
                <code className="text-xs px-2 py-1 rounded-lg" style={{ background: 'var(--muted)', color: 'var(--text-muted)' }}>
                  {cat.slug}
                </code>
              </div>

              {/* Product count */}
              <div className="col-span-2">
                <div className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--foreground)' }}>
                  <Package className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                  {prods.length}
                </div>
              </div>

              {/* Actions */}
              <div className="col-span-3 flex items-center gap-2">
                <Link
                  href={`/admin/categories/${cat.slug}`}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors hover:bg-gray-100"
                  style={{ color: 'var(--foreground)', border: '1px solid var(--border)' }}
                >
                  עריכה
                </Link>
                <Link
                  href={`/categories/${cat.slug}`}
                  target="_blank"
                  className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors hover:bg-gray-100"
                  style={{ color: 'var(--text-muted)', border: '1px solid var(--border)' }}
                >
                  <ExternalLink className="w-3 h-3" />
                  צפייה
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-6 p-5 rounded-2xl text-sm" style={{ background: '#FFF8EC', border: '1px solid #F0D7A0', color: '#8A6520' }}>
        <strong>הערה:</strong> כרגע הנתונים נטענים מקובץ סטטי (<code>src/lib/catalog.ts</code>). לאחר חיבור Supabase, ניהול הקטגוריות יהיה דינמי מלא.
      </div>
    </div>
  )
}
