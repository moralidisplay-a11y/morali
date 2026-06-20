import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TopBar from '@/components/layout/TopBar'

export default function NotFound() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="min-h-[60vh] flex items-center justify-center py-20" style={{ background: 'var(--muted)' }}>
        <div className="text-center max-w-md mx-auto px-6">
          <div className="font-black mb-4" style={{ fontSize: '6rem', color: 'var(--border)', lineHeight: 1 }}>404</div>
          <h1 className="font-black text-2xl mb-3" style={{ color: 'var(--foreground)' }}>הדף לא נמצא</h1>
          <p className="mb-8" style={{ color: 'var(--text-muted)' }}>הקישור שהגעתם אליו לא קיים או הוסר.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-gold justify-center">
              <ArrowLeft className="w-4 h-4 rotate-180" />
              חזרה לדף הבית
            </Link>
            <Link href="/categories" className="btn-outline justify-center">
              קטלוג מוצרים
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
