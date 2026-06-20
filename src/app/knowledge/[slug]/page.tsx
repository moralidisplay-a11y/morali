import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TopBar from '@/components/layout/TopBar'

const articles: Record<string, {
  tag: string
  title: string
  img: string
  read: string
  body: string[]
}> = {
  'customer-path': {
    tag: 'תכנון מסחרי',
    title: 'איך מסלול לקוח נכון מגדיל מכירות',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1800&q=85',
    read: '5 דקות',
    body: [
      'מסלול הלקוח — הדרך שהלקוח עובר מכניסה לחנות ועד לקופה — הוא אחד הגורמים המשפיעים ביותר על שיעורי הרכישה. חנות שמתוכננת נכון מובילה את הלקוח באופן טבעי דרך אזורים עם חשיפה גבוהה לפריטים בעלי מרווח גבוה.',
      'הכלל הראשון: לקוחות פונים ימינה. מחקרים מראים שרוב האנשים פונים ימינה בכניסה לחנות. לכן, אזור הכניסה מימין הוא המקום האידיאלי לפריטים שאתם רוצים שכל לקוח יראה.',
      'הכלל השני: גובה העיניים הוא גובה הרכישה. פריטים שממוקמים בגובה עיניים (120–160 ס"מ) נמכרים הכי הרבה. שמרו את המיקום הזה לפריטים בעלי מרווח גבוה.',
      'הכלל השלישי: פריטי דחף ליד הקופה. המתנה בקופה היא ההזדמנות האחרונה לגרום ללקוח לקנות עוד פריט. קטן, זול, ומפתה — כאלה פריטים צריכים להיות שם.',
      'כשאתם מתכננים פריסה חדשה, חשבו על מסלול: מה הלקוח רואה ראשון? לאן העין נמשכת? מה נמצא בשדה הראייה בדרך לקופה? תשובות לשאלות האלה יהפכו כל פריסה לחנות שמוכרת יותר.',
    ],
  },
  'shelving-vs-slatwall': {
    tag: 'בחירת מתקנים',
    title: 'מדפים לעומת קירות מחורצים — מה מתאים לחנות שלך',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=85',
    read: '4 דקות',
    body: [
      'שאלה שחוזרת על עצמה בכל פרויקט תכנון חנות: מדפים קלאסיים או קירות מחורצים (סלאטוול)? לשניהם יתרונות ברורים, ולשניהם מגבלות. הנה ההשוואה הישרה.',
      'מדפים קלאסיים: יציבות גבוהה, עומסים גדולים, מראה נקי ויוקרתי. מתאים לחנויות שיודעות בדיוק מה הן מציגות ולא צופות שינויים תכופים. המגבלה: שינוי פריסה דורש עבודה ולוקח זמן.',
      'קירות מחורצים (סלאטוול): גמישות מקסימלית. ניתן לשנות את הפריסה תוך דקות — להוסיף מדף, להזיז ווו, לתלות זרוע. מתאים לחנויות עם מוצרים עונתיים שמשנות פריסה תכופות. המגבלה: עלות גבוהה יותר, ועלול להראות "עמוס" אם לא מסטיילים נכון.',
      'ההמלצה שלנו: שלבו. קירות ראשיים עם סלאטוול לגמישות, ואזורים ייעודיים עם מדפים קבועים לתצוגה פרימיום. זה הפתרון שעובד לרוב הלקוחות שלנו.',
      'ספרו לנו על החנות שלכם ונמליץ על השילוב הנכון.',
    ],
  },
  'common-mistakes': {
    tag: 'הגדלת מכירות',
    title: '5 טעויות נפוצות בעיצוב חנות שמרחיקות לקוחות',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1800&q=85',
    read: '6 דקות',
    body: [
      'מניסיוננו בהקמת מאות חנויות בישראל, יש טעויות שחוזרות על עצמן שוב ושוב. הנה 5 הנפוצות ביותר — ואיך להימנע מהן.',
      '1. כניסה עמוסה מדי. הלקוח נכנס וקיר מוצרים מתנגש בו. התוצאה: תחושת מחנק ונטייה לצאת. פתרון: השאירו אזור "נשימה" של 1.5–2 מטר בכניסה. תנו ללקוח לכוון את עצמו.',
      '2. תאורה אחידה לכל החנות. תאורה שטוחה הורגת את הדרמה. פתרון: שכבות תאורה — תאורת בסיס, תאורת הדגשה לוויטרינות, ותאורת אקצנט לאזורים מיוחדים.',
      '3. שלטים שמכסים מוצרים. שלט גדול שמוצמד מעל מדף מסתיר את הפריטים. פתרון: שלטים בגובה עיניים או מעל קו הראייה, לא מסביבו.',
      '4. ויטרינה שלא מתחלפת. ויטרינה שלא השתנתה מזה חודשיים היא שקופה ללקוחות חוזרים. פתרון: תחלפו ויטרינה לפחות אחת לחודש.',
      '5. קופה בפינה נידחת. לקוח שמחפש קופה ולא מוצא — יוצא. פתרון: קופה גלויה ונגישה, עם שילוט ברור.',
    ],
  },
  'lighting-display': {
    tag: 'תאורה ועיצוב',
    title: 'תאורה נכונה — הנשק הסודי של חנויות מצליחות',
    img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=1800&q=85',
    read: '4 דקות',
    body: [
      'תאורה היא אחד הגורמים המשפיעים ביותר על חוויית הקנייה — ואחד הנזנחים ביותר בתכנון חנויות. חנות עם תאורה נכונה נראית יוקרתית יותר, מגדילה את זמן השהייה של הלקוח ומגדילה מכירות.',
      'טמפרטורת צבע: לחנויות אופנה — 3000K (אור חם). לחנויות אלקטרוניקה — 4000K (אור לבן). לחנויות תכשיטים — 3500K עם תאורת הדגשה ממוקדת.',
      'שכבות תאורה: תאורת בסיס (האור הכללי), תאורת משימה (על מדפים, בתאורת ויטרינות), תאורת אקצנט (הדגשת מוצרים ספציפיים). השילוב של השלוש יוצר עומק ודרמה.',
      'תאורת LED vs פלורסנט: LED זול יותר בתפעול, נותן שליטה מלאה על עוצמה וצבע, ועמיד לשנים. כיום אין סיבה לבחור בפלורסנט לחנות חדשה.',
      'השקעה בתאורה נכונה מחזירה את עצמה בקנייה גבוהה יותר. זה לא מותרות — זה כלי מכירות.',
    ],
  },
  'window-display': {
    tag: 'ויטרינה',
    title: 'איך לבנות ויטרינה שמושכת לקוחות מהרחוב',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1800&q=85',
    read: '5 דקות',
    body: [
      'הויטרינה היא כרטיס הביקור של החנות. לקוח שעובר ברחוב מחליט תוך 3 שניות אם להיכנס. הנה מה שצריך לדעת כדי לבנות ויטרינה שמנצחת.',
      'כלל אחד: פוקוס. ויטרינה עם 20 מוצרים לא מוכרת כלום. ויטרינה עם 3 מוצרים מסטיילים — מוכרת הכל. תבחרו נושא, בנו סביבו, ואל תמלאו כל פינה.',
      'גובה: המוקד הראשי צריך להיות בגובה 120–150 ס"מ — גובה עיניים ממוצע של עובר אורח. מה שנמצא מתחת לזה קשה לראות מבחוץ.',
      'תאורה בויטרינה: חובה. ויטרינה ללא תאורה ממוקדת נראית שטוחה גם ביום ובלתי נראית בלילה. LED spot קטן בשווי 50 ש"ח יכול לשנות את כל התמונה.',
      'החלפה: ויטרינה שלא התחלפה מזה חודש — כבר לא מושכת. קבעו מחזור החלפה (שבועי, דו-שבועי, חודשי לפי קצב העסק) ועמדו בו.',
    ],
  },
  'mannequin-styling': {
    tag: 'בובות ראווה',
    title: 'איך להלביש בובות ראווה כדי למכור יותר',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1800&q=85',
    read: '3 דקות',
    body: [
      'בובת ראווה מסטיילת נכון יכולה להכפיל את מכירות הפריט שהיא מציגה. לקוח שרואה "לוק מלא" קונה יותר מלקוח שרואה חולצה על קולב.',
      'הכלל הראשון: הלבישו לוק מלא, לא רק פריט אחד. חולצה + מכנסיים + אביזרים = גם הלקוח ירצה את הכל. מכרתם פריט אחד — הצלחתם. מכרתם שלושה — מצוין.',
      'הכלל השני: אל תשתמשו בבובה כאנגר. בובה עם חולצה מקומטת ומכנסיים לא מסודרים היא יותר גרועה מאי-שימוש בבובה. כל בובה צריכה 5 דקות סטיילינג.',
      'הכלל השלישי: שנו תדיר. בובה שלא השתנתה מזה 3 שבועות בלתי נראית ללקוחות חוזרים. שייכו מישהו מהצוות לאחריות הבובות.',
      'מיקום: בובות בכניסה = לקוחות יודעים מה החנות מוכרת עוד לפני שנכנסו. ניצול מצוין של שניות ה-3 הקריטיות.',
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }))
}

