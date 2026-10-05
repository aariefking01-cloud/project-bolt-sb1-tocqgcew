import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

const isValidUrl = (url?: string) => {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

type TableRow = Record<string, unknown>;

const createMockSupabase = () => {
  const inMemoryBookings: TableRow[] = [];
  return {
    from: (table: string) => ({
      insert: async (data: TableRow) => {
        try {
          const stored = JSON.parse(localStorage.getItem(`app_${table}`) || '[]');
          stored.push({ ...data, id: Date.now(), created_at: new Date().toISOString() });
          localStorage.setItem(`app_${table}`, JSON.stringify(stored));
        } catch {
          inMemoryBookings.push({ ...data, id: Date.now(), created_at: new Date().toISOString() });
        }
        return { data, error: null };
      },
      select: () => ({
        data: [],
        error: null,
      }),
    }),
  } as unknown as ReturnType<typeof createClient>;
};

let client: ReturnType<typeof createClient>;

if (isValidUrl(supabaseUrl) && supabaseAnonKey) {
  try {
    client = createClient(supabaseUrl, supabaseAnonKey);
  } catch {
    console.warn('[AI Studio] Supabase client initialization failed — using in-memory mock');
    client = createMockSupabase();
  }
} else {
  client = createMockSupabase();
}

export const supabase = client;

