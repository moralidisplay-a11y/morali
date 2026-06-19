'use client'

import { MessageCircle } from 'lucide-react'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 left-4 z-50 md:bottom-8 md:left-6">
      <a
        href="https://wa.me/972501234567"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-5 py-3.5 rounded-2xl text-white text-sm font-bold shadow-2xl transition-all hover:scale-105"
        style={{ background: '#25D366' }}
      >
        <MessageCircle className="w-5 h-5" />
        <span>WhatsApp</span>
      </a>
    </div>
  )
}
