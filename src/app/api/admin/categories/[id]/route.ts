import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { categories as staticCategories } from '@/lib/catalog'

function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = adminClient()
  const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(id)

  const { data } = isUUID
    ? await supabase.from('categories').select('*').eq('id', id).single()
    : await supabase.from('categories').select('*').eq('slug', id).single()

  if (data) return NextResponse.json(data)

  // Fall back to static catalog
  const staticCat = staticCategories.find(c => c.slug === id)
  if (staticCat) {
    return NextResponse.json({
      id: `static-${staticCat.slug}`,
      slug: staticCat.slug,
      name: staticCat.name,
      name_en: staticCat.nameEn,
      description: staticCat.desc,
      long_description: staticCat.longDesc,
      image: staticCat.img,
      order: 0,
      is_active: true,
    })
  }

  return NextResponse.json({ error: 'לא נמצא' }, { status: 404 })
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const body = await request.json()
  const supabase = adminClient()

  const payload = {
    name: body.name,
    name_en: body.name_en,
    description: body.description,
    long_description: body.long_description,
    image: body.image,
    order: body.order,
    is_active: body.is_active ?? true,
  }

  // If it's a static (non-UUID) id, upsert by slug instead
  const isUUID = /^[0-9a-f-]{36}$/.test(id)
  let query
  if (isUUID) {
    query = supabase.from('categories').update(payload).eq('id', id).select().single()
  } else {
    // static-slug or plain slug — upsert so static categories get saved to Supabase
    const slug = id.startsWith('static-') ? id.replace('static-', '') : id
    query = supabase.from('categories').upsert({ slug, ...payload }, { onConflict: 'slug' }).select().single()
  }

  const { data, error } = await query
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = adminClient()
  const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(id)

  const { error } = isUUID
    ? await supabase.from('categories').delete().eq('id', id)
    : await supabase.from('categories').delete().eq('slug', id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
