'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const filters = ['הכל', 'ביגוד', 'פרחים', 'קוסמטיקה', 'פארם', 'סופרמרקט']

const items = [
  {
    id: '1',
    category: 'ביגוד',
    label: 'בוטיק אופנה מודרני',
    tall: true,
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=80',
  },
  {
    id: '2',
    category: 'פרחים',
    label: 'חנות פרחים עם תצוגה',
    tall: false,
    img: 'https://images.unsplash.com/photo-1487530811015-780db66d82e1?w=500&q=80',
  },
  {
    id: '3',
    category: 'קוסמטיקה',
    label: 'קאונטר יוקרתי',
    tall: false,
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&q=80',
  },
  {
    id: '4',
    category: 'פארם',
    label: 'מדפי פארם מאורגנים',
    tall: true,
    img: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=500&q=80',
  },
  {
    id: '5',
    category: 'ביגוד',
    label: 'חנות נעליים פרימיום',
    tall: false,
    img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=500&q=80',
  },
  {
    id: '6',
    category: 'סופרמרקט',
    label: 'מחלקת טרי מעוצבת',
    tall: false,
    img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=500&q=80',
  },
  {
    id: '7',
    category: 'קוסמטיקה',
    label: 'ויטרינת טיפוח',
    tall: true,
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80',
  },
  {
    id: '8',
    category: 'פרחים',
    label: 'קיר פרחים אינסטגרמי',
    tall: false,
    img: 'https://images.unsplash.com/photo-1490750967868-88df5691cc4e?w=500&q=80',
  },
]

export default function InspirationCenter() {
  const [active, setActive] = useState('הכל')

  const visible = active === 'הכל' ? items : items.filter(i => i.category === active)

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 reveal">
          <span className="gold-label">גלריה</span>
          <h2 className="section-title">השראה לעסק שלך</h2>
          <p className="section-subtitle mt-3">גלריית רעיונות לעיצוב חנויות מצליחות.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="text-sm px-4 py-2 rounded-full font-medium transition-all"
              style={{
                background: active === f ? 'var(--primary)' : 'var(--muted)',
                color: active === f ? 'white' : 'var(--text-muted)',
                border: active === f ? 'none' : '1px solid var(--border)',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {visible.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl break-inside-avoid card-hover cursor-pointer"
              style={{ height: item.tall ? '280px' : '200px' }}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)' }}
              >
                <div className="text-white font-semibold text-sm">{item.label}</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--accent-light)' }}>{item.category}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/inspiration" className="btn-outline">
            לצפייה בכל ההשראות <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
