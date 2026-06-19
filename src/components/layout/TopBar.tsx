import { Truck, MessageCircle, MapPin, Phone } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="hidden md:block text-white text-xs py-2.5 px-4" style={{ background: 'var(--primary)' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 opacity-80">
            <Truck className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
            משלוחים לכל הארץ
          </span>
          <span className="flex items-center gap-1.5 opacity-80">
            <MessageCircle className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
            ייעוץ מקצועי חינם
          </span>
          <span className="flex items-center gap-1.5 opacity-80">
            <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
            איסוף עצמי מסניף
          </span>
        </div>
        <a
          href="tel:050-1234567"
          className="flex items-center gap-1.5 font-semibold hover:opacity-100 opacity-80 transition-opacity"
          style={{ color: 'var(--accent)' }}
        >
          <Phone className="w-3.5 h-3.5" />
          050-1234567
        </a>
      </div>
    </div>
  )
}
