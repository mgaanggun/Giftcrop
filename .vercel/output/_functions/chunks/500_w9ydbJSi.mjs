import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead } from "./server_CR6e1SMo.mjs";
import "./_astro_assets_CYMCoJCi.mjs";
import { n as $$Logo, t as $$MainLayout } from "./MainLayout_DA7o5NXz.mjs";
//#region src/pages/500.astro
var _500_exports = /* @__PURE__ */ __exportAll({
	default: () => $$500,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://heal-net-self.vercel.app/");
var $$500 = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$500;
	const { error } = Astro.props;
	return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, {
		"title": "500 Error",
		"description": "Server Error",
		"data-astro-cid-qnkxrarz": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="section flex-1 flex flex-col justify-center items-center" data-astro-cid-qnkxrarz><div class="container text-center grid gap-4" data-astro-cid-qnkxrarz><div class="text-center mx-auto" data-astro-cid-qnkxrarz>${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-qnkxrarz": true })}</div><h1 class="text-5xl lg:text-9xl font-bold" data-astro-cid-qnkxrarz>500</h1><p data-astro-cid-qnkxrarz>${error instanceof Error ? error.message : "Unknown error"}</p><a href="/" class="btn bg-[linear-gradient(125deg,var(--color-main-100),var(--color-main-200))] text-white border-0 rounded-xl text-lg py-3 px-6 h-auto shadow-xl hover:shadow-2xl mx-auto" data-astro-cid-qnkxrarz>GO TO HOME</a></div></section>` })}`;
}, "D:/astro/GiftCorp/src/pages/500.astro", void 0);
var $$file = "D:/astro/GiftCorp/src/pages/500.astro";
var $$url = "/500";
//#endregion
//#region \0virtual:astro:page:src/pages/500@_@astro
var page = () => _500_exports;
//#endregion
export { page };
