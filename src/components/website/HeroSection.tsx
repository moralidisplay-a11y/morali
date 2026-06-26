'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Search, ArrowDown } from 'lucide-react'

const WORDS = ['מידוף.', 'מתלים.', 'דלפקים.', 'פתרונות.']

export default function HeroSection() {
  const [query, setQuery] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const imgY = useTransform(scrollY, [0, 600], [0, 120])

  // rotating words
  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 2200)
    return () => clearInterval(t)
  }, [])

  // mouse parallax
  const handleMouse = (e: React.MouseEvent) => {
    const { innerWidth: W, innerHeight: H } = window
    setMouse({ x: (e.clientX / W - 0.5) * 30, y: (e.clientY / H - 0.5) * 18 })
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) window.location.href = `/products?q=${encodeURIComponent(query.trim())}`
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouse}
      className="relative overflow-hidden"
      style={{ height: '100svh', minHeight: '700px', background: '#080808' }}
    >
      {/* Parallax image */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <motion.img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=2400&q=90"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: 0.45,
            x: mouse.x,
            y: mouse.y,
            scale: 1.08,
            objectPosition: 'center 30%',
            transition: 'x 0.6s ease, y 0.6s ease',
          }}
        />
      </motion.div>

      {/* Gradient overlay — multiple layers for depth */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(8,8,8,0.15) 0%, rgba(8,8,8,0.3) 40%, rgba(8,8,8,0.88) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(199,154,75,0.06) 0%, transparent 60%)' }} />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center lg:justify-end pb-0 lg:pb-20 px-6 lg:px-16 pt-24">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 text-[10px] font-bold tracking-[0.55em] uppercase"
          style={{ color: 'rgba(199,154,75,0.7)' }}
        >
          מורלי · מתקני תצוגה מקצועיים
        </motion.div>

        {/* Main headline */}
        <div className="mb-8" style={{ maxWidth: '16ch' }}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-black text-white leading-[0.9]"
            style={{ fontSize: 'clamp(3.2rem, 9vw, 9rem)', letterSpacing: '-0.04em' }}
          >
            החנות שלך
            <br />
            מגיעה ל
            <motion.span
              key={wordIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{ color: '#c79a4b', display: 'inline-block' }}
            >
              {WORDS[wordIdx]}
            </motion.span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mb-10 text-base lg:text-lg"
          style={{ color: 'rgba(255,255,255,0.42)', maxWidth: '42ch', lineHeight: 1.65 }}
        >
          פתרונות מידוף, מתקני תצוגה, דלפקים וציוד חנויות בהתאמה אישית — לחנויות בגדים, סופרמרקטים, בתי מרקחת ועסקים קמעונאיים.
        </motion.p>

        {/* Search */}
        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
          style={{ maxWidth: '480px' }}
        >
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <Search className="w-4 h-4 shrink-0" style={{ color: 'rgba(255,255,255,0.35)' }} />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="חפש מוצר..."
              className="flex-1 bg-transparent outline-none text-right text-sm"
              style={{ color: 'white', direction: 'rtl' }}
            />
            <button
              type="submit"
              className="shrink-0 px-4 py-1.5 rounded-xl text-xs font-bold"
              style={{ background: '#c79a4b', color: '#000' }}
            >
              חיפוש
            </button>
          </div>
        </motion.form>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex items-center gap-3 flex-wrap"
        >
          <a
            href="https://wa.me/972505559491?text=שלום, אני מעוניין לקבל הצעת מחיר"
            className="flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-2xl transition-all hover:opacity-90 active:scale-95"
            style={{ background: '#c79a4b', color: '#000' }}
          >
            קבלו הצעת מחיר ב-WhatsApp
          </a>
          <Link
            href="/categories"
            className="text-sm font-semibold px-6 py-3.5 rounded-2xl transition-all hover:bg-white/10"
            style={{ color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            צפו בקטגוריות
          </Link>
        </motion.div>

      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase" style={{ color: 'rgba(255,255,255,0.2)' }}>גלול</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.2)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
