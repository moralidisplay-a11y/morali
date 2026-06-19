'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const cities = [
  { name: 'תל אביב',      count: 320, x: 29,  y: 51 },
  { name: 'ירושלים',      count: 210, x: 42,  y: 61 },
  { name: 'חיפה',         count: 180, x: 27,  y: 25 },
  { name: 'ראשון לציון',  count: 160, x: 27,  y: 57 },
  { name: 'אשדוד',        count: 90,  x: 22,  y: 67 },
  { name: 'באר שבע',      count: 75,  x: 35,  y: 79 },
  { name: 'נתניה',        count: 95,  x: 24,  y: 41 },
  { name: 'פתח תקווה',    count: 110, x: 33,  y: 50 },
]

const total = cities.reduce((s, c) => s + c.count, 0)

export default function ProjectsMap() {
  const [active, setActive] = useState<string | null>(null)
  const activeCity = cities.find(c => c.name === active)

  return (
    <section className="py-20 lg:py-32" style={{ background: 'var(--muted)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="gold-label justify-center">פריסה ארצית</span>
          <h2 className="section-title mt-2">פרויקטים בכל רחבי הארץ</h2>
          <p className="section-subtitle mt-4 mx-auto">
            נוכחות בכל עיר גדולה בישראל. {total.toLocaleString('he-IL')}+ פרויקטים בוצעו עד היום.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Map */}
          <div className="reveal order-2 lg:order-1">
            <div
              className="relative mx-auto rounded-3xl overflow-hidden"
              style={{
                maxWidth: '380px',
                aspectRatio: '9/13',
                background: 'linear-gradient(160deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              {/* Subtle grid */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />

              {/* Israel silhouette glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 60% 70% at 38% 55%, rgba(199,154,75,0.07) 0%, transparent 70%)' }}
              />

              {/* Israel rough outline — simplified SVG */}
              <svg
                viewBox="0 0 100 145"
                className="absolute inset-0 w-full h-full"
                style={{ opacity: 0.18 }}
              >
                <path
                  d="M38,8 L55,10 L72,18 L78,30 L75,42 L68,50 L70,60 L65,72 L60,80 L55,95 L50,108 L45,120 L42,135 L38,140 L35,130 L30,118 L28,105 L22,90 L18,78 L20,65 L16,55 L18,42 L22,30 L28,18 Z"
                  fill="none"
                  stroke="rgba(199,154,75,0.8)"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>

              {/* City pins */}
              {cities.map((city) => {
                const isActive = active === city.name
                const size = city.count > 200 ? 'lg' : city.count > 100 ? 'md' : 'sm'
                const pinSize = size === 'lg' ? 14 : size === 'md' ? 11 : 9

                return (
                  <button
                    key={city.name}
                    className="absolute group"
                    style={{ left: `${city.x}%`, top: `${city.y}%`, transform: 'translate(-50%,-50%)', zIndex: isActive ? 20 : 10 }}
                    onClick={() => setActive(isActive ? null : city.name)}
                  >
                    {/* Pulse ring */}
                    {isActive && (
                      <span
                        className="absolute rounded-full animate-ping"
                        style={{
                          width: pinSize + 14,
                          height: pinSize + 14,
                          top: -(pinSize + 14) / 2 + pinSize / 2,
                          left: -(pinSize + 14) / 2 + pinSize / 2,
                          background: 'rgba(199,154,75,0.3)',
                        }}
                      />
                    )}

                    {/* Dot */}
                    <span
                      className="block rounded-full border-2 border-white transition-all duration-200"
                      style={{
                        width: pinSize,
                        height: pinSize,
                        background: isActive ? 'var(--accent)' : 'rgba(199,154,75,0.75)',
                        boxShadow: isActive ? '0 0 12px rgba(199,154,75,0.8)' : '0 2px 6px rgba(0,0,0,0.4)',
                        transform: isActive ? 'scale(1.4)' : 'scale(1)',
                      }}
                    />

                    {/* Tooltip */}
                    {isActive && (
                      <div
                        className="absolute bottom-full mb-2.5 right-1/2 translate-x-1/2 whitespace-nowrap text-xs font-bold text-white px-3 py-1.5 rounded-xl z-20 shadow-xl"
                        style={{ background: 'var(--accent)' }}
                      >
                        {city.name} — {city.count} פרויקטים
                        <div className="absolute top-full right-1/2 translate-x-1/2 border-4 border-transparent" style={{ borderTopColor: 'var(--accent)' }} />
                      </div>
                    )}
                  </button>
                )
              })}

              {/* Label */}
              <div
                className="absolute bottom-5 left-5 text-xs font-bold uppercase tracking-widest"
                style={{ color: 'rgba(255,255,255,0.2)' }}
              >
                ISRAEL
              </div>

              {/* Total badge */}
              <div
                className="absolute top-5 right-5 text-center px-4 py-2 rounded-2xl"
                style={{ background: 'rgba(199,154,75,0.15)', border: '1px solid rgba(199,154,75,0.3)' }}
              >
                <div className="font-black text-xl" style={{ color: 'var(--accent)' }}>{total.toLocaleString('he-IL')}+</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>פרויקטים</div>
              </div>
            </div>
          </div>

          {/* City list */}
          <div className="order-1 lg:order-2 space-y-2.5 reveal">
            {cities.map((city) => {
              const pct = Math.round((city.count / cities[0].count) * 100)
              const isActive = active === city.name

              return (
                <button
                  key={city.name}
                  className="w-full text-right group"
                  onClick={() => setActive(isActive ? null : city.name)}
                >
                  <div
                    className="flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-300"
                    style={{
                      background: isActive ? 'var(--primary)' : 'white',
                      borderColor: isActive ? 'var(--primary)' : 'var(--border)',
                      boxShadow: isActive ? '0 8px 24px rgba(0,0,0,0.12)' : '0 1px 4px rgba(0,0,0,0.04)',
                    }}
                  >
                    {/* Gold dot */}
                    <div
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ background: isActive ? 'var(--accent)' : 'var(--border)' }}
                    />

                    {/* City name */}
                    <div className="flex-1">
                      <div
                        className="font-bold text-sm mb-1.5"
                        style={{ color: isActive ? 'white' : 'var(--foreground)' }}
                      >
                        {city.name}
                      </div>
                      {/* Progress bar */}
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: isActive ? 'rgba(255,255,255,0.15)' : 'var(--muted)' }}>
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${pct}%`, background: isActive ? 'var(--accent)' : 'var(--border)' }}
                        />
                      </div>
                    </div>

                    {/* Count */}
                    <div className="text-right">
                      <div className="font-black text-base" style={{ color: isActive ? 'var(--accent)' : 'var(--text-muted)' }}>
                        {city.count}
                      </div>
                      <div className="text-xs" style={{ color: isActive ? 'rgba(255,255,255,0.5)' : 'var(--border)' }}>פרויקטים</div>
                    </div>
                  </div>
                </button>
              )
            })}

            <div className="pt-4">
              <Link href="/projects" className="btn-outline w-full justify-center">
                לכל הפרויקטים <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
