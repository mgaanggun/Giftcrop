import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute } from "./server_CR6e1SMo.mjs";
import "./_astro_assets_CYMCoJCi.mjs";
import { t as $$AdminLayout } from "./AdminLayout_D775Ebq8.mjs";
import { t as db_default } from "./db_DPXSsOFx.mjs";
//#region src/pages/admin/index.astro
var admin_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://heal-net-self.vercel.app/");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	let posts = [];
	let dbError = "";
	if (Astro.request.method === "POST") {
		const deleteId = (await Astro.request.formData()).get("delete_id");
		if (deleteId) try {
			const { error } = await db_default.from("posts").delete().eq("id", deleteId);
			if (error) throw error;
		} catch (err) {
			console.error("Delete error:", err);
			dbError = "Gagal menghapus post.";
		}
	}
	try {
		const { data, error } = await db_default.from("posts").select("*").order("created_at", { ascending: false });
		if (error) throw error;
		if (data) posts = data;
	} catch (error) {
		console.error("Database connection error:", error);
		dbError = error.message;
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, {
		"title": "Admin Dashboard - GiftCorp",
		"description": "Admin Dashboard for GiftCorp",
		"pubDate": /* @__PURE__ */ new Date()
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="w-full"><div class="bg-white/80 backdrop-blur-xl p-5 md:p-8 rounded-3xl shadow-xl border border-white/40 mb-8"><!-- Header Section --><div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"><div><h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-main-200 to-main-100 tracking-tight">Admin Dashboard</h1><p class="text-gray-600 mt-2 font-medium">Kelola konten, layanan, dan pesan dari satu tempat.</p></div><div class="flex flex-wrap gap-3"><a href="/admin/pesan" class="btn bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-main-200 transition-all shadow-sm rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 text-main-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>Kotak Masuk</a><a href="/admin/layanan" class="btn bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-main-200 transition-all shadow-sm rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 text-main-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>Kelola Layanan</a><a href="/admin/produk" class="btn bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-main-200 transition-all shadow-sm rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 text-main-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>Kelola Produk</a><a href="/admin/create" class="btn bg-gradient-to-r from-main-200 to-[#035991] hover:from-[#035991] hover:to-main-200 text-white border-none shadow-lg shadow-main-200/30 rounded-xl transition-all"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>Tambah Post</a></div></div></div>${dbError && renderTemplate`<div class="alert alert-error mb-8 text-white shadow-lg rounded-2xl border-none"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>Gagal mengambil data: ${dbError}</span></div>`}<!-- Posts Table Section --><div class="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-white/50"><div class="px-5 py-4 md:px-8 md:py-6 border-b border-gray-100 bg-white/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0"><h2 class="text-2xl font-bold text-gray-800 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-main-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>Daftar Blog Posts</h2><span class="badge bg-main-100/20 text-main-200 border-main-200/30 badge-lg px-4 py-3 font-semibold rounded-xl">${posts.length} Posts</span></div><div class="overflow-x-auto p-2"><table class="table w-full text-gray-700 border-separate border-spacing-y-2"><thead><tr class="text-gray-500 uppercase text-xs tracking-wider bg-transparent"><th class="px-2 sm:px-6 py-4 font-semibold hidden sm:table-cell">No</th><th class="px-2 sm:px-6 py-4 font-semibold">Judul</th><th class="px-2 sm:px-6 py-4 font-semibold hidden md:table-cell">Slug</th><th class="px-2 sm:px-6 py-4 font-semibold hidden lg:table-cell">Tanggal Dibuat</th><th class="px-2 sm:px-6 py-4 font-semibold text-right">Aksi</th></tr></thead><tbody>${posts.length > 0 ? posts.map((post, index) => renderTemplate`<tr class="bg-white hover:bg-main-50/30 hover:shadow-md transition-all group rounded-2xl"><td class="px-2 sm:px-6 py-4 text-gray-500 font-medium rounded-l-2xl hidden sm:table-cell">${index + 1}</td><td class="px-2 sm:px-6 py-4 font-bold text-gray-800 group-hover:text-main-200 transition-colors whitespace-normal break-words">${post.title}</td><td class="px-2 sm:px-6 py-4 hidden md:table-cell"><span class="bg-gray-100/80 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-200/50 inline-block max-w-[200px] truncate"${addAttribute(post.slug, "title")}>${post.slug}</span></td><td class="px-2 sm:px-6 py-4 text-gray-500 text-sm font-medium hidden lg:table-cell">${new Date(post.created_at).toLocaleDateString("id-ID", {
		day: "numeric",
		month: "long",
		year: "numeric"
	})}</td><td class="px-2 sm:px-6 py-4 rounded-r-2xl"><div class="flex items-center justify-end space-x-1 sm:space-x-2 opacity-100 lg:opacity-70 group-hover:opacity-100 transition-opacity"><a${addAttribute(`/blog/${post.slug}`, "href")} target="_blank" class="btn btn-sm btn-circle bg-gray-50 hover:bg-gray-100 border-none text-gray-600 tooltip" data-tip="Lihat Post"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg></a><a${addAttribute(`/admin/edit/${post.id}`, "href")} class="btn btn-sm btn-circle bg-main-100/20 hover:bg-main-100/40 border-none text-main-200 tooltip" data-tip="Edit"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg></a><form method="POST" class="inline m-0 p-0" onsubmit="return confirm('Yakin ingin menghapus post ini? Tindakan ini tidak dapat dibatalkan.');"><input type="hidden" name="delete_id"${addAttribute(post.id, "value")}><button type="submit" class="btn btn-sm btn-circle bg-red-50 hover:bg-red-100 border-none text-red-500 tooltip" data-tip="Hapus"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></form></div></td></tr>`) : renderTemplate`<tr><td colspan="5" class="px-6 py-16 text-center rounded-2xl"><div class="flex flex-col items-center justify-center"><div class="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg></div><p class="text-gray-800 text-lg font-bold">${dbError ? "Database Error" : "Belum ada data post"}</p><p class="text-gray-500 text-sm mt-2 max-w-md">${dbError ? "Tolong pastikan MySQL server menyala dan database `healnet_db` tersedia." : "Mulai dengan menambahkan post baru melalui tombol 'Tambah Post' di atas."}</p></div></td></tr>`}</tbody></table></div></div></div>` })}`;
}, "D:/astro/GiftCorp/src/pages/admin/index.astro", void 0);
var $$file = "D:/astro/GiftCorp/src/pages/admin/index.astro";
var $$url = "/admin";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/index@_@astro
var page = () => admin_exports;
//#endregion
export { page };
