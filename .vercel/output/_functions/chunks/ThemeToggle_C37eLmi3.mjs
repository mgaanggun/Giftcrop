import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead, l as renderSlot, n as renderScript, t as spreadAttributes, v as addAttribute } from "./server_CR6e1SMo.mjs";
import { n as $$Font } from "./_astro_assets_CYMCoJCi.mjs";
import { n as SITE_TITLE, t as SITE_DESCRIPTION } from "./consts_C_10tp3D.mjs";
//#region src/assets/og_1200x630.jpg
var og_1200x630_default = new Proxy({
	"src": "/_astro/og_1200x630.DJWwdq91.jpg",
	"width": 1200,
	"height": 630,
	"format": "jpg"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/astro/GiftCorp/src/assets/og_1200x630.jpg";
	return target[name];
} });
//#endregion
//#region src/components/BaseHead.astro
createAstro("https://heal-net-self.vercel.app/");
var $$BaseHead = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseHead;
	const canonicalURL = new URL(Astro.url.pathname, Astro.site);
	const { title = SITE_TITLE, description = SITE_DESCRIPTION, image = og_1200x630_default } = Astro.props;
	return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg"><link rel="icon" href="/favicon/favicon.ico"><link rel="manifest" href="/favicon/site.webmanifest"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"${addAttribute(SITE_TITLE, "title")}${addAttribute(new URL("rss.xml", Astro.site), "href")}><meta name="generator"${addAttribute(Astro.generator, "content")}>${renderComponent($$result, "Font", $$Font, {
		"cssVariable": "--font-atkinson",
		"preload": true
	})}<!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image.src, Astro.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image.src, Astro.url), "content")}><!-- JSON-LD Structured Data --><script async type="application/ld+json">
  {
    "@context": "http://schema.org/",
    "@type": "Organization",
    "name": "HealNet",
    "brand": "HealNet",
    "alternateName": "HealNet",
    "url": "#",
    "logo": "/favicon/android-chrome-512x512.png",
    "description": "Specialized, efficient, and thorough cleaning services",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "L.K. Road",
      "addressLocality": "Vashi",
      "addressRegion": "Maharashtra",
      "postalCode": "410200",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+444572008200",
        "email": "info@healnet.com",
        "contactType": "customer support",
        "areaServed": "EN",
        "availableLanguage": ["Englishn"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/healnet",
      "https://x.com/healnet",
      "https://facebook.com/healnet"
    ]
  }
