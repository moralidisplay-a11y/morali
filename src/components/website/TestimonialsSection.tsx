import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'דוד כהן',
    role: 'בעל רשת ביגוד, 5 סניפים',
    text: 'מוראלי שינו לנו את הגישה לתצוגה בחנויות. המכירות עלו ב-35% ב-3 חודשים הראשונים. שירות מקצועי ואמין.',
    rating: 5,
  },
  {
    name: 'מיכל לוי',
    role: 'מנהלת תפעול, רשת פארמים',
    text: 'עבדנו עם הרבה ספקים לפני מוראלי. אף אחד לא הביא את רמת המקצועיות שהם מביאים. פרויקט של 12 סניפים — אפס בעיות.',
    rating: 5,
  },
  {
    name: 'יוסי אברהם',
    role: 'בעל חנות תכשיטים',
    text: 'הויטרינות שהכינו לי הן ממש произведение אמנות. הלקוחות מעירים על כך כל הזמן. ממליץ בחום.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24" style={{ background: 'var(--muted)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{ color: 'var(--primary)' }}>
            מה הלקוחות שלנו אומרים
          </h2>
          <p className="text-gray-500">תוצאות אמיתיות, לקוחות מרוצים</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'var(--accent)' }} />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                <div className="text-xs text-gray-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
