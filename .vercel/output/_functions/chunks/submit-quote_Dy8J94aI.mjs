import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as db_default } from "./db_yf0CV2fq.mjs";
//#region src/pages/api/submit-quote.ts
var submit_quote_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var POST = async ({ request, redirect }) => {
	const formData = await request.formData();
	const email = formData.get("email")?.toString();
	const phone = formData.get("phone")?.toString();
	const quantity = formData.get("quantity")?.toString();
	if (!email || !phone || !quantity) return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
	try {
		const { error } = await db_default.from("quotes").insert([{
			email,
			phone,
			quantity
		}]);
		if (error) {
			console.error("Supabase insert error:", error);
			return redirect("/?quote=error#quote");
		}
		return redirect("/?quote=success#quote");
	} catch (error) {
		console.error("API error:", error);
		return redirect("/?quote=error#quote");
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/submit-quote@_@ts
var page = () => submit_quote_exports;
//#endregion
export { page };
