export type Category = {
  slug: string
  name: string
  nameEn: string
  desc: string
  longDesc: string
  img: string
  heroImg: string
  count: number
  tags: string[]
}

export type Product = {
  slug: string
  categorySlug: string
  name: string
  code: string
  price: string
  desc: string
  img: string
  images: string[]
  features: string[]
  sizes: string[]
  materials: string[]
  inStock: boolean
  badge?: string
}

export const categories: Category[] = [
  {
    slug: 'hanging',
    name: 'מערכות תלייה',
    nameEn: 'Hanging Systems',
    desc: 'פתרונות תלייה מקצועיים לחנויות ביגוד ואביזרים בכל הגדלים',
    longDesc: 'מגוון רחב של מוטות, זרועות, מתלים ומערכות תלייה מקצועיות שמתאימות לחנויות ביגוד, אופנה, ואביזרים. ניתן להתאמה אישית לכל מרחב.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85',
    heroImg: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1800&q=85',
    count: 24,
    tags: ['ביגוד', 'אופנה', 'אביזרים'],
  },
  {
    slug: 'mannequins',
    name: 'בובות ראווה',
    nameEn: 'Mannequins',
    desc: 'בובות ראווה לכל קו מוצרים וסגנון חנות',
    longDesc: 'אוסף רחב של בובות ראווה מלאות, חצי גוף, ראשים וידיים — לכל סגנון חנות. בסיום בגוון לבן, שחור, עץ וצבעים מותאמים אישית.',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=85',
    heroImg: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1800&q=85',
    count: 18,
    tags: ['ביגוד', 'אופנה', 'ראווה'],
  },
  {
    slug: 'shelving',
    name: 'מידוף לחנויות',
    nameEn: 'Store Shelving',
    desc: 'מדפים מקצועיים לכל שימוש קמעונאי',
    longDesc: 'מדפי קיר, מדפי עמידה, מדפי זכוכית, ומערכות מידוף מודולריות שמתאימות לחנויות מזון, פארמה, ספרים, אלקטרוניקה ועוד.',
    img: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=900&q=85',
    heroImg: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=1800&q=85',
    count: 32,
    tags: ['מזון', 'פארמה', 'ספרים', 'אלקטרוניקה'],
  },
  {
    slug: 'slatwall',
    name: 'קירות מחורצים',
    nameEn: 'Slatwall Systems',
    desc: 'מערכות קיר גמישות שמתאימות לכל פריסה',
    longDesc: 'לוחות סלאטוול MDF ו-PVC בגוונים רבים, עם מגוון רחב של אביזרים: ווים, מדפים, קולבים, ומסגרות זכוכית. הפתרון הגמיש ביותר לתצוגה.',
    img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=900&q=85',
    heroImg: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=1800&q=85',
    count: 45,
    tags: ['גמישות', 'מגוון', 'התאמה אישית'],
  },
  {
    slug: 'counters',
    name: 'דלפקים',
    nameEn: 'Counters & Showcases',
    desc: 'דלפקי קופה, שירות ותצוגה בהתאמה אישית',
    longDesc: 'דלפקי קופה, שירות לקוחות, ויטרינות זכוכית מוארות, ושולחנות תצוגה — בהתאמה אישית מלאה לחומרים, מידות, ועיצוב.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85',
    heroImg: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1800&q=85',
    count: 16,
    tags: ['קופה', 'שירות', 'ויטרינה'],
  },
  {
    slug: 'hangers',
    name: 'קולבים ואביזרים',
    nameEn: 'Hangers & Accessories',
    desc: 'קולבים, ווים ואביזרי תצוגה לכל סוג חנות',
    longDesc: 'קולבי עץ, מתכת ופלסטיק, ווים בגדלים שונים, קליפסים, מחזיקי תגים ועוד — כל האביזרים הקטנים שמשלימים את סביבת התצוגה.',
    img: 'https://images.unsplash.com/photo-1603217039863-aa0c865404f7?w=900&q=85',
    heroImg: 'https://images.unsplash.com/photo-1603217039863-aa0c865404f7?w=1800&q=85',
    count: 120,
    tags: ['אביזרים', 'קולבים', 'ווים'],
  },
  {
    slug: 'stands',
    name: 'סטנדים ומחזיקים',
    nameEn: 'Stands & Holders',
    desc: 'סטנדים עצמאיים, מחזיקי מוצרים ותצוגות פריסה חופשית',
    longDesc: 'סטנדים מסתובבים, מתלי ספרים, מחזיקי צעצועים, תצוגות בקבוקים ועוד — לכל מוצר יש את הסטנד שלו.',
    img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=900&q=85',
    heroImg: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1800&q=85',
    count: 28,
    tags: ['עצמאי', 'פריסה חופשית', 'מסתובב'],
  },
]

