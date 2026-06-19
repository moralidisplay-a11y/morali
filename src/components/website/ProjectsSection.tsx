'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, MapPin } from 'lucide-react'

const projects = [
  {
    id: '1',
    name: 'חנות בגדים',
    location: 'תל אביב',
    industry: 'ביגוד',
    result: '+35% מכירות',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
  },
  {
    id: '2',
    name: 'בוטיק אופנה',
    location: 'רמת השרון',
    industry: 'אופנה',
    result: '+42% לקוחות',
    img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80',
  },
  {
    id: '3',
    name: 'חנות קוסמטיקה',
    location: 'ירושלים',
    industry: 'קוסמטיקה',
    result: '+28% הכנסה',
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
  },
  {
    id: '4',
    name: 'רשת פארמים',
    location: 'חיפה',
    industry: 'פארם',
    result: '+50% תנועה',
    img: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=600&q=80',
  },
  {
    id: '5',
    name: 'חנות ספורט',
    location: 'ראשון לציון',
    industry: 'ספורט',
    result: '+33% מכירות',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
]

export default function ProjectsSection() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section className="py-20 lg:py-32" style={{ background: 'var(--primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="gold-label">עבודות שלנו</span>
            <h2 className="text-3xl lg:text-4xl font-black text-white mt-2 leading-tight">
              פרויקטים נבחרים
            </h2>
            <p className="mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              חנויות אמיתיות שתכננו, עיצבנו והקמנו.
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: 'var(--accent)' }}
          >
            לצפייה בכל הפרויקטים <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
          {projects.map((p, i) => (
            <Link
              key={p.id}
              href={`/projects/${p.id}`}
              className="group relative overflow-hidden rounded-2xl flex flex-col justify-end"
              style={{
                aspectRatio: i === 0 ? '3/4' : i === 3 ? '3/4' : '3/4',
                gridColumn: i === 0 ? 'span 1' : undefined,
              }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <img
                src={p.img}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                style={{ transform: hovered === p.id ? 'scale(1.08)' : 'scale(1)' }}
              />

              {/* Gradient */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)',
                  opacity: hovered === p.id ? 1 : 0.85,
                }}
              />

              {/* Content */}
              <div className="relative z-10 p-4">
                <div className="flex items-center gap-1 text-xs mb-1.5" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <MapPin className="w-3 h-3" />
                  {p.location}
                </div>
                <div className="font-bold text-white text-sm leading-tight mb-2">{p.name}</div>
                <div
                  className="inline-flex text-xs font-bold px-2.5 py-1 rounded-lg transition-all"
                  style={{
                    background: 'var(--accent)',
                    color: 'white',
                    transform: hovered === p.id ? 'translateY(0)' : 'translateY(4px)',
                    opacity: hovered === p.id ? 1 : 0.8,
                  }}
                >
                  {p.result}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <Link href="/projects" className="btn-gold">
            לכל הפרויקטים <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
