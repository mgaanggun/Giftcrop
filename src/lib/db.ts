import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || '';
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || '';

// Prevent Vercel 500 crash if environment variables are missing
let db: any = null;
try {
  if (supabaseUrl && supabaseKey) {
    db = createClient(supabaseUrl, supabaseKey);
  } else {
    console.warn("Supabase credentials missing! Database will not connect.");
    // Create a dummy client that fails gracefully using a Proxy
    const proxyHandler: any = {
      get(target: any, prop: any) {
        if (prop === 'then') {
          return (resolve: any) => resolve({ data: [], error: "No DB connection" });
        }
        return new Proxy(() => {}, proxyHandler);
      },
      apply() {
        return new Proxy(() => {}, proxyHandler);
      }
    };
    db = new Proxy({}, proxyHandler);
  }
} catch (e) {
  console.error("Supabase init error:", e);
}

export default db;
