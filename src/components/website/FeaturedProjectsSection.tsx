import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const projects = [
  {
    title: 'רשת ביגוד פרימיום',
    location: 'תל אביב',
    category: 'Fashion Retail',
    detail: '5 סניפים · 280–420 מ״ר כל אחד',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=85',
    large: true,
  },
  {
    title: 'בוטיק קוסמטיקה',
    location: 'הרצליה פיתוח',
    category: 'Beauty & Cosmetics',
    detail: 'חנות אחת · 90 מ״ר',
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=85',
    large: false,
  },
  {
    title: 'חנות טכנולוגיה',
    location: 'ראשון לציון',
    category: 'Tech Retail',
    detail: 'חנות אחת · 350 מ״ר',
    img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=800&q=85',
    large: false,
  },
  {
    title: 'רשת פארמה',
    location: 'ירושלים',
    category: 'Pharmacy',
    detail: '12 סניפים · תקינה אחידה',
    img: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=800&q=85',
    large: false,
  },
]

export default function FeaturedProjectsSection() {
  return (
    <section id="projects" style={{ background: '#080808' }} className="py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-20">
          <div>
            <div
              className="inline-flex items-center gap-2 mb-6 text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: 'rgba(199,154,75,0.7)' }}
            >
              <span className="w-6 h-px" style={{ background: 'rgba(199,154,75,0.5)' }} />
              עבודות נבחרות
            </div>
            <h2
              className="font-black text-white leading-[1.05]"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
            >
              פרויקטים שבנינו
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-50 shrink-0"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            כל הפרויקטים
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Large */}
          <div className="md:col-span-7 group relative overflow-hidden rounded-2xl" style={{ minHeight: '560px' }}>
            <img
              src={projects[0].img}
              alt={projects[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.05) 50%)' }} />
            <div className="absolute bottom-0 p-10">
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: 'rgba(199,154,75,0.8)' }}>
                {projects[0].category}
              </div>
              <h3 className="text-3xl font-black text-white mb-2 leading-tight">{projects[0].title}</h3>
              <div className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>{projects[0].location} · {projects[0].detail}</div>
            </div>
          </div>

          {/* Right column */}
          <div className="md:col-span-5 flex flex-col gap-2">
            {projects.slice(1).map((p) => (
              <div key={p.title} className="group relative overflow-hidden rounded-2xl flex-1" style={{ minHeight: '178px' }}>
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.05) 55%)' }} />
                <div className="absolute bottom-0 p-6">
                  <div className="text-[9px] font-bold tracking-[0.2em] uppercase mb-1.5" style={{ color: 'rgba(199,154,75,0.8)' }}>
                    {p.category}
                  </div>
                  <h3 className="text-lg font-black text-white mb-1 leading-tight">{p.title}</h3>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{p.location} · {p.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 md:hidden">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.4)' }}>
            כל הפרויקטים <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
