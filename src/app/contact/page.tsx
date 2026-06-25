'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, ArrowLeft } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TopBar from '@/components/layout/TopBar'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [msg, setMsg] = useState('')

  function handleWhatsApp() {
    const text = encodeURIComponent(`שלום, אני ${name}.\nטלפון: ${phone}\n\n${msg}`)
    window.open(`https://wa.me/972505559491?text=${text}`, '_blank')
  }

  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="py-20 lg:py-28" style={{ background: 'var(--primary)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-xs font-bold tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--accent)' }}>צור קשר</div>
            <h1 className="text-white font-black leading-[1.06] mb-5" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}>
              נשמח<br /><span style={{ color: 'var(--accent)' }}>לשמוע</span>
            </h1>
          </div>
        </section>

        <section className="py-20 lg:py-28" style={{ background: 'white' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* Contact info */}
              <div className="lg:col-span-4">
                <h2 className="font-black text-2xl mb-8" style={{ color: 'var(--foreground)' }}>פרטי התקשרות</h2>
                <div className="space-y-6">
                  {[
                    { icon: Phone, label: 'טלפון', value: '050-555-9491', href: 'tel:050-555-9491' },
                    { icon: MessageCircle, label: 'WhatsApp', value: 'wa.me/972505559491', href: 'https://wa.me/972505559491' },
                    { icon: Mail, label: 'מייל', value: 'info@morali.co.il', href: 'mailto:info@morali.co.il' },
                    { icon: MapPin, label: 'מיקום', value: 'ישראל — שירות ארצי', href: undefined },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--accent-bg)' }}>
                        <Icon className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                      </div>
                      <div>
                        <div className="text-xs font-bold tracking-wider uppercase mb-1" style={{ color: 'var(--text-muted)' }}>{label}</div>
                        {href ? (
                          <a href={href} className="font-semibold text-sm hover:underline" style={{ color: 'var(--foreground)' }}>{value}</a>
                        ) : (
                          <span className="font-semibold text-sm" style={{ color: 'var(--foreground)' }}>{value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick form → WhatsApp */}
              <div className="lg:col-span-6 lg:col-start-6">
                <div className="rounded-3xl p-8 lg:p-10" style={{ background: 'var(--muted)', border: '1px solid var(--border)' }}>
                  <h2 className="font-black text-2xl mb-6" style={{ color: 'var(--foreground)' }}>שלחו הודעה</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold tracking-wider uppercase block mb-2" style={{ color: 'var(--text-muted)' }}>שם</label>
                      <input value={name} onChange={e => setName(e.target.value)} placeholder="ישראל ישראלי" className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: '1.5px solid var(--border)', background: 'white', outline: 'none', color: 'var(--foreground)', fontFamily: 'inherit' }} />
                    </div>
                    <div>
                      <label className="text-xs font-bold tracking-wider uppercase block mb-2" style={{ color: 'var(--text-muted)' }}>טלפון</label>
                      <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="050-0000000" type="tel" className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: '1.5px solid var(--border)', background: 'white', outline: 'none', color: 'var(--foreground)', fontFamily: 'inherit' }} />
                    </div>
                    <div>
                      <label className="text-xs font-bold tracking-wider uppercase block mb-2" style={{ color: 'var(--text-muted)' }}>הודעה</label>
                      <textarea value={msg} onChange={e => setMsg(e.target.value)} placeholder="במה אנחנו יכולים לעזור?" rows={4} className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: '1.5px solid var(--border)', background: 'white', outline: 'none', color: 'var(--foreground)', fontFamily: 'inherit', resize: 'vertical' }} />
                    </div>
                    <button onClick={handleWhatsApp} className="btn-gold w-full justify-center mt-2">
                      <MessageCircle className="w-4 h-4" />
                      שלחו ב-WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
