import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function GET() {
  const supabase = adminClient()
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('order', { ascending: true })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const supabase = adminClient()

  const slug = body.slug || body.name
    .toLowerCase()
    .replace(/[^a-z0-9א-ת ]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 60)

  const { data, error } = await supabase
    .from('categories')
    .insert({
      slug,
      name: body.name,
      name_en: body.name_en || '',
      description: body.description || '',
      long_description: body.long_description || '',
      image: body.image || '',
      order: body.order ?? 0,
      is_active: true,
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data, { status: 201 })
}
