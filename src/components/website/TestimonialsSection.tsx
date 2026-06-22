import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'דוד כהן',
    role: 'בעל רשת ביגוד · 5 סניפים · תל אביב',
    text: 'מוראלי שינו לנו את הגישה לתצוגה בחנויות. המכירות עלו ב-35% ב-3 חודשים הראשונים. שירות מקצועי ואמין.',
    rating: 5,
    initials: 'ד.כ',
  },
  {
    name: 'מיכל לוי',
    role: 'מנהלת תפעול · רשת פארמים · 12 סניפים',
    text: 'עבדנו עם הרבה ספקים לפני מוראלי. אף אחד לא הביא את רמת המקצועיות שהם מביאים. פרויקט של 12 סניפים — אפס בעיות.',
    rating: 5,
    initials: 'מ.ל',
  },
  {
    name: 'יוסי אברהם',
    role: 'בעל חנות תכשיטים · הרצליה',
    text: 'הויטרינות שהכינו לי הן יצירות אמנות. הלקוחות מעירים על כך כל הזמן. שירות מעבר לציפיות.',
    rating: 5,
    initials: 'י.א',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-40" style={{ background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-20">
          <div className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--accent)' }}>
            לקוחות מספרים
          </div>
          <h2
            className="font-black leading-[1.0]"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', color: 'var(--primary)', letterSpacing: '-0.03em', maxWidth: '18ch' }}
          >
            עסקים שבחרו
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>לבנות נכון.</em>
          </h2>
        </div>

        {/* Testimonials — editorial, no cards */}
        <div className="space-y-0">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-20 py-14 lg:py-16"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              {/* Author */}
              <div className="flex items-start gap-4 lg:block">
                <div
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center font-black text-sm text-white shrink-0 lg:mb-4"
                  style={{ background: 'var(--primary)' }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold" style={{ color: 'var(--primary)' }}>{t.name}</div>
                  <div className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--text-muted)' }}>{t.role}</div>
                  <div className="flex gap-0.5 mt-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: 'var(--accent)' }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote — big, editorial */}
              <blockquote
                className="font-medium leading-relaxed"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--foreground)', lineHeight: 1.7 }}
              >
                &ldquo;{t.text}&rdquo;
              </blockquote>
            </div>
          ))}

          {/* Last border */}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>

      </div>
    </section>
  )
}
