import Link from 'next/link'
import { ArrowLeft, Store, Building2, Layers, Truck } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TopBar from '@/components/layout/TopBar'

const solutions = [
  {
    icon: Store,
    title: 'חנות חדשה',
    desc: 'תכנון מאפס — מסלול לקוח, בחירת מתקנים, ספקי תצוגה, ולוח זמנים לפתיחה.',
    tags: ['תכנון', 'ייעוץ', 'ייצור', 'התקנה'],
  },
  {
    icon: Building2,
    title: 'רשתות ומשרשרות',
    desc: 'פריסה אחידה במספר סניפים — תקינה ויזואלית, ייצור מרוכז, והתקנה לפי לוח זמנים.',
    tags: ['פריסה ארצית', 'תקינה', 'לוגיסטיקה'],
  },
  {
    icon: Layers,
    title: 'שדרוג חנות קיימת',
    desc: 'ניתוח הבעיות, החלפת מתקנים, ושיפור ניצול השטח — מבלי לסגור את החנות.',
    tags: ['שדרוג', 'ניתוח', 'פריסה חדשה'],
  },
  {
    icon: Truck,
    title: 'אספקה וייצור',
    desc: 'מוצרים מהמחסן או ייצור בהתאמה אישית — מידות, גוונים, וחומרים לפי הצורך.',
    tags: ['מלאי', 'ייצור', 'התאמה אישית'],
  },
]

export const metadata = {
  title: 'פתרונות לעסק | MORALI — Retail Environments',
  description: 'פתרונות מלאים לחנויות — פתיחה, שדרוג, רשתות, ואספקה',
}

export default function SolutionsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="py-20 lg:py-28" style={{ background: 'var(--primary)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-xs font-bold tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--accent)' }}>מה אנחנו עושים</div>
            <h1 className="text-white font-black leading-[1.06] mb-5" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}>
              פתרונות<br /><span style={{ color: 'var(--accent)' }}>לכל עסק</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1.05rem', maxWidth: '460px', lineHeight: 1.75 }}>
              מחנות בודדת ועד רשת ארצית — יש לנו פתרון שמתאים לכם.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-28" style={{ background: 'white' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solutions.map(({ icon: Icon, title, desc, tags }) => (
                <div key={title} className="rounded-3xl p-8 lg:p-10" style={{ border: '1px solid var(--border)', background: 'white' }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--accent-bg)' }}>
                    <Icon className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                  </div>
                  <h2 className="font-black text-xl mb-3" style={{ color: 'var(--foreground)' }}>{title}</h2>
                  <p className="leading-relaxed mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map(t => (
                      <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: 'var(--muted)', color: 'var(--text-muted)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: 'var(--muted)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="section-title mb-5">לא בטוחים מה מתאים לכם?</h2>
            <p className="section-subtitle mb-10">דברו איתנו — נאבחן יחד ונמליץ על הפתרון הנכון.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://wa.me/972500000000" className="btn-gold">
                <span>שיחת WhatsApp</span>
                <ArrowLeft className="w-4 h-4" />
              </a>
              <Link href="/quote" className="btn-outline">
                הצעת מחיר מפורטת
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
