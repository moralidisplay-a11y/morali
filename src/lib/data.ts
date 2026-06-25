import { createClient } from '@supabase/supabase-js'
import { categories as staticCats, products as staticProds, type Category, type Product } from './catalog'

function supabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null
  return createClient(url, key)
}

// ── Categories ──────────────────────────────────────────────

export async function getAllCategories(): Promise<Category[]> {
  const db = supabase()
  if (!db) return staticCats

  const { data, error } = await db
    .from('categories')
    .select('*')
    .eq('is_active', true)
    .order('order', { ascending: true })

  if (error || !data || data.length === 0) return staticCats

  return data.map(r => ({
    slug: r.slug,
    name: r.name,
    nameEn: r.name_en || '',
    desc: r.description || '',
    longDesc: r.long_description || '',
    img: r.image || '',
    heroImg: r.image || '',
    count: 0,
    tags: [],
  }))
}

export async function getCategoryData(slug: string): Promise<Category | null> {
  const db = supabase()
  if (!db) return staticCats.find(c => c.slug === slug) ?? null

  const { data, error } = await db
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()

  if (error || !data) return staticCats.find(c => c.slug === slug) ?? null

  return {
    slug: data.slug,
    name: data.name,
    nameEn: data.name_en || '',
    desc: data.description || '',
    longDesc: data.long_description || '',
    img: data.image || '',
    heroImg: data.image || '',
    count: 0,
    tags: [],
  }
}

// ── Products ────────────────────────────────────────────────

export async function getAllProducts(): Promise<Product[]> {
  const db = supabase()
  if (!db) return staticProds

  const { data, error } = await db
    .from('products')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })

  if (error || !data || data.length === 0) return staticProds

  return data.map(dbRowToProduct)
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  const db = supabase()
  if (!db) return staticProds.filter(p => p.categorySlug === categorySlug)

  const { data, error } = await db
    .from('products')
    .select('*')
    .eq('category_slug', categorySlug)
    .eq('is_active', true)
    .order('created_at', { ascending: false })

  if (error || !data || data.length === 0) {
    return staticProds.filter(p => p.categorySlug === categorySlug)
  }

  return data.map(dbRowToProduct)
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const db = supabase()
  if (!db) return staticProds.find(p => p.slug === slug) ?? null

  const { data, error } = await db
    .from('products')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !data) return staticProds.find(p => p.slug === slug) ?? null

  return dbRowToProduct(data)
}

// ── Helpers ─────────────────────────────────────────────────

function dbRowToProduct(r: Record<string, unknown>): Product {
  return {
    slug: r.slug as string,
    categorySlug: r.category_slug as string,
    name: r.name as string,
    code: (r.code as string) || '',
    price: (r.price as string) || '',
    desc: (r.description as string) || '',
    img: (r.img as string) || '',
    images: (r.images as string[]) || [(r.img as string) || ''],
    features: (r.features as string[]) || [],
    sizes: [],
    materials: [],
    inStock: r.in_stock !== false,
    badge: (r.badge as string) || undefined,
  }
}
