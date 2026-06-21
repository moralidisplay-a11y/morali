import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'דוד כהן',
    role: 'בעל רשת ביגוד',
    city: 'תל אביב · 5 סניפים',
    text: 'מוראלי שינו לנו את הגישה לתצוגה בחנויות. המכירות עלו ב-35% ב-3 חודשים הראשונים. שירות מקצועי ואמין.',
    rating: 5,
    initials: 'ד.כ',
  },
  {
    name: 'מיכל לוי',
    role: 'מנהלת תפעול',
    city: 'רשת פארמים — 12 סניפים',
    text: 'עבדנו עם הרבה ספקים לפני מוראלי. אף אחד לא הביא את רמת המקצועיות שהם מביאים. פרויקט של 12 סניפים — אפס בעיות.',
    rating: 5,
    initials: 'מ.ל',
  },
  {
    name: 'יוסי אברהם',
    role: 'בעל חנות תכשיטים',
    city: 'הרצליה',
    text: 'הויטרינות שהכינו לי הן יצירות אמנות. הלקוחות מעירים על כך כל הזמן. שירות מעבר לציפיות, ממליץ בחום.',
    rating: 5,
    initials: 'י.א',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32" style={{ background: 'var(--muted)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-[0.2em] uppercase" style={{ color: 'var(--accent)' }}>
            <span className="w-5 h-px" style={{ background: 'var(--accent)' }} />
            לקוחות מספרים
            <span className="w-5 h-px" style={{ background: 'var(--accent)' }} />
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--primary)' }}>
            מה הלקוחות שלנו אומרים
          </h2>
          <p className="mt-3 text-sm" style={{ color: 'var(--text-muted)' }}>תוצאות אמיתיות מעסקים שבחרו ב-MORALI</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 flex flex-col"
              style={{ border: '1px solid var(--border)', boxShadow: '0 2px 20px rgba(0,0,0,0.04)' }}
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'var(--accent)' }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'var(--foreground)' }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid var(--border)' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0"
                  style={{ background: 'var(--primary)' }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ color: 'var(--foreground)' }}>{t.name}</div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.role} · {t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
