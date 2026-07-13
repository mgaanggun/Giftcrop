import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead, v as addAttribute } from "./server_CR6e1SMo.mjs";
import { r as $$Image } from "./_astro_assets_CYMCoJCi.mjs";
import { t as SITE_DESCRIPTION } from "./consts_C_10tp3D.mjs";
import { t as $$MainLayout } from "./MainLayout_DA7o5NXz.mjs";
import { t as ChevronRight } from "./chevron-right_4j-LnwSH.mjs";
import { t as db_default } from "./db_yf0CV2fq.mjs";
import { t as $$FormattedDate } from "./FormattedDate_B9SR0PEx.mjs";
//#region src/components/card/BlogCard.astro
createAstro("https://heal-net-self.vercel.app/");
var $$BlogCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogCard;
	const { id, data, slug = "/blog", date = true, book = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<article class="group h-full flex flex-col gap-3 border-2 border-main-200 overflow-hidden rounded-xl">${data.heroImage && renderTemplate`<div class="grid"><a${addAttribute(`${slug}/${id}`, "href")} class="[grid-area:1/1/2/2]">${typeof data.heroImage === "string" ? renderTemplate`<img${addAttribute(data.heroImage, "src")}${addAttribute(data.title, "alt")} class="aspect-2/1 w-full h-auto object-cover">` : renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"src": data.heroImage,
		"alt": data.title,
		"width": "500",
		"height": "250",
		"format": "webp",
		"quality": 45,
		"class": "aspect-2/1 w-full h-auto object-cover"
	})}`}</a></div>`}<div class="text-center w-full flex-1 flex flex-col justify-between items-center p-4"><p class="flex flex-wrap gap-2 gap-x-4 items-center uppercase justify-center text-sm mb-4 text-gray-500 font-medium">${date && renderTemplate`<time${addAttribute(data.pubDate.toISOString(), "datetime")}>${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": data.pubDate })}</time>`}</p><a${addAttribute(`${slug}/${id}`, "href")} class="flex-1 flex flex-col justify-between w-full"><h3 class="font-semibold text-xl sm:text-2xl group-hover:underline">${data.title}</h3><p class="mb-6 text-sm sm:text-base">${data.description}</p><button class="btn btn-outline border-2 border-main-200 text-main-200  rounded-lg hover:bg-main-200 hover:text-white w-full mt-auto">Read more${renderComponent($$result, "ChevronRight", ChevronRight, { "size": 16 })}</button></a>${book && renderTemplate`<a href="/contact" class="mt-5 btn bg-[linear-gradient(125deg,var(--color-main-100),var(--color-main-200))] text-white border-0 shadow-xl hover:shadow-2xl w-full">Hubungi Kami</a>`}</div></article>`;
}, "D:/astro/GiftCorp/src/components/card/BlogCard.astro", void 0);
//#endregion
//#region src/pages/blog/index.astro
var blog_exports = /* @__PURE__ */ __exportAll({
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
	try {
		const { data, error } = await db_default.from("posts").select("*").order("created_at", { ascending: false });
		if (data) posts = data;
	} catch (e) {
		console.error(e);
	}
	const page = {
		data: posts.map((post) => ({
			id: post.slug,
			slug: "/blog",
			data: {
				title: post.title,
				description: post.excerpt || "",
				pubDate: new Date(post.created_at),
				heroImage: post.thumbnail_url || void 0,
				author: {
					name: "Admin",
					id: "admin"
				}
			}
		})),
		lastPage: 1
	};
	Astro.site?.toString();
	return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, {
		"title": "Blog - Berita & Artikel",
		"description": SITE_DESCRIPTION,
		"pubDate": /* @__PURE__ */ new Date()
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="min-h-[70vh] bg-base-100 pb-20"><!-- Header Section --><section class="relative py-8 lg:py-12 bg-base-200/30 overflow-hidden"><div class="container mx-auto px-4 relative z-10"><!-- Breadcrumbs --><div class="breadcrumbs text-sm text-base-content/60 mb-6 font-medium"><ul class="flex! flex-wrap"><li><a href="/" class="hover:text-main-200 transition-colors">Beranda</a></li><li class="text-main-200">Blog</li></ul></div><div class="text-center mt-4"><h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-base-content"><span class="bg-linear-to-r from-[#0179B4] to-[#88D8FF] bg-clip-text text-transparent">Blog & Artikel</span></h1><p class="text-lg md:text-xl text-base-content/80 max-w-2xl mx-auto font-medium">Temukan wawasan terbaru, berita perusahaan, dan artikel menarik lainnya.</p></div></div></section><!-- Content Section --><div class="container mx-auto px-4 py-16"><section><ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">${page.data.map((post) => renderTemplate`<li class="h-full">${renderComponent($$result, "BlogCard", $$BlogCard, { ...post })}</li>`)}</ul>${page.data.length === 0 && renderTemplate`<div class="text-center py-20 bg-base-200/50 rounded-3xl border-main-200 border-2 max-w-3xl mx-auto"><h3 class="text-2xl font-bold text-main-200 mb-2">Belum Ada Artikel</h3><p class="text-base-content/80">Artikel dan berita terbaru akan segera hadir di sini.</p></div>`}</section></div></div>` })}`;
}, "D:/astro/GiftCorp/src/pages/blog/index.astro", void 0);
var $$file = "D:/astro/GiftCorp/src/pages/blog/index.astro";
var $$url = "/blog";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/index@_@astro
var page = () => blog_exports;
//#endregion
export { page };
