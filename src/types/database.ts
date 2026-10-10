export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string
          name: string
          sort_order: number | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          sort_order?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          sort_order?: number | null
          created_at?: string
        }
      }
      products: {
        Row: {
          id: string
          category_id: string
          name: string
          description: string | null
          image_url: string | null
          is_available: boolean
          created_at: string
        }
        Insert: {
          id?: string
          category_id: string
          name: string
          description?: string | null
          image_url?: string | null
          is_available?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          category_id?: string
          name?: string
          description?: string | null
          image_url?: string | null
          is_available?: boolean
          created_at?: string
        }
      }
      product_sizes: {
        Row: {
          id: string
          product_id: string
          name: string
          price: number
          is_available: boolean
        }
        Insert: {
          id?: string
          product_id: string
          name: string
          price: number
          is_available?: boolean
        }
        Update: {
          id?: string
          product_id?: string
          name?: string
          price?: number
          is_available?: boolean
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
