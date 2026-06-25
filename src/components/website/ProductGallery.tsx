'use client'

import { useState, useCallback } from 'react'
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react'

type Props = { images: string[]; name: string }

export default function ProductGallery({ images, name }: Props) {
  const [active, setActive] = useState(0)
  const [zoomed, setZoomed] = useState(false)

  const prev = useCallback(() => setActive(i => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setActive(i => (i + 1) % images.length), [images.length])

  return (
    <>
      {/* Main image */}
      <div
        className="relative rounded-3xl overflow-hidden group cursor-zoom-in"
        style={{ height: '500px', background: '#f5f5f5' }}
        onClick={() => setZoomed(true)}
      >
        <img
          src={images[active]}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.9)', boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}
          >
            <ZoomIn className="w-4 h-4" style={{ color: 'var(--primary)' }} />
          </div>
        </div>

        {/* Arrows if multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={e => { e.stopPropagation(); prev() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: 'rgba(255,255,255,0.9)', boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={e => { e.stopPropagation(); next() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: 'rgba(255,255,255,0.9)', boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 mt-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-xl overflow-hidden shrink-0 transition-all"
              style={{
                width: '88px',
                height: '88px',
                border: i === active ? '2.5px solid var(--primary)' : '2px solid transparent',
                outline: i === active ? '1px solid rgba(0,0,0,0.1)' : 'none',
                opacity: i === active ? 1 : 0.6,
              }}
            >
              <img src={img} alt={`תמונה ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox zoom */}
      {zoomed && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)' }}
          onClick={() => setZoomed(false)}
        >
          <button
            className="absolute top-5 left-5 w-11 h-11 rounded-full flex items-center justify-center text-white transition-colors hover:bg-white/10"
            onClick={() => setZoomed(false)}
          >
            <X className="w-6 h-6" />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={e => { e.stopPropagation(); prev() }}
                className="absolute right-6 w-12 h-12 rounded-full flex items-center justify-center text-white transition-colors hover:bg-white/10"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
              <button
                onClick={e => { e.stopPropagation(); next() }}
                className="absolute left-6 w-12 h-12 rounded-full flex items-center justify-center text-white transition-colors hover:bg-white/10"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
            </>
          )}

          <img
            src={images[active]}
            alt={name}
            className="max-w-[90vw] max-h-[88vh] object-contain rounded-2xl"
            onClick={e => e.stopPropagation()}
          />

          <div className="absolute bottom-5 text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {active + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
