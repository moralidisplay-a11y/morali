import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const projects = [
  {
    title: 'רשת ביגוד פרימיום',
    location: 'תל אביב — 5 סניפים',
    category: 'Fashion Retail',
    result: '+74% עלייה במכירות',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80',
    large: true,
  },
  {
    title: 'פארמה מודרנית',
    location: 'ירושלים — 2 קומות',
    category: 'Pharmacy',
    result: '+58% שביעות רצון לקוחות',
    img: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=900&q=80',
    large: false,
  },
  {
    title: 'חנות טכנולוגיה',
    location: 'ראשון לציון — 350 מ״ר',
    category: 'Tech Retail',
    result: '+92% זמן שהייה בחנות',
    img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=900&q=80',
    large: false,
  },
  {
    title: 'בוטיק קוסמטיקה',
    location: 'הרצליה פיתוח',
    category: 'Beauty & Cosmetics',
    result: 'פתיחת 3 סניפים חדשים',
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=80',
    large: false,
  },
]

export default function FeaturedProjectsSection() {
  return (
    <section id="projects" className="py-24 lg:py-36" style={{ background: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <div
              className="inline-flex items-center gap-2 mb-5 text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: 'var(--accent)' }}
            >
              <span className="w-6 h-px" style={{ background: 'var(--accent)' }} />
              עבודות נבחרות
            </div>
            <h2
              className="font-black text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              פרויקטים שבנינו
              <br />
              <span style={{ color: 'var(--accent)' }}>כדי למכור יותר</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70 shrink-0"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            כל הפרויקטים
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Large project */}
          <div className="md:row-span-2 group relative overflow-hidden rounded-2xl cursor-pointer" style={{ minHeight: '500px' }}>
            <img
              src={projects[0].img}
              alt={projects[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 55%)' }} />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
                {projects[0].category}
              </div>
              <h3 className="text-2xl font-black text-white mb-1">{projects[0].title}</h3>
              <div className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>{projects[0].location}</div>
              <div
                className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full"
                style={{ background: 'rgba(199,154,75,0.15)', border: '1px solid rgba(199,154,75,0.35)', color: 'var(--accent-light)' }}
              >
                {projects[0].result}
              </div>
            </div>
          </div>

          {/* Smaller projects */}
          {projects.slice(1).map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-2xl cursor-pointer" style={{ minHeight: '232px' }}>
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.08) 60%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-[10px] font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>
                  {p.category}
                </div>
                <h3 className="text-lg font-black text-white mb-0.5">{p.title}</h3>
                <div className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{p.location}</div>
                <div
                  className="inline-flex text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(199,154,75,0.15)', border: '1px solid rgba(199,154,75,0.3)', color: 'var(--accent-light)' }}
                >
                  {p.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 md:hidden text-center">
          <Link href="/projects" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
            כל הפרויקטים
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
