import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as unescapeHTML, E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute } from "./server_CR6e1SMo.mjs";
import "./_astro_assets_CYMCoJCi.mjs";
import { t as $$MainLayout } from "./MainLayout_C1Mbp3iP.mjs";
import { t as db } from "./db_eLUyIcoY.mjs";
import { marked } from "marked";
//#region src/pages/services/[...slug].astro
var ____slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://heal-net-self.vercel.app/");
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const { slug } = Astro.params;
	if (!slug) return Astro.redirect("/404");
	let service = null;
	try {
		const { data, error } = await db.from("services").select("*").eq("slug", slug).limit(1);
		if (data && data.length > 0) service = data[0];
	} catch (e) {
		console.error(e);
	}
	if (!service) return Astro.redirect("/404");
	const parsedContent = await marked.parse(service.content || "", { breaks: true });
	return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, {
		"title": `${service.title} - Layanan GiftCorp`,
		"description": service.description || "Detail Layanan GiftCorp"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="relative bg-gradient-to-br from-main-50 via-white to-main-50 pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-hidden border-b border-gray-100"><!-- Dekorasi Background --><div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40"><div class="absolute -top-[20%] -right-[10%] w-[50%] h-[100%] rounded-full bg-main-100/20 blur-3xl mix-blend-multiply"></div><div class="absolute -bottom-[20%] -left-[10%] w-[50%] h-[100%] rounded-full bg-main-200/10 blur-3xl mix-blend-multiply"></div></div><div class="container mx-auto px-4 max-w-4xl relative z-10 text-center flex flex-col items-center"><a href="/services" class="inline-flex items-center text-main-200 hover:text-main-100 font-semibold mb-8 transition-colors group"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>Kembali ke Semua Layanan</a><span class="badge bg-white text-main-200 border-main-200/20 px-5 py-3 mb-6 rounded-full font-bold shadow-sm tracking-wide uppercase text-sm">Layanan Kami</span><h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">${service.title}</h1><p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">${service.description}</p></div></div><div class="container mx-auto px-4 max-w-4xl -mt-12 relative z-20 pb-24"><div class="bg-white rounded-[2rem] shadow-2xl shadow-gray-200/50 border border-gray-100 p-8 md:p-14 mb-16">${service.hero_image && renderTemplate`<div class="mb-12 rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"><img${addAttribute(service.hero_image, "src")}${addAttribute(service.title, "alt")} class="w-full h-auto max-h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"></div>`}<div class="prose prose-lg md:prose-xl max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-main-200 prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl"><article>${unescapeHTML(parsedContent)}</article></div></div><!-- CTA Section Khusus Layanan --><div class="relative rounded-[2rem] overflow-hidden shadow-2xl border border-main-200/20 bg-main-200"><div class="absolute inset-0 bg-gradient-to-r from-main-200 to-[#02497a] opacity-90 z-0"></div><!-- Dekorasi CTA --><svg class="absolute right-0 bottom-0 opacity-10 z-0 w-64 h-64 transform translate-x-1/4 translate-y-1/4" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg><div class="relative z-10 px-6 py-10 md:py-12 text-center flex flex-col items-center"><div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg></div><h2 class="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">Mulai Konsultasikan Kebutuhan Perusahaan Anda</h2><p class="text-white/80 mb-8 text-base md:text-lg max-w-2xl mx-auto font-medium">Tim ahli kami siap memberikan solusi terbaik dan penawaran khusus untuk layanan <span class="text-white font-bold">${service.title}</span>.</p><a${addAttribute(`https://wa.me/6281234567890?text=Halo%20GiftCorp,%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20layanan%20${encodeURIComponent(service.title)}`, "href")} target="_blank" class="btn btn-lg bg-white hover:bg-gray-50 text-main-200 border-none rounded-xl px-10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>Hubungi Kami via WhatsApp</a></div></div></div>` })}`;
}, "D:/astro/GiftCorp/src/pages/services/[...slug].astro", void 0);
var $$file = "D:/astro/GiftCorp/src/pages/services/[...slug].astro";
var $$url = "/services/[...slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/services/[...slug]@_@astro
var page = () => ____slug__exports;
//#endregion
export { page };
