import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { E as createComponent, a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute } from "./server_CR6e1SMo.mjs";
import "./_astro_assets_CYMCoJCi.mjs";
import { t as $$MainLayout } from "./MainLayout_C1Mbp3iP.mjs";
import { t as db } from "./db_eLUyIcoY.mjs";
//#region src/pages/produk/index.astro
var produk_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	let products = [];
	try {
		const { data, error } = await db.from("products").select("*").order("created_at", { ascending: false });
		if (data) products = data;
	} catch (error) {
		console.error("Database connection error:", error);
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, {
		"title": "Katalog Produk - GiftCorp",
		"description": "Lihat berbagai pilihan produk dan souvenir korporat dari GiftCorp",
		"pubDate": /* @__PURE__ */ new Date()
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="min-h-screen pt-12 pb-24 text-base-content"><div class="container mx-auto px-4"><div class="text-center mb-16"><h1 class="text-4xl md:text-5xl font-bold mb-4 text-main-200">Katalog Produk</h1><p class="text-base-content/80 max-w-2xl mx-auto text-lg">Pilihan souvenir dan merchandise korporat premium untuk menunjang branding perusahaan Anda.</p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">${products.length > 0 ? products.map((product) => renderTemplate`<a${addAttribute(`/produk/${product.slug}`, "href")} class="bg-base-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group border border-base-300"><div class="w-full h-64 overflow-hidden bg-base-200 relative">${product.image_url ? renderTemplate`<img${addAttribute(product.image_url, "src")}${addAttribute(product.name, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">` : renderTemplate`<div class="w-full h-full flex items-center justify-center text-base-content/50">Tidak ada gambar</div>`}<div class="absolute top-4 right-4 bg-base-100/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-main-200 shadow-sm">Tersedia</div></div><div class="p-6 flex flex-col flex-grow"><h2 class="text-xl font-bold mb-2 text-base-content line-clamp-2 group-hover:text-main-200 transition-colors">${product.name}</h2><div class="mt-auto pt-4 border-t border-base-300 flex items-center justify-between"><span class="text-xl font-extrabold text-main-100">${new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR"
	}).format(product.price || 0)}</span><span class="btn btn-sm btn-circle bg-main-200 text-white border-none group-hover:bg-main-100 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span></div></div></a>`) : renderTemplate`<div class="col-span-full text-center py-20 text-base-content/70 bg-base-100 rounded-2xl border border-base-300 shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 mx-auto mb-4 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="m9 14 2 2 4-4"></path></svg><p class="text-xl">Belum ada produk yang ditambahkan.</p></div>`}</div></div></div>` })}`;
}, "D:/astro/GiftCorp/src/pages/produk/index.astro", void 0);
var $$file = "D:/astro/GiftCorp/src/pages/produk/index.astro";
var $$url = "/produk";
//#endregion
//#region \0virtual:astro:page:src/pages/produk/index@_@astro
var page = () => produk_exports;
//#endregion
export { page };
