import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead } from "./server_CR6e1SMo.mjs";
import "./_astro_assets_CYMCoJCi.mjs";
import { t as $$AdminLayout } from "./AdminLayout_D775Ebq8.mjs";
import { t as db_default } from "./db_DPXSsOFx.mjs";
//#region src/pages/admin/layanan/create.astro
var create_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Create,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://heal-net-self.vercel.app/");
var $$Create = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Create;
	let error = "";
	let success = "";
	if (Astro.request.method === "POST") try {
		const data = await Astro.request.formData();
		const title = data.get("title");
		const slug = data.get("slug");
		const description = data.get("description");
		const content = data.get("content");
		let hero_image = null;
		const image_file = data.get("image_file");
		if (image_file && typeof image_file === "object" && "size" in image_file && image_file.size > 0) {
			const file = image_file;
			const fs = await import("node:fs");
			const path = await import("node:path");
			const sharp = (await import("sharp")).default;
			const baseName = file.name.split(".").slice(0, -1).join(".") || file.name;
			const fileName = `${Date.now()}-${baseName.replace(/[^a-zA-Z0-9.-]/g, "_")}.webp`;
			const uploadDir = path.join(process.cwd(), "public", "uploads", "services");
			if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
			const filePath = path.join(uploadDir, fileName);
			await sharp(Buffer.from(await file.arrayBuffer())).webp().toFile(filePath);
			hero_image = `/uploads/services/${fileName}`;
		}
		if (!title || !slug || !content) error = "Judul, Slug, dan Konten wajib diisi.";
		else {
			const { error: insertError } = await db_default.from("services").insert([{
				title,
				slug,
				description,
				content,
				hero_image
			}]);
			if (insertError) throw insertError;
			success = "Layanan berhasil ditambahkan!";
			return Astro.redirect("/admin/layanan");
		}
	} catch (err) {
		error = err.message || "Terjadi kesalahan.";
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, {
		"title": "Tambah Layanan - Admin Corporate",
		"description": "Tambah Layanan Baru",
		"pubDate": /* @__PURE__ */ new Date()
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="w-full mx-auto"><div class="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/40 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"><div><h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-main-200 to-main-100 tracking-tight">Tambah Layanan Baru</h1><p class="text-gray-600 mt-2 font-medium">Buat layanan baru yang ditawarkan oleh perusahaan.</p></div><div><a href="/admin/layanan" class="btn bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-main-200 transition-all shadow-sm rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 text-main-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>Kembali ke Layanan</a></div></div>${error && renderTemplate`<div class="alert alert-error mb-8 text-white shadow-lg rounded-2xl border-none"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>${error}</span></div>`}${success && renderTemplate`<div class="alert alert-success mb-8 text-white shadow-lg rounded-2xl border-none"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>${success}</span></div>`}<form method="POST" enctype="multipart/form-data" class="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl border border-white/50 text-gray-800"><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div class="form-control w-full"><label class="label mb-1"><span class="label-text text-gray-700 font-bold text-base">Judul Layanan</span></label><input type="text" name="title" required class="input input-lg w-full bg-gray-50/50 border-gray-200 focus:border-main-200 focus:ring-2 focus:ring-main-200/20 rounded-2xl transition-all" placeholder="Masukkan judul..."></div><div class="form-control w-full"><label class="label mb-1"><span class="label-text text-gray-700 font-bold text-base">Slug</span></label><input type="text" name="slug" required class="input input-lg w-full bg-gray-50/50 border-gray-200 focus:border-main-200 focus:ring-2 focus:ring-main-200/20 rounded-2xl transition-all" placeholder="contoh-layanan-kami"></div></div><div class="form-control w-full mb-6"><label class="label mb-1"><span class="label-text text-gray-700 font-bold text-base">Gambar Hero <span class="text-gray-400 font-normal">(Opsional)</span></span></label><input type="file" name="image_file" accept="image/*" class="file-input file-input-lg w-full bg-gray-50/50 border-gray-200 focus:border-main-200 focus:ring-2 focus:ring-main-200/20 rounded-2xl transition-all"></div><div class="form-control w-full mb-6"><label class="label mb-1"><span class="label-text text-gray-700 font-bold text-base">Deskripsi Singkat</span></label><textarea name="description" class="textarea w-full h-24 bg-gray-50/50 border-gray-200 focus:border-main-200 focus:ring-2 focus:ring-main-200/20 rounded-2xl transition-all text-base p-4" placeholder="Deskripsi ringkas layanan ini..."></textarea></div><div class="form-control w-full mb-8"><label class="label mb-1"><span class="label-text text-gray-700 font-bold text-base">Konten <span class="text-gray-400 font-normal">(Markdown diizinkan)</span></span></label><textarea name="content" required class="textarea w-full h-64 bg-gray-50/50 border-gray-200 focus:border-main-200 focus:ring-2 focus:ring-main-200/20 rounded-2xl transition-all text-base p-5" placeholder="Tulis detail lengkap di sini..."></textarea></div><div class="flex flex-col sm:flex-row justify-end items-center gap-4 pt-6 border-t border-gray-100"><a href="/admin/layanan" class="btn btn-ghost border-none text-gray-500 hover:bg-gray-100 rounded-xl px-6 w-full sm:w-auto">Batal</a><button type="submit" class="btn bg-gradient-to-r from-main-200 to-[#035991] hover:from-[#035991] hover:to-main-200 text-white border-none shadow-lg shadow-main-200/30 rounded-xl px-10 transition-all w-full sm:w-auto"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>Simpan Layanan</button></div></form></div>` })}`;
}, "D:/astro/GiftCorp/src/pages/admin/layanan/create.astro", void 0);
var $$file = "D:/astro/GiftCorp/src/pages/admin/layanan/create.astro";
var $$url = "/admin/layanan/create";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/layanan/create@_@astro
var page = () => create_exports;
//#endregion
export { page };
