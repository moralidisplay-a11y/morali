import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const supabase = adminClient()
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .or(`id.eq.${params.id},slug.eq.${params.id}`)
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 404 })
  return NextResponse.json(data)
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const body = await request.json()
  const supabase = adminClient()

  const { data, error } = await supabase
    .from('categories')
    .update({
      name: body.name,
      name_en: body.name_en,
      description: body.description,
      long_description: body.long_description,
      image: body.image,
      order: body.order,
      is_active: body.is_active ?? true,
    })
    .or(`id.eq.${params.id},slug.eq.${params.id}`)
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const supabase = adminClient()
  const { error } = await supabase
    .from('categories')
    .delete()
    .or(`id.eq.${params.id},slug.eq.${params.id}`)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
