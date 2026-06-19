export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          price: number | null
          category_id: string | null
          images: string[]
          features: string[]
          seo_title: string | null
          seo_description: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: Omit<this['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<this['Insert']>
      }
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          image: string | null
          parent_id: string | null
          seo_title: string | null
          seo_description: string | null
          order: number
          is_active: boolean
          created_at: string
        }
        Insert: Omit<this['Row'], 'id' | 'created_at'>
        Update: Partial<this['Insert']>
      }
      leads: {
        Row: {
          id: string
          full_name: string
          phone: string
          email: string | null
          company: string | null
          source: string
          status: string
          owner_id: string | null
          notes: string | null
          score: number
          created_at: string
          updated_at: string
        }
        Insert: Omit<this['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<this['Insert']>
      }
      deals: {
        Row: {
          id: string
          name: string
          lead_id: string
          owner_id: string | null
          value: number
          probability: number
          stage: string
          expected_close_date: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<this['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<this['Insert']>
      }
      quotes: {
        Row: {
          id: string
          quote_number: string
          lead_id: string
          items: Json
          discount: number
          tax: number
          total: number
          status: string
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<this['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<this['Insert']>
      }
      tasks: {
        Row: {
          id: string
          title: string
          type: string
          priority: string
          status: string
          lead_id: string | null
          deal_id: string | null
          assignee_id: string | null
          due_date: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<this['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<this['Insert']>
      }
      articles: {
        Row: {
          id: string
          title: string
          slug: string
          content: string
          excerpt: string | null
          author_id: string | null
          category: string | null
          tags: string[]
          seo_title: string | null
          seo_description: string | null
          status: string
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<this['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<this['Insert']>
      }
      projects: {
        Row: {
          id: string
          name: string
          slug: string
          industry: string | null
          location: string | null
          challenge: string | null
          solution: string | null
          results: string | null
          gallery: string[]
          is_featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: Omit<this['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<this['Insert']>
      }
      activities: {
        Row: {
          id: string
          type: string
          description: string
          lead_id: string | null
          deal_id: string | null
          user_id: string | null
          created_at: string
        }
        Insert: Omit<this['Row'], 'id' | 'created_at'>
        Update: Partial<this['Insert']>
      }
    }
  }
}

export type Product = Database['public']['Tables']['products']['Row']
export type Category = Database['public']['Tables']['categories']['Row']
export type Lead = Database['public']['Tables']['leads']['Row']
export type Deal = Database['public']['Tables']['deals']['Row']
export type Quote = Database['public']['Tables']['quotes']['Row']
export type Task = Database['public']['Tables']['tasks']['Row']
export type Article = Database['public']['Tables']['articles']['Row']
export type Project = Database['public']['Tables']['projects']['Row']
export type Activity = Database['public']['Tables']['activities']['Row']
