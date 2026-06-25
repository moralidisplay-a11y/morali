import { Settings, Database, Phone, Globe } from 'lucide-react'

export default function AdminSettingsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-black text-2xl mb-1" style={{ color: 'var(--foreground)' }}>הגדרות</h1>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>הגדרות מערכת ותצורת חיבורים</p>
      </div>

      <div className="space-y-6">

        {/* Supabase */}
        <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#00D084' + '20' }}>
              <Database className="w-4 h-4" style={{ color: '#00D084' }} />
            </div>
            <div>
              <h2 className="font-black text-base" style={{ color: 'var(--foreground)' }}>Supabase — מסד נתונים</h2>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>חיבור לדאטאבייס לניהול דינמי של תוכן</p>
            </div>
          </div>
          <div className="space-y-4">
            <ConfigRow label="NEXT_PUBLIC_SUPABASE_URL" value="לא מוגדר" status="missing" />
            <ConfigRow label="NEXT_PUBLIC_SUPABASE_ANON_KEY" value="לא מוגדר" status="missing" />
            <ConfigRow label="SUPABASE_SERVICE_ROLE_KEY" value="לא מוגדר" status="missing" />
          </div>
          <div className="mt-5 p-4 rounded-xl text-xs leading-relaxed" style={{ background: 'var(--muted)', color: 'var(--text-muted)' }}>
            כדי לחבר Supabase: הוסיפו את המשתנים בלוח Vercel תחת Settings → Environment Variables, לאחר מכן עשו Redeploy.
          </div>
        </div>

        {/* WhatsApp */}
        <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#22c55e' + '20' }}>
              <Phone className="w-4 h-4" style={{ color: '#22c55e' }} />
            </div>
            <div>
              <h2 className="font-black text-base" style={{ color: 'var(--foreground)' }}>WhatsApp</h2>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>מספר לצ'אט וטופס ההצעה</p>
            </div>
          </div>
          <ConfigRow label="מספר WhatsApp" value="972505559491" status="ok" note="עדכנו ב-globals + PremiumCTA + HeroSection" />
        </div>

        {/* Domain */}
        <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#4B7EC7' + '20' }}>
              <Globe className="w-4 h-4" style={{ color: '#4B7EC7' }} />
            </div>
            <div>
              <h2 className="font-black text-base" style={{ color: 'var(--foreground)' }}>דומיין ו-SEO</h2>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>הגדרות דומיין ומטא-תגיות</p>
            </div>
          </div>
          <ConfigRow label="Production URL" value="index-three-bice.vercel.app" status="ok" />
          <div className="mt-4 p-4 rounded-xl text-xs leading-relaxed" style={{ background: 'var(--muted)', color: 'var(--text-muted)' }}>
            כדי לחבר דומיין מותאם אישית (כמו morali.co.il): הוסיפו ב-Vercel → Settings → Domains.
          </div>
        </div>

      </div>
    </div>
  )
}

function ConfigRow({ label, value, status, note }: { label: string; value: string; status: 'ok' | 'missing'; note?: string }) {
  return (
    <div>
      <div className="flex items-center justify-between py-2.5" style={{ borderBottom: '1px solid var(--border)' }}>
        <span className="text-sm font-mono" style={{ color: 'var(--foreground)' }}>{label}</span>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${status === 'ok' ? 'bg-green-500' : 'bg-yellow-400'}`} />
          <span className="text-xs font-semibold" style={{ color: status === 'ok' ? '#22c55e' : '#eab308' }}>
            {status === 'ok' ? value : 'לא מוגדר'}
          </span>
        </div>
      </div>
      {note && <p className="text-xs mt-1 pr-1" style={{ color: 'var(--text-muted)' }}>{note}</p>}
    </div>
  )
}
