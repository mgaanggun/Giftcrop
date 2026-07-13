import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute } from "./server_CR6e1SMo.mjs";
import "./_astro_assets_CYMCoJCi.mjs";
import { t as $$MainLayout } from "./MainLayout_C1Mbp3iP.mjs";
import { t as db } from "./db_eLUyIcoY.mjs";
//#region src/pages/produk/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://heal-net-self.vercel.app/");
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { slug } = Astro.params;
	if (!slug) return Astro.redirect("/404");
	let product = null;
	let error = "";
	try {
		const { data, error } = await db.from("products").select("*").eq("slug", slug).limit(1);
		if (data && data.length > 0) product = data[0];
	} catch (err) {
		console.error("Error fetching product:", err);
		error = err.message;
	}
	if (!product && !error) return Astro.redirect("/404");
	return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, {
		"title": product ? `${product.name} - GiftCorp` : "Produk Tidak Ditemukan",
		"description": product?.description?.substring(0, 150) || "Detail produk GiftCorp",
		"pubDate": /* @__PURE__ */ new Date()
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="min-h-[70vh] py-16 text-base-content"><div class="container mx-auto px-4 max-w-6xl"><div class="mb-8"><a href="/produk" class="text-main-200 hover:text-main-100 flex items-center font-medium transition-colors"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>Kembali ke Katalog</a></div>${error ? renderTemplate`<div class="alert alert-error text-white text-center">${error}</div>` : renderTemplate`<div class="flex flex-col gap-12"><!-- Top Section (Image and Basic Details side-by-side) --><div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"><!-- Image Section --><div class="bg-base-200 rounded-3xl overflow-hidden border border-base-300 shadow-sm relative group">${product.image_url ? renderTemplate`<img${addAttribute(product.image_url, "src")}${addAttribute(product.name, "alt")} class="w-full h-auto object-cover aspect-square transition-transform duration-500 group-hover:scale-105">` : renderTemplate`<div class="w-full aspect-square flex items-center justify-center text-base-content/50"><svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>`}</div><!-- Basic Details Section --><div class="flex flex-col h-full justify-center"><h1 class="text-4xl lg:text-5xl font-extrabold text-base-content mb-4 leading-tight">${product.name}</h1><div class="text-3xl font-black text-main-200 mb-8">${new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR"
	}).format(product.price || 0)}</div><div class="mt-8 space-y-4"><a${addAttribute(`https://wa.me/6281234567890?text=Halo%20GiftCorp,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(product.name)}`, "href")} target="_blank" class="btn btn-lg w-full bg-main-200 hover:bg-main-100 text-white border-none rounded-xl shadow-lg hover:shadow-xl transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>Pesan Sekarang via WhatsApp</a><p class="text-center text-sm text-gray-500 font-medium">Pengiriman ke seluruh Indonesia.</p></div></div></div><!-- Bottom Section (Full-width Description) --><div class="prose prose-lg max-w-none text-base-content/80 mt-8 pt-8 border-t border-base-300"><h3 class="text-2xl font-bold text-base-content mb-6">Deskripsi Produk</h3><p class="whitespace-pre-line leading-relaxed">${product.description || "Tidak ada deskripsi."}</p></div></div>`}</div></div>` })}`;
}, "D:/astro/GiftCorp/src/pages/produk/[slug].astro", void 0);
var $$file = "D:/astro/GiftCorp/src/pages/produk/[slug].astro";
var $$url = "/produk/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/produk/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
