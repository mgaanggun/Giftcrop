import { E as createComponent, T as createAstro, f as renderTemplate, g as maybeRenderHead, v as addAttribute } from "./server_CR6e1SMo.mjs";
import "./_astro_assets_CYMCoJCi.mjs";
//#region src/components/FormattedDate.astro
createAstro("https://heal-net-self.vercel.app/");
var $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$FormattedDate;
	const { date } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<time${addAttribute(date.toISOString(), "datetime")}>${date.toLocaleDateString("en-us", {
		year: "numeric",
		month: "short",
		day: "numeric"
	})}</time>`;
}, "D:/astro/GiftCorp/src/components/FormattedDate.astro", void 0);
//#endregion
export { $$FormattedDate as t };
