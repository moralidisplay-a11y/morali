import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TopBar from '@/components/layout/TopBar'

const projects: Record<string, {
  title: string
  type: string
  location: string
  size: string
  year: string
  heroImg: string
  gallery: string[]
  goal: string
  approach: string
  execution: string
  outcome: string
  fixtures: string[]
}> = {
  'fashion-store-tel-aviv': {
    title: 'רשת ביגוד פרימיום',
    type: 'Fashion Retail',
    location: 'תל אביב',
    size: '5 סניפים · 280–420 מ״ר',
    year: '2024',
    heroImg: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80',
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80',
    ],
    goal: 'שדרוג מערכות התצוגה בכל רשת של 5 סניפים תוך יצירת עקביות ויזואלית מלאה ושיפור ניצול השטח.',
    approach: 'מיפוי מלא של כל סניף, ניתוח מסלול הלקוח, ותכנון פריסה שמתאימה לשטח הייחודי של כל מיקום תוך שמירה על שפה עיצובית אחידה.',
    execution: 'ייצור מרוכז, התקנה שלב-שלב בסניפים פעילים עם לוח זמנים שהותאם לשעות הפעילות של כל סניף. כל 5 הסניפים הושלמו תוך 6 שבועות.',
    outcome: 'עקביות ויזואלית מלאה לראשונה בהיסטוריית הרשת. שיפור משמעותי בניצול שטח התצוגה ובנגישות המוצרים ללקוחות.',
    fixtures: ['מערכות תלייה מדורגות', 'בובות ראווה מפוסל מותאמות אישית', 'מדפי קיר רב-שכבתיים', 'דלפקי שירות ופינות קופה'],
  },
  'beauty-store-herzliya': {
    title: 'בוטיק קוסמטיקה',
    type: 'Beauty & Cosmetics',
    location: 'הרצליה פיתוח',
    size: 'חנות בודדת · 90 מ״ר',
    year: '2024',
    heroImg: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1527799820374-87591a16f725?w=800&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    ],
    goal: 'עיצוב סביבת תצוגה שתשקף את רמת המחיר של המוצרים ותיצור חוויית קנייה יוקרתית בשטח מוגבל.',
    approach: 'תכנון המבוסס על זרימת לקוח מכוונת, ויטרינות תצוגה מוארות, ואזורי הדגשה לקולקציות פרימיום. כל מ״ר תוכנן כדי למקסם חשיפת מוצרים.',
    execution: 'ייצור ויטרינות בהתאמה אישית מלאה בזמן 6 שבועות, התקנה בסוף שבוע אחד לפני פתיחה מחדש ללא הפרעה לפעילות.',
    outcome: 'החנות פתחה מחדש עם זרם לקוחות שהגיע לקחת חלק בפתיחה. הבעלים פתח סניף שני תוך שנה באותה תקינה.',
    fixtures: ['ויטרינות זכוכית מוארות', 'מדפי קיר שחור מט', 'דלפק מרכזי עם תאורה תחתית', 'כוכות תצוגה לקולקציות מיוחדות'],
  },
  'pharmacy-chain': {
    title: 'רשת פארמה ארצית',
    type: 'Pharmacy Chain',
    location: 'ירושלים · חיפה · באר שבע ועוד',
    size: '12 סניפים · תקינה מאוחדת',
    year: '2023',
    heroImg: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
      'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    ],
    goal: 'יצירת חוויה אחידה ב-12 סניפים לאחר מיזוג עם רשת אחרת, תוך שמירה על זהות מותג מאוחדת.',
    approach: 'פיתוח מפרט תצוגה מאוחד שמתאים לשני סוגי הסניפים הקיימים. גל פיילוט ב-4 סניפים ראשונים לאישור הנהלה לפני פריסה מלאה.',
    execution: 'פריסה בגלים של 3 סניפים בשבוע, כל סניף הושלם תוך 48 שעות. 12 הסניפים הושלמו בתוך 8 שבועות.',
    outcome: 'אחידות ויזואלית מלאה בכל נקודות המכירה. הנהלת הרשת דיווחה על שיפור בחוויית הלקוח בסקרים פנימיים.',
    fixtures: ['מדפים מודולריים לפרמקולוגיה', 'שילוט וניווט תוך-חנותי', 'דלפקי שירות ורוקחות', 'קיוסקי תצוגה עצמאיים'],
  },
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = projects[params.slug]
  if (!p) notFound()

  return (
    <>
      <TopBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden" style={{ height: '70vh', minHeight: '500px' }}>
          <img src={p.heroImg} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.25) 60%)' }} />
          <div className="relative z-10 h-full flex items-end">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pb-14">
              <div className="text-xs font-bold tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
                {p.type}
              </div>
              <h1 className="text-white font-black leading-tight mb-3" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
                {p.title}
              </h1>
              <div className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {p.location} · {p.size} · {p.year}
              </div>
            </div>
          </div>
        </section>

        {/* Brief */}
        <section className="py-20 lg:py-28" style={{ background: 'white' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <div className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--text-muted)' }}>יעד הפרויקט</div>
                <p className="text-lg leading-relaxed font-medium" style={{ color: 'var(--foreground)' }}>{p.goal}</p>
              </div>
              <div className="lg:col-span-4">
                <div className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--text-muted)' }}>גישה</div>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{p.approach}</p>
              </div>
              <div className="lg:col-span-4">
                <div className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--text-muted)' }}>ביצוע ותוצאה</div>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{p.execution}</p>
                <p className="text-base leading-relaxed mt-4" style={{ color: 'var(--foreground)', fontWeight: 500 }}>{p.outcome}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="pb-20 lg:pb-28" style={{ background: 'white' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {p.gallery.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-2xl" style={{ height: '320px' }}>
                  <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fixtures */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--muted)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-xs font-bold tracking-[0.22em] uppercase mb-10" style={{ color: 'var(--accent)' }}>
              מתקנים שסופקו
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {p.fixtures.map((f) => (
                <div key={f} className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
                  <div className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{f}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nav */}
        <section className="py-16" style={{ background: 'white', borderTop: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
            <Link href="/projects" className="flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-60" style={{ color: 'var(--accent)' }}>
              <ArrowLeft className="w-4 h-4 rotate-180" />
              כל הפרויקטים
            </Link>
            <a href="https://wa.me/972500000000" className="btn-gold">
              דברו איתנו
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
