import Link from 'next/link'
import type { Product } from '@/lib/catalog'
import { MessageCircle } from 'lucide-react'

type Props = {
  title: string
  subtitle: string
  categorySlug: string
  categoryLabel: string
  products: Product[]
  flipped?: boolean
}

export default function EditorialProducts({ title, subtitle, categorySlug, categoryLabel, products, flipped }: Props) {
  const items = products.slice(0, 4)
  if (items.length === 0) return null

  return (
    <section className="py-20 lg:py-28" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start ${flipped ? 'direction-ltr' : ''}`}>

          {/* Editorial copy */}
          <div className={`lg:col-span-4 ${flipped ? 'lg:order-2' : ''}`}>
            <div className="text-[10px] font-black tracking-[0.35em] uppercase mb-4" style={{ color: '#c79a4b' }}>
              {categoryLabel}
            </div>
            <h2 className="font-black leading-none mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)', color: '#0a0a0a', letterSpacing: '-0.04em' }}>
              {title}
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: '#999', maxWidth: '30ch' }}>
              {subtitle}
            </p>
            <Link
              href={`/categories/${categorySlug}`}
              className="inline-flex items-center gap-2 text-sm font-bold pb-1"
              style={{ color: '#0a0a0a', borderBottom: '1.5px solid #0a0a0a' }}
            >
              כל {title} →
            </Link>
          </div>

          {/* Product grid */}
          <div className={`lg:col-span-8 ${flipped ? 'lg:order-1' : ''}`}>
            <div className="grid grid-cols-2 gap-3">
              {items.map(p => (
                <div key={p.slug} className="group" style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #f0ede8' }}>
                  <Link href={`/products/${p.slug}`} className="block">
                    <div style={{ height: '220px', background: '#f8f7f5', overflow: 'hidden' }}>
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <div className="text-[9px] font-bold tracking-widest uppercase mb-1" style={{ color: '#bbb' }}>{p.code}</div>
                      <h3 className="font-bold text-sm leading-tight mb-2" style={{ color: '#111' }}>{p.name}</h3>
                      <div className="font-black text-sm" style={{ color: '#c79a4b' }}>{p.price}</div>
                    </div>
                  </Link>
                  <div className="px-4 pb-4 bg-white">
                    <a
                      href={`https://wa.me/972505559491?text=שלום, אני מתעניין ב: ${p.name} (${p.code})`}
                      className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl text-xs font-bold transition-all hover:opacity-80"
                      style={{ background: '#f0f7f0', color: '#1a7a1a', border: '1px solid #c8e6c8' }}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      בקש הצעת מחיר
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
