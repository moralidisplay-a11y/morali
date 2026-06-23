'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const from = searchParams.get('from') || '/admin/products'

  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push(from)
      router.refresh()
    } else {
      setError('סיסמה שגויה. נסה שוב.')
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ background: '#F0EDE8', direction: 'rtl' }}
    >
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl text-white mx-auto mb-4"
            style={{ background: '#080808' }}
          >
            M
          </div>
          <div className="font-black text-xl" style={{ color: '#080808' }}>MORALI Admin</div>
          <div className="text-sm mt-1" style={{ color: '#888' }}>כניסה לפאנל הניהול</div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-7 shadow-sm" style={{ border: '1px solid #E8E2D8' }}>
          <label className="block text-xs font-bold tracking-wider uppercase mb-2" style={{ color: '#888' }}>
            סיסמה
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="הזן סיסמה..."
            autoFocus
            className="w-full px-4 py-3 rounded-xl text-base mb-4"
            style={{
              border: '1.5px solid #E8E2D8',
              background: '#F8F6F2',
              outline: 'none',
              color: '#080808',
              fontFamily: 'inherit',
            }}
          />

          {error && (
            <div className="mb-4 text-sm text-center px-3 py-2.5 rounded-xl" style={{ background: '#FFF0F0', color: '#CC3333', border: '1px solid #FFCCCC' }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={!password || loading}
            className="w-full py-3.5 rounded-xl font-bold text-white text-sm transition-all"
            style={{
              background: !password || loading ? '#ccc' : '#C79A4B',
              cursor: !password || loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'מכניס...' : 'כניסה'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}
