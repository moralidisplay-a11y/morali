'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'

const cats = [
  { name: 'מערכות תלייה', desc: 'פתרונות תלייה מקצועיים לחנויות ביגוד ואביזרים בכל הגדלים', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85', href: '/categories/hanging', span: 'col-span-2' },
  { name: 'בובות ראווה', desc: 'בובות ראווה לכל קו מוצרים וסגנון חנות', img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=85', href: '/categories/mannequins', span: '' },
  { name: 'מידוף לחנויות', desc: 'מדפים מקצועיים לכל שימוש קמעונאי', img: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=900&q=85', href: '/categories/shelving', span: '' },
  { name: 'קירות מחורצים', desc: 'מערכות קיר גמישות שמתאימות לכל פריסה', img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=900&q=85', href: '/categories/slatwall', span: '' },
  { name: 'דלפקים', desc: 'דלפקי קופה, שירות ותצוגה בהתאמה אישית', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85', href: '/categories/counters', span: '' },
  { name: 'קולבים ואביזרים', desc: 'קולבים, ווים ואביזרי תצוגה לכל סוג חנות', img: 'https://images.unsplash.com/photo-1603217039863-aa0c865404f7?w=900&q=85', href: '/categories/hangers', span: 'col-span-2' },
]

function CatCard({ cat, height }: { cat: typeof cats[0]; height: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={cat.href}
      className={`group relative overflow-hidden rounded-2xl ${cat.span}`}
      style={{ height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image with parallax-style scale */}
      <img
        src={cat.img}
        alt={cat.name}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: hovered ? 'scale(1.07) translateY(-1%)' : 'scale(1.0)',
          transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />

      {/* Gradient — deepens on hover */}
      <div
        className="absolute inset-0"
        style={{
          background: hovered
            ? 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.1) 100%)'
            : 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)',
          transition: 'background 0.5s ease',
        }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-7">
        {/* Name — always visible */}
        <h3
          className="font-black text-white leading-tight"
          style={{
            fontSize: cat.span ? '1.25rem' : '1.05rem',
            transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {cat.name}
        </h3>

        {/* Description — slides up on hover */}
        <p
          style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: '0.82rem',
            marginTop: '6px',
            maxWidth: '280px',
            lineHeight: 1.55,
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
            transitionDelay: hovered ? '0.05s' : '0s',
          }}
        >
          {cat.desc}
        </p>

        {/* CTA arrow */}
        <div
          className="flex items-center gap-1.5 mt-3"
          style={{
            color: 'var(--accent)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 0.35s ease, transform 0.35s ease',
            transitionDelay: hovered ? '0.1s' : '0s',
          }}
        >
          צפו בקטגוריה
          <ArrowLeft className="w-3 h-3" />
        </div>
      </div>
    </Link>
  )
}

export default function CategoriesSection() {
  return (
    <section className="py-24 lg:py-36" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-5 text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--accent)' }}>
              <span className="w-6 h-px" style={{ background: 'var(--accent)', opacity: 0.6 }} />
              קטלוג מוצרים
            </div>
            <h2 className="section-title">מה אנחנו מספקים</h2>
          </div>
          <Link href="/categories" className="hidden md:flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-50 shrink-0" style={{ color: 'var(--accent)' }}>
            כל הקטגוריות <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        {/* Row 1 — wide + 2 normal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
          <CatCard cat={cats[0]} height="340px" />
          <CatCard cat={cats[1]} height="340px" />
          <CatCard cat={cats[2]} height="340px" />
        </div>

        {/* Row 2 — 2 normal + wide */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <CatCard cat={cats[3]} height="270px" />
          <CatCard cat={cats[4]} height="270px" />
          <CatCard cat={cats[5]} height="270px" />
        </div>
      </div>
    </section>
  )
}
