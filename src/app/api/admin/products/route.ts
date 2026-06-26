import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { products as staticProducts } from '@/lib/catalog'

function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function GET() {
  const supabase = adminClient()
  const { data } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  const dbRows: Record<string, unknown>[] = data || []
  const dbSlugs = new Set(dbRows.map((r: Record<string, unknown>) => r.slug as string))

  const staticRows = staticProducts
    .filter(p => !dbSlugs.has(p.slug))
    .map(p => ({
      id: `static-${p.slug}`,
      slug: p.slug,
      category_slug: p.categorySlug,
      name: p.name,
      code: p.code,
      price: p.price,
      description: p.desc,
      img: p.img,
      images: p.images,
      features: p.features,
      in_stock: p.inStock,
      badge: p.badge || null,
      is_active: true,
    }))

  return NextResponse.json([...dbRows, ...staticRows])
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
    .from('products')
    .insert({
      slug,
      category_slug: body.category_slug,
      name: body.name,
      code: body.code || '',
      price: body.price || '',
      description: body.description || '',
      img: body.img || '',
      images: body.images || [],
      features: body.features || [],
      in_stock: body.in_stock ?? true,
      badge: body.badge || null,
      is_active: true,
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data, { status: 201 })
}