export const products: Product[] = [
  // Hanging
  {
    slug: 'round-tube-rack-double',
    categorySlug: 'hanging',
    name: 'מתלה מוט כפול — גלילי',
    code: 'HNG-001',
    price: '₪480–₪680',
    desc: 'מתלה דו-מוטי עם מוט עליון ותחתון, לניצול מקסימלי של גובה. מתאים לחצאיות, חולצות ומכנסיים.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80'],
    features: ['מוט עליון ותחתון', 'התאמת גובה', 'עגלגל לזרימה חלקה', 'בסיס יציב'],
    sizes: ['60 ס"מ', '90 ס"מ', '120 ס"מ', '150 ס"מ'],
    materials: ['כרום', 'שחור מט', 'לבן'],
    inStock: true,
    badge: 'נמכר ביותר',
  },
  {
    slug: 'wall-arm-straight',
    categorySlug: 'hanging',
    name: 'זרוע קיר ישרה',
    code: 'HNG-002',
    price: '₪95–₪145',
    desc: 'זרוע קיר בסיסית ויציבה להצגת ביגוד בזרם ישר. מתאימה לכל מערכת קיר תואמת.',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80'],
    features: ['עומס עד 15 ק"ג', 'נעילה מהירה', 'מתאים לסלאטוול'],
    sizes: ['30 ס"מ', '45 ס"מ', '60 ס"מ'],
    materials: ['כרום', 'שחור מט'],
    inStock: true,
  },
  {
    slug: 't-stand-adjustable',
    categorySlug: 'hanging',
    name: 'T-Stand מתכוונן',
    code: 'HNG-003',
    price: '₪320–₪420',
    desc: 'סטנד T-shape עצמאי עם אפשרות כיוון גובה. אידיאלי לאזורים פתוחים ולפריסה גמישה.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'],
    features: ['כיוון גובה 140–190 ס"מ', 'בסיס עגול משקולת', 'גלגלות אופציונליות'],
    sizes: ['סטנדרט'],
    materials: ['כרום', 'שחור'],
    inStock: true,
  },
  {
    slug: 'garment-rail-chrome',
    categorySlug: 'hanging',
    name: 'מוט תלייה עגלה כרום',
    code: 'HNG-004',
    price: '₪580–₪820',
    desc: 'עגלת תלייה ניידת עם מוט כרום וגלגלות. מתאימה לחדרי הלבשה ולפריסה זמנית.',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80'],
    features: ['גלגלות עם בלם', 'מוט ניתן להסרה', 'תא תחתון לתיקים'],
    sizes: ['90 ס"מ', '120 ס"מ'],
    materials: ['כרום'],
    inStock: false,
    badge: 'במלאי בקרוב',
  },
  // Mannequins
  {
    slug: 'abstract-full-body-white',
    categorySlug: 'mannequins',
    name: 'בובת גוף מלא — אבסטרקט לבן',
    code: 'MAN-001',
    price: '₪680–₪920',
    desc: 'בובת ראווה גוף מלא בסגנון אבסטרקט עם פנים חלקות. מיועדת להדגשת קו הביגוד ללא הסחת דעת.',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80'],
    features: ['פוזה ניתנת להחלפה', 'בסיס זכוכית', 'ידיים נשלפות', 'עמיד לאורך זמן'],
    sizes: ['S/M', 'L/XL'],
    materials: ['פיברגלס'],
    inStock: true,
    badge: 'נמכר ביותר',
  },
  {
    slug: 'child-mannequin-3-6',
    categorySlug: 'mannequins',
    name: 'בובת ילד 3-6 שנים',
    code: 'MAN-002',
    price: '₪420–₪580',
    desc: 'בובת ראווה לילדים בגיל 3-6, בפוזות שובבות ומחייכות. מתאימה לחנויות ביגוד לילדים.',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80'],
    features: ['פוזות שמחות', 'עמיד לעינויים', 'בסיס יציב'],
    sizes: ['3-4 שנים', '5-6 שנים'],
    materials: ['פלסטיק ABS'],
    inStock: true,
  },
  {
    slug: 'half-body-torso',
    categorySlug: 'mannequins',
    name: 'חצי גוף — תא עליון',
    code: 'MAN-003',
    price: '₪280–₪380',
    desc: 'בובת חצי גוף לתצוגת חולצות, ז\'קטים ותכשיטים. גמישה וחסכונית יותר מגוף מלא.',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80'],
    features: ['גמישות פרישה', 'עמוד מסתובב', 'ניתן להנחה על מדף'],
    sizes: ['S', 'M', 'L'],
    materials: ['פיברגלס', 'פוליאוריתן'],
    inStock: true,
  },
  // Shelving
  {
    slug: 'wall-shelf-bracket-set',
    categorySlug: 'shelving',
    name: 'מדף קיר עם זרועות — סט',
    code: 'SHV-001',
    price: '₪180–₪260',
    desc: 'מדף MDF לבן/שחור עם זרועות מתכת. בא בסטים של 2-4 מדפים. מתאים לכל סוג חנות.',
    img: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=600&q=80'],
    features: ['עומס עד 25 ק"ג', 'גוון לפי בחירה', 'הרכבה פשוטה'],
    sizes: ['60 ס"מ', '90 ס"מ', '120 ס"מ'],
    materials: ['MDF + מתכת', 'עץ מלא + מתכת'],
    inStock: true,
    badge: 'חדש',
  },
  {
    slug: 'gondola-shelving-unit',
    categorySlug: 'shelving',
    name: 'גונדולה קמעונאית',
    code: 'SHV-002',
    price: '₪1,200–₪2,800',
    desc: 'מדפי גונדולה דו-צדדיים לפריסה בתוך חנות. גובה ומרחק בין המדפים מתכווננים.',
    img: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=600&q=80'],
    features: ['כיוון גובה מדפים', 'דו-צדדי', 'יחידות הרחבה', '180 ס"מ גובה'],
    sizes: ['90×45 ס"מ', '120×45 ס"מ'],
    materials: ['מתכת + MDF'],
    inStock: true,
  },
  // Slatwall
  {
    slug: 'slatwall-mdf-white',
    categorySlug: 'slatwall',
    name: 'לוח סלאטוול MDF לבן',
    code: 'SLW-001',
    price: '₪145–₪195',
    desc: 'לוח סלאטוול MDF בגוון לבן, מוכן להתקנה. חריצים ברוחב 7.5 ס"מ, מרווח 10 ס"מ.',
    img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=600&q=80'],
    features: ['MDF E1', 'צבע עמיד', 'תואם לכל אביזרי סלאטוול'],
    sizes: ['120×60 ס"מ', '240×120 ס"מ'],
    materials: ['MDF'],
    inStock: true,
  },
  {
    slug: 'slatwall-hook-set',
    categorySlug: 'slatwall',
    name: 'סט ווים לסלאטוול — 10 יח\'',
    code: 'SLW-002',
    price: '₪85–₪130',
    desc: 'סט 10 ווים לסלאטוול בגדלים שונים. מתאים לתצוגת מוצרים קטנים, אביזרים ועוד.',
    img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=600&q=80'],
    features: ['כרום מבריק', 'עומס 2 ק"ג לווו', 'התקנה מהירה'],
    sizes: ['10 ס"מ', '15 ס"מ', '20 ס"מ'],
    materials: ['מתכת כרום'],
    inStock: true,
    badge: 'ערך מצוין',
  },
  // Counters
  {
    slug: 'glass-showcase-illuminated',
    categorySlug: 'counters',
    name: 'ויטרינת זכוכית מוארת',
    code: 'CNT-001',
    price: '₪2,800–₪4,200',
    desc: 'ויטרינת תצוגה עם תאורת LED פנימית. מתאימה לתכשיטים, שעונים, קוסמטיקה ומוצרי יוקרה.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80'],
    features: ['תאורת LED 3000K', 'זכוכית טמפרד 6 מ"מ', 'נעילה עם מפתח', 'בסיס MDF'],
    sizes: ['60×45×100 ס"מ', '90×45×100 ס"מ', '120×45×100 ס"מ'],
    materials: ['זכוכית + MDF + מתכת'],
    inStock: true,
    badge: 'פרימיום',
  },
  {
    slug: 'checkout-counter-l',
    categorySlug: 'counters',
    name: 'דלפק קופה L-Shape',
    code: 'CNT-002',
    price: '₪3,500–₪6,000',
    desc: 'דלפק קופה בפורמט L עם מגירות ומדפים פנימיים. בהתאמה אישית לגוון ומידות.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80'],
    features: ['מגירות מסגרת רכה', 'פרופיל אלומיניום', 'ויטרינה אופציונלית', 'כבלים חבויים'],
    sizes: ['מותאם אישית'],
    materials: ['MDF + למינט', 'עץ טבעי'],
    inStock: true,
  },
  // Hangers
  {
    slug: 'wooden-hanger-premium',
    categorySlug: 'hangers',
    name: 'קולב עץ פרימיום',
    code: 'HGR-001',
    price: '₪12–₪22',
    desc: 'קולב עץ טבעי עם ציפוי לכה. מוסיף נגיעת יוקרה לחנות ועמיד לשנים.',
    img: 'https://images.unsplash.com/photo-1603217039863-aa0c865404f7?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1603217039863-aa0c865404f7?w=600&q=80'],
    features: ['עץ אגוז', 'וו מסתובב', 'שכמיות מרופדות אופציונליות'],
    sizes: ['45 ס"מ'],
    materials: ['עץ טבעי', 'עץ צבוע'],
    inStock: true,
    badge: 'יוקרה',
  },
  {
    slug: 'velvet-hanger-pack',
    categorySlug: 'hangers',
    name: 'קולב קטיפה — אריזת 50',
    code: 'HGR-002',
    price: '₪95–₪130',
    desc: 'קולב קטיפה דק במיוחד, מונע החלקה. מגיע באריזה של 50 יחידות בגוונים שונים.',
    img: 'https://images.unsplash.com/photo-1603217039863-aa0c865404f7?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1603217039863-aa0c865404f7?w=600&q=80'],
    features: ['עובי 5 מ"מ', 'כל הגוונים', 'מונע החלקה', 'קל משקל'],
    sizes: ['42 ס"מ', '45 ס"מ'],
    materials: ['קטיפה + פלסטיק ABS'],
    inStock: true,
    badge: 'ערך מצוין',
  },
  // Stands
  {
    slug: 'rotating-display-stand',
    categorySlug: 'stands',
    name: 'סטנד מסתובב 360°',
    code: 'STD-001',
    price: '₪280–₪420',
    desc: 'סטנד מסתובב 360 מעלות לתצוגת מפתחות, תכשיטים, ספרים קטנים ועוד.',
    img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80'],
    features: ['סיבוב חלק', 'עומס 8 ק"ג', 'גבהים שונים', 'קל לניקוי'],
    sizes: ['30 ס"מ', '40 ס"מ', '50 ס"מ'],
    materials: ['מתכת + אקריל'],
    inStock: true,
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug)
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter(p => p.categorySlug === slug)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}
