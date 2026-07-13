import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { E as createComponent, a as renderComponent, f as renderTemplate, g as maybeRenderHead } from "./server_CR6e1SMo.mjs";
import "./_astro_assets_CYMCoJCi.mjs";
import { n as $$Logo, t as $$MainLayout } from "./MainLayout_DA7o5NXz.mjs";
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, {
		"title": "Not found",
		"description": "Page not found",
		"data-astro-cid-ibpinaeu": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="section flex-1 flex flex-col justify-center items-center" data-astro-cid-ibpinaeu><div class="container text-center grid gap-4" data-astro-cid-ibpinaeu><div class="text-center mx-auto" data-astro-cid-ibpinaeu>${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-ibpinaeu": true })}</div><h1 class="text-5xl! lg:text-[10em]! font-bold leading-none" data-astro-cid-ibpinaeu>404</h1><p data-astro-cid-ibpinaeu>Sorry, we couldn't fint that page</p><a href="/" class="btn bg-[linear-gradient(125deg,var(--color-main-100),var(--color-main-200))] text-white border-0 rounded-xl text-lg py-3 px-6 h-auto shadow-xl hover:shadow-2xl mx-auto" data-astro-cid-ibpinaeu>GO TO HOME</a></div></section>` })}`;
}, "D:/astro/GiftCorp/src/pages/404.astro", void 0);
var $$file = "D:/astro/GiftCorp/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
