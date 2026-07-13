import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute } from "./server_CR6e1SMo.mjs";
import "./_astro_assets_CYMCoJCi.mjs";
import { t as $$AdminLayout } from "./AdminLayout_BX1kIhZc.mjs";
import { t as db } from "./db_eLUyIcoY.mjs";
//#region src/pages/admin/produk/edit/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://heal-net-self.vercel.app/");
var $$Id = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Id;
	const { id } = Astro.params;
	if (!id) return Astro.redirect("/admin/produk");
	let error = "";
	let success = "";
	let product = null;
	try {
		const { data, error: fetchError } = await db.from("products").select("*").eq("id", id).single();
		if (data) product = data;
		else return Astro.redirect("/admin/produk");
	} catch (e) {
		error = "Gagal mengambil data produk: " + e.message;
	}
	if (Astro.request.method === "POST") try {
		const data = await Astro.request.formData();
		const name = data.get("name");
		const slug = data.get("slug");
		const price = data.get("price");
		const description = data.get("description");
		let image_url = product.image_url;
		const image_file = data.get("image_file");
		if (image_file && typeof image_file === "object" && "size" in image_file && image_file.size > 0) {
			const file = image_file;
			const fs = await import("node:fs");
			const path = await import("node:path");
			const sharp = (await import("sharp")).default;
			const baseName = file.name.split(".").slice(0, -1).join(".") || file.name;
			const fileName = `${Date.now()}-${baseName.replace(/[^a-zA-Z0-9.-]/g, "_")}.webp`;
			const uploadDir = path.join(process.cwd(), "public", "uploads", "produk");
			if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
			const filePath = path.join(uploadDir, fileName);
			await sharp(Buffer.from(await file.arrayBuffer())).webp().toFile(filePath);
			image_url = `/uploads/produk/${fileName}`;
		}
		if (!name || !slug || !price) error = "Nama, Slug, dan Harga wajib diisi.";
		else {
			const parsedPrice = parseInt(price.replace(/\D/g, ""), 10) || 0;
			const { error: updateError } = await db.from("products").update({
				name,
				slug,
				description,
				price: parsedPrice,
				image_url
			}).eq("id", id);
			if (updateError) throw updateError;
			success = "Produk berhasil diperbarui!";
			return Astro.redirect("/admin/produk");
		}
	} catch (err) {
		error = err.message || "Terjadi kesalahan.";
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, {
		"title": "Edit Produk - Admin GiftCorp",
		"description": "Edit Produk",
		"pubDate": /* @__PURE__ */ new Date()
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="w-full mx-auto"><div class="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/40 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"><div><h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-main-200 to-main-100 tracking-tight">Edit Produk</h1><p class="text-gray-600 mt-2 font-medium">Perbarui data produk katalog.</p></div><div><a href="/admin/produk" class="btn bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-main-200 transition-all shadow-sm rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 text-main-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>Kembali ke Produk</a></div></div>${error && renderTemplate`<div class="alert alert-error mb-8 text-white shadow-lg rounded-2xl border-none"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>${error}</span></div>`}${success && renderTemplate`<div class="alert alert-success mb-8 text-white shadow-lg rounded-2xl border-none"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>${success}</span></div>`}${product && renderTemplate`<form method="POST" enctype="multipart/form-data" class="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl border border-white/50 text-gray-800"><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div class="form-control w-full"><label class="label mb-1"><span class="label-text text-gray-700 font-bold text-base">Nama Produk</span></label><input type="text" name="name" required class="input input-lg w-full bg-gray-50/50 border-gray-200 focus:border-main-200 focus:ring-2 focus:ring-main-200/20 rounded-2xl transition-all"${addAttribute(product.name, "value")}></div><div class="form-control w-full"><label class="label mb-1"><span class="label-text text-gray-700 font-bold text-base">Slug</span></label><input type="text" name="slug" required class="input input-lg w-full bg-gray-50/50 border-gray-200 focus:border-main-200 focus:ring-2 focus:ring-main-200/20 rounded-2xl transition-all"${addAttribute(product.slug, "value")}></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><div class="form-control w-full"><label class="label mb-1"><span class="label-text text-gray-700 font-bold text-base">Harga (Rp)</span></label><input type="text" name="price" required class="input input-lg w-full bg-gray-50/50 border-gray-200 focus:border-main-200 focus:ring-2 focus:ring-main-200/20 rounded-2xl transition-all"${addAttribute(product.price, "value")}></div><div class="form-control w-full"><label class="label mb-1"><span class="label-text text-gray-700 font-bold text-base">Gambar Produk <span class="text-gray-400 font-normal">(Opsional)</span></span></label>${product.image_url && renderTemplate`<div class="mb-3 p-3 bg-gray-50/80 rounded-2xl border border-gray-100 flex items-center gap-4"><img${addAttribute(product.image_url, "src")} alt="Current image" class="w-24 h-24 object-cover rounded-xl shadow-sm border border-gray-200"><span class="text-sm text-gray-500 font-medium">Gambar saat ini</span></div>`}<input type="file" name="image_file" accept="image/*" class="file-input file-input-lg w-full bg-gray-50/50 border-gray-200 focus:border-main-200 focus:ring-2 focus:ring-main-200/20 rounded-2xl transition-all"></div></div><div class="form-control w-full mb-8"><label class="label mb-1"><span class="label-text text-gray-700 font-bold text-base">Deskripsi</span></label><textarea name="description" class="textarea w-full h-48 bg-gray-50/50 border-gray-200 focus:border-main-200 focus:ring-2 focus:ring-main-200/20 rounded-2xl transition-all text-base p-5">${product.description}</textarea></div><div class="flex flex-col sm:flex-row justify-end items-center gap-4 pt-6 border-t border-gray-100"><a href="/admin/produk" class="btn btn-ghost border-none text-gray-500 hover:bg-gray-100 rounded-xl px-6 w-full sm:w-auto">Batal</a><button type="submit" class="btn bg-gradient-to-r from-main-200 to-[#035991] hover:from-[#035991] hover:to-main-200 text-white border-none shadow-lg shadow-main-200/30 rounded-xl px-10 transition-all w-full sm:w-auto"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>Simpan Perubahan</button></div></form>`}</div>` })}`;
}, "D:/astro/GiftCorp/src/pages/admin/produk/edit/[id].astro", void 0);
var $$file = "D:/astro/GiftCorp/src/pages/admin/produk/edit/[id].astro";
var $$url = "/admin/produk/edit/[id]";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/produk/edit/[id]@_@astro
var page = () => _id__exports;
//#endregion
export { page };