<\/script>`;
}, "D:/astro/GiftCorp/src/components/BaseHead.astro", void 0);
//#endregion
//#region node_modules/@lucide/astro/src/defaultAttributes.ts
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
};
//#endregion
//#region node_modules/@lucide/astro/src/utils/hasA11yProp.ts
/**
* Check if a component has an accessibility prop
*
* @param {object} props
* @returns {boolean} Whether the component has an accessibility prop
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
//#endregion
//#region node_modules/@lucide/astro/src/Icon.astro
createAstro("https://heal-net-self.vercel.app/");
var $$Icon = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Icon;
	const { color = "currentColor", size = 24, "stroke-width": strokeWidth = 2, absoluteStrokeWidth = false, iconNode = [], class: className, ...rest } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<svg${spreadAttributes({
		...defaultAttributes,
		width: size,
		height: size,
		stroke: color,
		"stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
		...!hasA11yProp(rest) && { "aria-hidden": "true" },
		...rest
	})}${addAttribute(["lucide", className], "class:list")}>${iconNode.map(([Tag, attrs]) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs })}`)}${renderSlot($$result, $$slots["default"])}</svg>`;
}, "D:/astro/GiftCorp/node_modules/@lucide/astro/src/Icon.astro", void 0);
//#endregion
//#region node_modules/@lucide/astro/src/utils/mergeClasses.ts
/**
* Merges classes into a single string
*
* @param {array} classes
* @returns {string} A string of classes
*/
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
//#endregion
//#region node_modules/@lucide/astro/src/utils/toKebabCase.ts
/**
* Converts string to kebab case
*
* @param {string} string
* @returns {string} A kebabized string
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/@lucide/astro/src/createLucideIcon.ts
var createLucideIcon_default = (iconName, iconNode) => {
	return createComponent(($$result, $$props, $$slots) => {
		const { class: className, ...restProps } = $$props;
		return renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
			class: mergeClasses(Boolean(iconName) && `lucide-${toKebabCase(iconName)}`, Boolean(className) && className),
			iconNode,
			...restProps
		}, { default: () => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`;
	}, void 0, "none");
};
//#endregion
//#region node_modules/@lucide/astro/src/icons/menu.ts
/**
* @component @name Menu
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCA1aDE2IiAvPgogIDxwYXRoIGQ9Ik00IDEyaDE2IiAvPgogIDxwYXRoIGQ9Ik00IDE5aDE2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/menu
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var Menu = createLucideIcon_default("menu", [
	["path", { "d": "M4 5h16" }],
	["path", { "d": "M4 12h16" }],
	["path", { "d": "M4 19h16" }]
]);
//#endregion
//#region node_modules/@lucide/astro/src/icons/moon.ts
/**
* @component @name Moon
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAuOTg1IDEyLjQ4NmE5IDkgMCAxIDEtOS40NzMtOS40NzJjLjQwNS0uMDIyLjYxNy40Ni40MDIuODAzYTYgNiAwIDAgMCA4LjI2OCA4LjI2OGMuMzQ0LS4yMTUuODI1LS4wMDQuODAzLjQwMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/moon
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var Moon = createLucideIcon_default("moon", [["path", { "d": "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" }]]);
//#endregion
//#region node_modules/@lucide/astro/src/icons/sun.ts
/**
* @component @name Sun
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI0IiAvPgogIDxwYXRoIGQ9Ik0xMiAydjIiIC8+CiAgPHBhdGggZD0iTTEyIDIwdjIiIC8+CiAgPHBhdGggZD0ibTQuOTMgNC45MyAxLjQxIDEuNDEiIC8+CiAgPHBhdGggZD0ibTE3LjY2IDE3LjY2IDEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJNMiAxMmgyIiAvPgogIDxwYXRoIGQ9Ik0yMCAxMmgyIiAvPgogIDxwYXRoIGQ9Im02LjM0IDE3LjY2LTEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJtMTkuMDcgNC45My0xLjQxIDEuNDEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sun
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var Sun = createLucideIcon_default("sun", [
	["circle", {
		"cx": "12",
		"cy": "12",
		"r": "4"
	}],
	["path", { "d": "M12 2v2" }],
	["path", { "d": "M12 20v2" }],
	["path", { "d": "m4.93 4.93 1.41 1.41" }],
	["path", { "d": "m17.66 17.66 1.41 1.41" }],
	["path", { "d": "M2 12h2" }],
	["path", { "d": "M20 12h2" }],
	["path", { "d": "m6.34 17.66-1.41 1.41" }],
	["path", { "d": "m19.07 4.93-1.41 1.41" }]
]);
//#endregion
//#region src/components/ThemeToggle.astro
createAstro("https://heal-net-self.vercel.app/");
var $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ThemeToggle;
	const { id = "theme-toggle", class: className = "btn btn-ghost btn-circle" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<button${addAttribute(id, "id")}${addAttribute(className, "class")} aria-label="Toggle Theme" type="button"><!-- Sun icon shows when dark mode is ON (to switch back to light) -->${renderComponent($$result, "Sun", Sun, { "class": "w-5 h-5 hidden dark:block" })}<!-- Moon icon shows when dark mode is OFF (to switch to dark) -->${renderComponent($$result, "Moon", Moon, { "class": "w-5 h-5 block dark:hidden" })}</button>${renderScript($$result, "D:/astro/GiftCorp/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/astro/GiftCorp/src/components/ThemeToggle.astro", void 0);
//#endregion
export { $$BaseHead as i, Menu as n, createLucideIcon_default as r, $$ThemeToggle as t };
