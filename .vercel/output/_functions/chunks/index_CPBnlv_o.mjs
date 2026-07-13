import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute } from "./server_CR6e1SMo.mjs";
import "./_astro_assets_CYMCoJCi.mjs";
import { t as $$AdminLayout } from "./AdminLayout_Curl6pb-.mjs";
import { t as db_default } from "./db_yf0CV2fq.mjs";
//#region src/pages/admin/pesan/index.astro
var pesan_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://heal-net-self.vercel.app/");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	let messages = [];
	let dbError = "";
	if (Astro.request.method === "POST") {
		const deleteId = (await Astro.request.formData()).get("delete_id");
		if (deleteId) try {
			const { error } = await db_default.from("messages").delete().eq("id", deleteId);
			if (error) throw error;
		} catch (err) {
			console.error("Delete error:", err);
			dbError = "Gagal menghapus pesan.";
		}
	}
	try {
		const { data, error } = await db_default.from("messages").select("*").order("created_at", { ascending: false });
		if (error) throw error;
		if (data) messages = data;
	} catch (error) {
		console.error("Database connection error:", error);
		dbError = error.message;
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, {
		"title": "Kotak Masuk Pesan - Admin Corporate",
		"description": "Admin Dashboard untuk Pesan",
		"pubDate": /* @__PURE__ */ new Date()
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="w-full"><!-- Header Section --><div class="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/40 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"><div><h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-main-200 to-main-100 tracking-tight">Kotak Masuk Pesan</h1><p class="text-gray-600 mt-2 font-medium">Lihat dan kelola pesan dari pengunjung website.</p></div><div><a href="/admin" class="btn bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-main-200 transition-all shadow-sm rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 text-main-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>Kembali ke Dashboard</a></div></div>${dbError && renderTemplate`<div class="alert alert-error mb-8 text-white shadow-lg rounded-2xl border-none"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>Gagal mengambil data: ${dbError}</span></div>`}<div class="grid grid-cols-1 gap-6">${messages.length > 0 ? messages.map((msg) => renderTemplate`<div class="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-white/50 text-gray-800 transition-all hover:shadow-xl group"><div class="flex flex-col md:flex-row justify-between items-start mb-4 gap-4"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-full bg-gradient-to-br from-main-100 to-main-200 flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">${msg.name ? msg.name.charAt(0).toUpperCase() : "?"}</div><div><h3 class="text-xl font-extrabold text-gray-900 group-hover:text-main-200 transition-colors">${msg.subject || "(Tanpa Subjek)"}</h3><p class="text-sm text-gray-500 mt-1 font-medium"><span class="text-main-200 font-semibold">${msg.name}</span> &lt;${msg.email}&gt;<span class="mx-2 text-gray-300">|</span>${new Date(msg.created_at).toLocaleString("id-ID", {
		dateStyle: "medium",
		timeStyle: "short"
	})}</p></div></div><form method="POST" onsubmit="return confirm('Yakin ingin menghapus pesan ini?');" class="shrink-0"><input type="hidden" name="delete_id"${addAttribute(msg.id, "value")}><button type="submit" class="btn btn-sm btn-circle bg-red-50 hover:bg-red-100 border-none text-red-500 tooltip" data-tip="Hapus Pesan"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></form></div><div class="bg-gray-50/80 p-5 rounded-2xl border border-gray-100/50 mt-4 shadow-inner"><p class="whitespace-pre-wrap text-gray-700 leading-relaxed">${msg.message}</p></div><div class="mt-5 flex justify-end"><a${addAttribute(`mailto:${msg.email}`, "href")} class="btn bg-gradient-to-r from-main-200 to-[#035991] hover:from-[#035991] hover:to-main-200 text-white border-none shadow-md shadow-main-200/30 rounded-xl px-6"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>Balas via Email</a></div></div>`) : renderTemplate`<div class="bg-white/90 backdrop-blur-md p-16 text-center rounded-3xl shadow-xl border border-white/50"><div class="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg></div><p class="text-gray-800 text-xl font-bold">Belum ada pesan</p><p class="text-gray-500 mt-2">Pesan dari pengunjung akan muncul di sini.</p></div>`}</div></div>` })}`;
}, "D:/astro/GiftCorp/src/pages/admin/pesan/index.astro", void 0);
var $$file = "D:/astro/GiftCorp/src/pages/admin/pesan/index.astro";
var $$url = "/admin/pesan";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/pesan/index@_@astro
var page = () => pesan_exports;
//#endregion
export { page };