export default function KnowledgeArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug]
  if (!article) notFound()

  return (
    <>
      <TopBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden" style={{ height: '55vh', minHeight: '380px' }}>
          <img src={article.img} alt={article.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.1) 100%)' }} />
          <div className="relative z-10 h-full flex items-end">
            <div className="max-w-4xl mx-auto px-6 lg:px-12 w-full pb-14">
              <nav className="flex items-center gap-2 text-xs mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <Link href="/" className="hover:text-white transition-colors">בית</Link>
                <span>/</span>
                <Link href="/knowledge" className="hover:text-white transition-colors">מרכז ידע</Link>
                <span>/</span>
                <span className="text-white">{article.tag}</span>
              </nav>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'var(--accent)', color: 'white' }}>{article.tag}</span>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{article.read} קריאה</span>
              </div>
              <h1 className="text-white font-black leading-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>{article.title}</h1>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-16 lg:py-24" style={{ background: 'white' }}>
          <div className="max-w-2xl mx-auto px-6 lg:px-0">
            <div className="space-y-6">
              {article.body.map((para, i) => (
                <p key={i} className="leading-relaxed text-lg" style={{ color: i === 0 ? 'var(--foreground)' : 'var(--text-muted)', fontWeight: i === 0 ? 500 : 400 }}>
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-16 pt-10 flex flex-wrap items-center justify-between gap-4" style={{ borderTop: '1px solid var(--border)' }}>
              <Link href="/knowledge" className="flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-60" style={{ color: 'var(--accent)' }}>
                <ArrowLeft className="w-4 h-4 rotate-180" />
                כל המאמרים
              </Link>
              <a href="https://wa.me/972500000000" className="btn-gold">
                דברו איתנו
                <ArrowLeft className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
