import Link from 'next/link'
import { ArrowLeft, Heart, Eye } from 'lucide-react'

const products = [
  {
    id: '1',
    name: 'סטנד תלייה כפול שחור',
    category: 'מערכות תלייה',
    price: 750,
    tag: 'נמכר ביותר',
    tagColor: '#22c55e',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80',
  },
  {
    id: '2',
    name: 'בובת ראווה גבר שחורה',
    category: 'בובות ראווה',
    price: 890,
    tag: 'חדש',
    tagColor: '#3b82f6',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300&q=80',
  },
  {
    id: '3',
    name: 'מדף עץ דקורטיבי',
    category: 'מידוף',
    price: 690,
    tag: 'מומלץ',
    tagColor: 'var(--accent)',
    img: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=300&q=80',
  },
  {
    id: '4',
    name: 'דלפק תצוגה מרכזי',
    category: 'דלפקים',
    price: 2190,
    tag: 'Premium',
    tagColor: '#080808',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&q=80',
  },
  {
    id: '5',
    name: 'מערכת מבצעים מודולרית',
    category: 'שילוט',
    price: 490,
    tag: 'חדש',
    tagColor: '#3b82f6',
    img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=300&q=80',
  },
  {
    id: '6',
    name: 'ויטרינה זכוכית מוארת',
    category: 'ויטרינות',
    price: 3200,
    tag: 'Premium',
    tagColor: '#080808',
    img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=300&q=80',
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="gold-label">מוצרים</span>
            <h2 className="section-title">מוצרים מומלצים</h2>
          </div>
          <Link href="/products" className="hidden sm:flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--accent)' }}>
            לכל המוצרים <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
          {products.map((p) => (
            <div key={p.id} className="group relative bg-white rounded-2xl border overflow-hidden card-hover" style={{ borderColor: 'var(--border)' }}>
              {/* Tag */}
              <div
                className="absolute top-3 right-3 z-10 text-white text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{ background: p.tagColor }}
              >
                {p.tag}
              </div>

              {/* Favorite */}
              <button className="absolute top-3 left-3 z-10 w-7 h-7 rounded-full bg-white shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500">
                <Heart className="w-3.5 h-3.5" />
              </button>

              {/* Image */}
              <div className="relative h-44 overflow-hidden" style={{ background: 'var(--muted)' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Quick View */}
                <div className="absolute inset-0 flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="flex items-center gap-1.5 text-xs font-semibold text-white px-3 py-1.5 rounded-lg" style={{ background: 'var(--primary)' }}>
                    <Eye className="w-3.5 h-3.5" /> צפייה מהירה
                  </button>
                </div>
              </div>

              <div className="p-4">
                <div className="text-[11px] mb-1 font-medium" style={{ color: 'var(--accent)' }}>{p.category}</div>
                <div className="font-semibold text-sm leading-tight mb-2">{p.name}</div>
                <div className="flex items-center justify-between">
                  <div className="font-black text-base">₪{p.price.toLocaleString('he-IL')}</div>
                  <Link
                    href={`/quote?product=${p.id}`}
                    className="text-[11px] font-semibold px-2 py-1 rounded-lg transition-colors"
                    style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}
                  >
                    הצעה
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/products" className="btn-outline">
            לכל המוצרים <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
