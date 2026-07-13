import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { E as createComponent, a as renderComponent, f as renderTemplate, g as maybeRenderHead, n as renderScript } from "./server_CR6e1SMo.mjs";
import { r as $$Image } from "./_astro_assets_CYMCoJCi.mjs";
import { r as createLucideIcon_default } from "./ThemeToggle_C3flKdaJ.mjs";
import { n as SITE_TITLE, t as SITE_DESCRIPTION } from "./consts_C_10tp3D.mjs";
import { t as $$MainLayout } from "./MainLayout_C1Mbp3iP.mjs";
import { t as ChevronRight } from "./chevron-right_D291I57y.mjs";
import { t as Mail } from "./mail_Dl9UO5Yq.mjs";
import { n as $$Team, r as Phone, t as $$Story } from "./Story_BLJigILp.mjs";
import { n as $$HowWorks, t as $$Testimonials } from "./Testimonials_BmHZSD-b.mjs";
//#region node_modules/@lucide/astro/src/icons/circle-check.ts
/**
* @component @name CircleCheck
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJtOSAxMiAyIDIgNC00IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/circle-check
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var CircleCheck = createLucideIcon_default("circle-check", [["circle", {
	"cx": "12",
	"cy": "12",
	"r": "10"
}], ["path", { "d": "m9 12 2 2 4-4" }]]);
//#endregion
//#region node_modules/@lucide/astro/src/icons/circle-chevron-right.ts
/**
* @component @name CircleChevronRight
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJtMTAgOCA0IDQtNCA0IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/circle-chevron-right
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var CircleChevronRight = createLucideIcon_default("circle-chevron-right", [["circle", {
	"cx": "12",
	"cy": "12",
	"r": "10"
}], ["path", { "d": "m10 8 4 4-4 4" }]]);
//#endregion
//#region node_modules/@lucide/astro/src/icons/package.ts
/**
* @component @name Package
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEgMjEuNzNhMiAyIDAgMCAwIDIgMGw3LTRBMiAyIDAgMCAwIDIxIDE2VjhhMiAyIDAgMCAwLTEtMS43M2wtNy00YTIgMiAwIDAgMC0yIDBsLTcgNEEyIDIgMCAwIDAgMyA4djhhMiAyIDAgMCAwIDEgMS43M3oiIC8+CiAgPHBhdGggZD0iTTEyIDIyVjEyIiAvPgogIDxwb2x5bGluZSBwb2ludHM9IjMuMjkgNyAxMiAxMiAyMC43MSA3IiAvPgogIDxwYXRoIGQ9Im03LjUgNC4yNyA5IDUuMTUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/package
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var Package = createLucideIcon_default("package", [
	["path", { "d": "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" }],
	["path", { "d": "M12 22V12" }],
	["polyline", { "points": "3.29 7 12 12 20.71 7" }],
	["path", { "d": "m7.5 4.27 9 5.15" }]
]);
//#endregion
//#region node_modules/@lucide/astro/src/icons/user-round.ts
/**
* @component @name UserRound
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjgiIHI9IjUiIC8+CiAgPHBhdGggZD0iTTIwIDIxYTggOCAwIDAgMC0xNiAwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/user-round
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var UserRound = createLucideIcon_default("user-round", [["circle", {
	"cx": "12",
	"cy": "8",
	"r": "5"
}], ["path", { "d": "M20 21a8 8 0 0 0-16 0" }]]);
//#endregion
//#region src/components/homepage/Hero.astro
var $$Hero = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="section section-hero pt-4 pb-12 sm:pt-6 sm:pb-20 my-0! overflow-hidden"><div class="container"><div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"><div class="w-full lg:w-7/12 text-center sm:text-left"><h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold"><span class="bg-linear-to-r from-[#0179B4] to-[#88D8FF] bg-clip-text text-transparent">Mitra terpercaya</span> untuk souvenir & hadiah korporat premium Anda.</h1><p class="mt-8 mb-10 text-lg"><span class="text-main-200">Tingkatkan Citra Brand di Setiap Hadiah.</span> Temukan koleksi souvenir kantor dan hadiah korporat premium kami yang dirancang untuk memberikan kesan tak terlupakan. Mulai dari<span class="text-main-200">custom branding</span> hingga kemasan elegan, kami membantu Anda membangun hubungan bermakna dengan klien dan karyawan.</p><a href="#quote" class="btn bg-[linear-gradient(125deg,var(--color-main-100),var(--color-main-200))] text-white border-0 rounded-xl text-lg py-3 px-8 h-auto shadow-xl hover:shadow-2xl transition-all">Minta Penawaran ${renderComponent($$result, "ChevronRight", ChevronRight, {})}</a><p class="text-sm text-gray-400 mt-12 mb-6">Dipercaya oleh perusahaan terkemuka:</p>${renderComponent($$result, "Image", $$Image, {
		"src": "/img/brands.webp",
		"alt": "Brand Partners",
		"format": "webp",
		"quality": "low",
		"fetchpriority": "high",
		"width": 380,
		"height": 43,
		"densities": [1.5, 2],
		"loading": "eager",
		"class": "w-auto h-auto mx-auto sm:mx-0 opacity-70 hover:opacity-100 transition-opacity"
	})}</div><div class="w-full lg:w-5/12 relative mt-8 lg:mt-0"><div class="relative w-full max-w-[550px] mx-auto">${renderComponent($$result, "Image", $$Image, {
		"src": "/img/hero.png",
		"alt": "Koleksi Souvenir Korporat Premium",
		"fetchpriority": "high",
		"loading": "eager",
		"width": "600",
		"height": "600",
		"class": "w-full h-auto object-contain"
	})}<!-- Floating Badge 1 (Klien Puas) --><div class="absolute -right-2 sm:-right-6 top-10 border-main-200 border rounded-lg p-2.5 bg-white/90 backdrop-blur shadow-lg max-w-[140px] sm:max-w-[160px]"><div class="flex flex-wrap gap-1.5 items-center mb-1">${renderComponent($$result, "Image", $$Image, {
		"src": "/img/avatars.webp",
		"alt": "Klien Puas",
		"format": "webp",
		"quality": "low",
		"fetchpriority": "high",
		"width": "60",
		"height": "20",
		"class": "w-auto h-auto"
	})}<p class="text-base font-bold text-black leading-none">2400<span class="text-main-200">+</span></p></div><p class="text-main-200 text-xs font-semibold mb-0.5">Klien Puas</p><div class="flex items-center gap-1">${renderComponent($$result, "Image", $$Image, {
		"src": "/img/stars.svg",
		"alt": "Rating Bintang",
		"width": "50",
		"height": "8",
		"class": "w-auto h-auto"
	})}<span class="text-gray-500 text-[9px]">(4.9)</span></div></div><!-- Floating Badge 2 (Fitur) --><div class="absolute -left-2 sm:-left-8 bottom-1/3 bg-white/90 backdrop-blur p-2 pr-3 rounded-lg shadow-lg flex items-center gap-2 border border-gray-100"><div class="bg-main-100/20 p-1.5 rounded-full text-main-200"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><span class="text-main-200 font-semibold text-xs sm:text-sm">Pemesanan Cepat</span></div><!-- Floating Badge 3 (Testimoni) --><div class="absolute left-4 sm:-left-4 -bottom-2 sm:-bottom-4 border-main-200 border rounded-lg p-3 bg-white/90 backdrop-blur shadow-lg max-w-[200px] text-xs text-gray-700"><div class="absolute -top-3 left-3 w-6 h-6 bg-main-200 rounded-full flex items-center justify-center text-white font-serif text-lg leading-none pt-1">"</div><p class="pt-1 italic">"Kualitas hadiah & perhatian terhadap detail dari GiftCorp sungguh luar biasa!"</p></div></div></div></div></div></section>`;
}, "D:/astro/GiftCorp/src/components/homepage/Hero.astro", void 0);
//#endregion
//#region src/components/homepage/CtaForm.astro
var $$CtaForm = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="section my-0! py-10 relative z-0" id="quote"><div class="container relative after:absolute after:-bottom-5 after:left-0 after:bg-[url('/img/shape/shape1.svg')] after:bg-no-repeat after:w-35 after:h-17 after:bg-position-[left_bottom]] after:bg-contain after:-z-10"><div class="rounded-2xl border-2 border-main-200 p-4 lg:p-10 bg-[linear-gradient(45deg,#F8FDFF,#FFFFFF)] relative overflow-hidden"><h2 class="font-semibold text-main-200 text-2xl">Minta penawaran khusus dalam 3 langkah mudah.</h2><form id="wa-cta-form" class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 items-end"><div class="w-full"><label for="email" class="flex gap-3 items-center mb-3 text-black">${renderComponent($$result, "Mail", Mail, { "class": "text-main-200" })}Alamat Email</label><input type="email" id="cta-email" required class="input bg-white text-black border border-gray-300 w-full py-3 px-6 h-auto rounded-lg text-lg" placeholder="Masukkan alamat email Anda"></div><div class="w-full"><label for="phone" class="flex gap-3 items-center mb-3 text-black">${renderComponent($$result, "Phone", Phone, { "class": "text-main-200" })}Nomor Telepon</label><input type="tel" id="cta-phone" required class="input bg-white text-black border border-gray-300 w-full py-3 px-6 h-auto rounded-lg text-lg" placeholder="Masukkan nomor telepon Anda"></div><div class="w-full"><label for="quantity" class="flex gap-3 items-center mb-3 text-black">${renderComponent($$result, "Package", Package, { "class": "text-main-200" })} Estimasi Jumlah</label><input type="number" id="cta-quantity" required class="input bg-white text-black border border-gray-300 w-full py-3 px-6 h-auto rounded-lg text-lg" placeholder="cth. 100, 500, 1000"></div><div class="w-full"><button type="submit" class="btn bg-[linear-gradient(125deg,var(--color-main-100),var(--color-main-200))] text-white border-0 rounded-xl text-lg py-3 px-6 h-auto shadow-xl hover:shadow-2xl w-full">Kirim Permintaan ${renderComponent($$result, "CircleCheck", CircleCheck, {})}</button></div></form></div></div></section>${renderScript($$result, "D:/astro/GiftCorp/src/components/homepage/CtaForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/astro/GiftCorp/src/components/homepage/CtaForm.astro", void 0);
//#endregion
//#region src/components/homepage/Services.astro
var $$Services = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="section my-0! py-10 relative z-0 overflow-hidden"><div class="container"><hgroup class="text-center max-w-5xl mx-auto"><h2><span class="bg-linear-to-r from-[#0179B4] to-[#88D8FF] bg-clip-text text-transparent">Layanan unggulan</span> yang kami tawarkan</h2><p>Dari custom branding hingga pengiriman massal, GiftCorp menyediakan layanan souvenir korporat yang lengkap untuk membuat brand Anda tampil menonjol dan meninggalkan kesan mendalam:</p></hgroup><div class="relative grid gap-10 grid-cols-1 lg:grid-cols-3 mt-10 max-w-6xl mx-auto after:absolute after:-top-5 after:-left-10 after:bg-[url('/img/shape/shape2.svg')] after:bg-no-repeat after:w-35.5 after:h-9.25 after:bg-position-[left_top]] after:bg-contain after:z-0 
	
	before:absolute before:-bottom-5 before:-right-10 before:bg-[url('/img/shape/shape2-1.svg')] before:bg-no-repeat before:w-35.5 before:h-9.25 before:bg-position-[right_bottom]] before:bg-contain before:z-0"><article class="lg:col-span-2 border-2 border-main-200 rounded-xl p-4 lg:p-10 bg-[linear-gradient(45deg,#F8FDFF,#FFFFFF)] text-black"><svg class="icon" width="44" height="44"><use xlink:href="#i1"></use></svg><h3 class="text-main-200 mt-3">Kemasan Kustom</h3><p>Buat setiap hadiah tak terlupakan dengan solusi kemasan eksklusif kami. Dari kotak hadiah elegan hingga wrapping berlogo, kami merancang kemasan yang mencerminkan identitas perusahaan Anda dan menciptakan pengalaman unboxing yang premium bagi penerima.</p></article><article class="border-2 border-main-200 rounded-xl p-4 lg:p-10 bg-[linear-gradient(45deg,#F8FDFF,#FFFFFF)] text-black"><svg class="icon" width="44" height="44"><use xlink:href="#i2"></use></svg><h3 class="text-main-200 mt-3">Branding Perusahaan</h3><p>Tingkatkan kehadiran brand Anda dengan cetak logo kustom, laser engraving, dan emboss pada semua item hadiah. Brand Anda, tampil memukau.</p></article><article class="border-2 border-main-200 rounded-xl p-4 lg:p-10 bg-[linear-gradient(45deg,#F8FDFF,#FFFFFF)] text-black"><svg class="icon" width="44" height="44"><use xlink:href="#i3"></use></svg><h3 class="text-main-200 mt-3">Pemesanan Massal</h3><p>Butuh hadiah untuk 50 atau 5.000 orang? Sistem pemesanan massal kami memastikan kualitas konsisten dan pengiriman tepat waktu dengan harga kompetitif.</p></article><article class="border-2 border-main-200 rounded-xl p-4 lg:p-10 bg-[linear-gradient(45deg,#F8FDFF,#FFFFFF)] text-black"><svg class="icon" width="44" height="44"><use xlink:href="#i4"></use></svg><h3 class="text-main-200 mt-3">Paket Hadiah Premium</h3><p>Set hadiah terkurasi dengan item-item premium pilihan — sempurna untuk hadiah eksekutif, apresiasi klien, dan momen spesial.</p></article><article class="border-2 border-main-200 rounded-xl p-4 lg:p-10 bg-[linear-gradient(45deg,#F8FDFF,#FFFFFF)] text-black"><svg class="icon" width="44" height="44"><use xlink:href="#i5"></use></svg><h3 class="text-main-200 mt-3">Merchandise Acara</h3><p>Dari konferensi hingga outing perusahaan, kami menyediakan merchandise berlogo yang membuat acara Anda berkesan dan brand Anda tetap diingat.</p></article></div></div></section>`;
}, "D:/astro/GiftCorp/src/components/homepage/Services.astro", void 0);
//#endregion
//#region src/components/homepage/Support.astro
var $$Support = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="section"><div class="container"><hgroup class="text-center max-w-5xl mx-auto"><h2><span class="bg-linear-to-r from-[#0179B4] to-[#88D8FF] bg-clip-text text-transparent">Hubungi kami</span> sekarang</h2><p>Punya pertanyaan tentang produk kami? Butuh penawaran khusus? Tim kami siap membantu Anda menemukan souvenir korporat yang sempurna:</p></hgroup><form id="wa-support-form" class="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-100 lg:max-w-5xl mx-auto"><label class="input validator w-full h-auto! border-main-200 rounded-xl">${renderComponent($$result, "UserRound", UserRound, { "class": "text-main-200" })}<input id="wa-name" class="py-3 px-6 text-lg" type="text" required placeholder="Masukkan Nama Lengkap Anda"></label><label class="input validator w-full h-auto! border-main-200 rounded-xl">${renderComponent($$result, "Mail", Mail, { "class": "text-main-200" })}<input id="wa-email" class="py-3 px-6 text-lg" type="email" required placeholder="Masukkan Alamat Email Anda"></label><button type="submit" class="btn bg-[linear-gradient(125deg,var(--color-main-100),var(--color-main-200))] text-white border-0 rounded-xl text-lg py-3 px-6 h-auto shadow-xl hover:shadow-2xl w-full">Hubungi Kami${renderComponent($$result, "CircleChevronRight", CircleChevronRight, {})}</button></form></div></section>${renderScript($$result, "D:/astro/GiftCorp/src/components/homepage/Support.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/astro/GiftCorp/src/components/homepage/Support.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, {
		"title": SITE_TITLE,
		"description": SITE_DESCRIPTION
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Hero", $$Hero, {})}${renderComponent($$result, "CtaForm", $$CtaForm, {})}${renderComponent($$result, "Services", $$Services, {})}${renderComponent($$result, "Story", $$Story, {})}${renderComponent($$result, "HowWorks", $$HowWorks, {})}${renderComponent($$result, "Testimonials", $$Testimonials, {})}${renderComponent($$result, "Team", $$Team, {})}${renderComponent($$result, "Support", $$Support, {})}` })}`;
}, "D:/astro/GiftCorp/src/pages/index.astro", void 0);
var $$file = "D:/astro/GiftCorp/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
