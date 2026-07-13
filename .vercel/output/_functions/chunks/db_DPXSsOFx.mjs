import { createClient } from "@supabase/supabase-js";
//#region src/lib/db.ts
var supabaseUrl = "https://mcczmlrkhtdosypfbbfn.supabase.co";
var supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jY3ptbHJraHRkb3N5cGZiYmZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM1ODg0NTEsImV4cCI6MjA5OTE2NDQ1MX0.yADNzH5cgixsiGYytea5qXrnsgRsYOiYjy6jrysQ3LI";
var proxyHandler = {
	get(target, prop) {
		if (prop === "then") return (resolve) => resolve({
			data: [],
			error: "No DB connection or invalid URL"
		});
		return new Proxy(() => {}, proxyHandler);
	},
	apply() {
		return new Proxy(() => {}, proxyHandler);
	}
};
var db = new Proxy({}, proxyHandler);
try {
	db = createClient(supabaseUrl, supabaseKey);
} catch (e) {
	console.error("Supabase init error (invalid URL?):", e);
	db = new Proxy({}, proxyHandler);
}
var db_default = db;
//#endregion
export { db_default as t };
