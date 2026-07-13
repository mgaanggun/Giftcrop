import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as unescapeHTML, E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead, l as renderSlot, v as addAttribute } from "./server_CR6e1SMo.mjs";
import { r as $$Image } from "./_astro_assets_CYMCoJCi.mjs";
import { t as $$MainLayout } from "./MainLayout_DA7o5NXz.mjs";
import { t as ChevronRight } from "./chevron-right_4j-LnwSH.mjs";
import { t as db_default } from "./db_DPXSsOFx.mjs";
import { t as $$FormattedDate } from "./FormattedDate_B9SR0PEx.mjs";
import { marked } from "marked";
//#region src/layouts/BlogPost.astro
createAstro("https://heal-net-self.vercel.app/");
var $$BlogPost = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogPost;
	const { title, description, pubDate, updatedDate, heroImage, breadcrumbParent, date = true, book = false } = Astro.props;
	return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, {
		"title": title,
		"description": description,
		"image": heroImage
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="container py-5 lg:py-15"><div class="breadcrumbs text-sm mb-5"><ul class="flex! flex-wrap"><li><a href="/">Home</a></li><li><a href="./">${breadcrumbParent}</a></li><li>${title}</li></ul></div><article class="text-base-content max-w-6xl mx-auto"><div class="text-center mb-10 mt-6"><div class="date text-sm font-semibold tracking-wider text-main-200 uppercase mb-4">${date && renderTemplate`${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate })}`}${updatedDate && renderTemplate`<span class="last-updated-on block mt-1 text-base-content/60 text-xs">(Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate })})</span>`}</div><h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight text-base-content">${title}</h1><hr class="border-base-300 w-32 mx-auto my-6 border-t-2"></div><div>${heroImage && (typeof heroImage === "string" ? renderTemplate`<img${addAttribute(heroImage, "src")} alt="" class="rounded-3xl shadow-xl aspect-[16/9] object-cover w-full mb-16 border border-base-200">` : renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"width": 1020,
		"height": 510,
		"src": heroImage,
		"format": "webp",
		"fetchpriority": "high",
		"quality": "low",
		"loading": "eager",
		"alt": "",
		"class": "rounded-3xl shadow-xl aspect-[16/9] object-cover w-full mb-16 border border-base-200"
	})}`)}</div><div class="page max-w-6xl mx-auto">${renderSlot($$result, $$slots["default"])}${book && renderTemplate`<a href="/contact" class="mt-5 btn bg-[linear-gradient(125deg,var(--color-main-100),var(--color-main-200))] text-white border-0 shadow-xl hover:shadow-2xl w-full">Hubungi Kami ${renderComponent($$result, "ChevronRight", ChevronRight, {})}</a>`}</div></article></div>` })}`;
}, "D:/astro/GiftCorp/src/layouts/BlogPost.astro", void 0);
//#endregion
//#region src/pages/blog/[...slug].astro
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
	let postData = null;
	let relatedPosts = [];
	try {
		const { data, error } = await db_default.from("posts").select("*").eq("slug", slug).limit(1);
		if (data && data.length > 0) postData = data[0];
	} catch (e) {
		console.error(e);
	}
	if (!postData) return Astro.redirect("/404");
	try {
		const { data, error } = await db_default.from("posts").select("*").neq("id", postData.id).order("created_at", { ascending: false }).limit(3);
		if (data) relatedPosts = data.map((post) => ({
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
		}));
	} catch (e) {
		console.error("Error fetching related posts:", e);
	}
	let parsedContent = await marked.parse(postData.content, { breaks: true });
	const toc = [];
	parsedContent = parsedContent.replace(/<h([1-6])(.*?)>(.*?)<\/h\1>/g, (match, level, attrs, text) => {
		const cleanText = text.replace(/<[^>]+>/g, "").trim();
		const headingSlug = cleanText.toLowerCase().replace(/[^\w]+/g, "-");
		const depth = parseInt(level);
		if (depth === 2 || depth === 3) toc.push({
			depth,
			text: cleanText,
			slug: headingSlug
		});
		return `<h${level}${attrs} id="${headingSlug}">${text}</h${level}>`;
	});
	return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, {
		title: postData.title,
		description: postData.excerpt || "",
		pubDate: new Date(postData.created_at),
		heroImage: postData.thumbnail_url || void 0,
		"breadcrumbParent": "Blog"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col lg:flex-row gap-12 relative items-start"><div class="w-full lg:w-3/4"><!-- Mobile Table of Contents --><div class="bg-base-200/30 p-6 rounded-3xl border border-base-200 shadow-sm block lg:hidden mb-8"><h3 class="text-xl font-bold mb-4 text-base-content border-b border-base-200 pb-3">Daftar Isi</h3>${toc.length > 0 ? renderTemplate`<ul class="space-y-3 text-sm">${toc.map((item) => renderTemplate`<li${addAttribute(`leading-snug ${item.depth === 3 ? "ml-4" : ""}`, "class")}><a${addAttribute(`#${item.slug}`, "href")} class="text-base-content/70 hover:text-main-200 transition-colors block py-1 font-medium">${item.text}</a></li>`)}</ul>` : renderTemplate`<p class="text-sm text-base-content/60 italic">Tidak ada daftar isi</p>`}</div><article class="prose prose-lg md:prose-xl max-w-none text-base-content prose-headings:text-main-200 prose-headings:scroll-mt-24 prose-p:text-base-content/80 prose-a:text-main-200 hover:prose-a:text-main-100 prose-img:rounded-3xl prose-strong:text-base-content prose-ul:text-base-content/80 prose-ol:text-base-content/80 leading-relaxed tracking-wide">${unescapeHTML(parsedContent)}</article></div><div class="w-full lg:w-1/4"><div class="sticky top-28 space-y-6"><div class="bg-base-200/30 p-6 rounded-3xl border border-base-200 shadow-sm hidden lg:block"><h3 class="text-xl font-bold mb-4 text-base-content border-b border-base-200 pb-3">Daftar Isi</h3>${toc.length > 0 ? renderTemplate`<ul class="space-y-3 text-sm">${toc.map((item) => renderTemplate`<li${addAttribute(`leading-snug ${item.depth === 3 ? "ml-4" : ""}`, "class")}><a${addAttribute(`#${item.slug}`, "href")} class="text-base-content/70 hover:text-main-200 transition-colors block py-1 font-medium">${item.text}</a></li>`)}</ul>` : renderTemplate`<p class="text-sm text-base-content/60 italic">Tidak ada daftar isi</p>`}</div>${relatedPosts.length > 0 && renderTemplate`<div class="pt-2"><div class="flex items-center gap-2 mb-4"><div class="w-1 h-5 bg-[#0179B4] rounded-full"></div><h3 class="text-base font-bold text-[#0179B4] tracking-tight">Artikel Terkait</h3></div><ul class="space-y-4">${relatedPosts.map((p) => renderTemplate`<li><a${addAttribute(`/blog/${p.id}`, "href")} class="group flex gap-3 items-center"><div class="w-14 h-14 shrink-0 rounded-lg overflow-hidden border border-base-200 shadow-sm">${p.data.heroImage ? renderTemplate`<img${addAttribute(p.data.heroImage, "src")}${addAttribute(p.data.title, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">` : renderTemplate`<div class="w-full h-full bg-base-200 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-base-content/30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>`}</div><div class="flex flex-col gap-0.5"><h4 class="font-bold text-[13px] text-base-content group-hover:text-[#0179B4] transition-colors line-clamp-2 leading-snug">${p.data.title}</h4><span class="text-[11px] text-base-content/50 font-medium">${p.data.pubDate.toLocaleDateString("id-ID", {
		day: "numeric",
		month: "long",
		year: "numeric"
	})}</span></div></a></li>`)}</ul></div>`}</div></div></div>` })}`;
}, "D:/astro/GiftCorp/src/pages/blog/[...slug].astro", void 0);
var $$file = "D:/astro/GiftCorp/src/pages/blog/[...slug].astro";
var $$url = "/blog/[...slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/[...slug]@_@astro
var page = () => ____slug__exports;
//#endregion
export { page };
