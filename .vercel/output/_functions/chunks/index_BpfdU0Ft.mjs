import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { E as createComponent, a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute } from "./server_CR6e1SMo.mjs";
import "./_astro_assets_CYMCoJCi.mjs";
import { t as SITE_DESCRIPTION } from "./consts_C_10tp3D.mjs";
import { t as $$MainLayout } from "./MainLayout_DA7o5NXz.mjs";
import { t as db_default } from "./db_yf0CV2fq.mjs";
import { n as $$HowWorks, t as $$Testimonials } from "./Testimonials_BmHZSD-b.mjs";
//#region src/pages/services/index.astro
var services_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	let services = [];
	try {
		const { data, error } = await db_default.from("services").select("*").order("created_at", { ascending: false });
		if (data) services = data;
	} catch (e) {
		console.error("Database connection error:", e);
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, {
		"title": "Services",
		"description": SITE_DESCRIPTION
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="min-h-[60vh] text-base-content bg-gradient-to-b from-base-100 to-base-200/50"><!-- Breadcrumbs & Hero --><div class="container mx-auto px-4 py-8"><div class="breadcrumbs text-sm mb-8 text-base-content/70"><ul class="flex flex-wrap gap-2"><li><a href="/" class="hover:text-main-200 transition-colors">Home</a></li><li><span class="opacity-50 mx-2">/</span></li><li class="font-semibold text-main-200">Services</li></ul></div><div class="text-center mb-10"><div class="inline-block mb-4 px-4 py-1.5 rounded-full bg-main-200/10 text-main-200 font-semibold text-sm tracking-wide">Pusat Solusi Anda</div><h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-base-content tracking-tight">Layanan <span class="text-transparent bg-clip-text bg-gradient-to-r from-main-200 to-main-100">Unggulan</span> Kami</h1><p class="text-base-content/70 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">Kami menyediakan berbagai solusi untuk memenuhi kebutuhan korporat Anda dengan standar kualitas tertinggi dan pengerjaan profesional.</p></div></div><!-- Dynamic Services from Database --><div class="relative z-10">${services.map((service, index) => renderTemplate`<section class="py-12 lg:py-16 relative bg-transparent"><div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 lg:gap-12"><div${addAttribute(`w-full md:w-1/2 ${index % 2 !== 0 ? "md:order-last" : ""}`, "class")}><div class="rounded-[1.5rem] overflow-hidden shadow-xl relative group"><div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div><img${addAttribute(service.hero_image || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800", "src")}${addAttribute(service.title, "alt")} class="w-full h-auto aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"><div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20"><span class="bg-main-200 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm bg-opacity-90">Jelajahi Solusi</span></div></div></div><div class="w-full md:w-1/2"><div class="flex items-center gap-4 mb-4"><span class="flex items-center justify-center w-10 h-10 rounded-xl bg-main-200/10 text-main-200 font-bold text-lg">${String(index + 1).padStart(2, "0")}</span><div class="h-px flex-1 bg-gradient-to-r from-main-200/30 to-transparent"></div></div><h2 class="text-3xl lg:text-4xl font-extrabold mb-4 leading-tight text-base-content">${service.title}</h2><p class="text-lg leading-relaxed mb-8 text-base-content/80">${service.description}</p><a${addAttribute(`/services/${service.slug}`, "href")} class="group inline-flex items-center gap-2 px-6 py-3 bg-main-200 hover:bg-main-100 text-white rounded-xl font-semibold shadow-md hover:-translate-y-0.5 transition-all duration-300">Pelajari Lebih Lanjut<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a></div></div></section>`)}</div><!-- How It Works -->${renderComponent($$result, "HowWorks", $$HowWorks, {})}<!-- Testimonials -->${renderComponent($$result, "Testimonials", $$Testimonials, {})}</div>` })}`;
}, "D:/astro/GiftCorp/src/pages/services/index.astro", void 0);
var $$file = "D:/astro/GiftCorp/src/pages/services/index.astro";
var $$url = "/services";
//#endregion
//#region \0virtual:astro:page:src/pages/services/index@_@astro
var page = () => services_exports;
//#endregion
export { page };
