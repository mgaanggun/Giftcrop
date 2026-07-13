import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || '';
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || '';

// Prevent Vercel 500 crash if environment variables are missing or invalid
const proxyHandler: any = {
  get(target: any, prop: any) {
    if (prop === 'then') {
      return (resolve: any) => resolve({ data: [], error: "No DB connection or invalid URL" });
    }
    return new Proxy(() => { }, proxyHandler);
  },
  apply() {
    return new Proxy(() => { }, proxyHandler);
  }
};

let db: any = new Proxy({}, proxyHandler);

try {
  if (supabaseUrl && supabaseKey) {
    db = createClient(supabaseUrl, supabaseKey);
  } else {
    console.warn("Supabase credentials missing! Database will not connect.");
  }
} catch (e) {
  console.error("Supabase init error (invalid URL?):", e);
  db = new Proxy({}, proxyHandler);
}

export default db;
