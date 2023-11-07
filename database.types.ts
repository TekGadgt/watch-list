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
      authors: {
        Row: {
          author: string | null
          created_at: string
          id: number
        }
        Insert: {
          author?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          author?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      watchEntries: {
        Row: {
          approved: boolean | null
          author: string | null
          blurb: string | null
          created_at: string
          data: Json | null
          id: number
        }
        Insert: {
          approved?: boolean | null
          author?: string | null
          blurb?: string | null
          created_at?: string
          data?: Json | null
          id?: number
        }
        Update: {
          approved?: boolean | null
          author?: string | null
          blurb?: string | null
          created_at?: string
          data?: Json | null
          id?: number
        }
        Relationships: []
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
