import { E as createComponent, a as renderComponent, f as renderTemplate, g as maybeRenderHead } from "./server_CR6e1SMo.mjs";
import { r as $$Image } from "./_astro_assets_CYMCoJCi.mjs";
import { r as createLucideIcon_default } from "./ThemeToggle_C3flKdaJ.mjs";
//#region node_modules/@lucide/astro/src/icons/phone.ts
/**
* @component @name Phone
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTMuODMyIDE2LjU2OGExIDEgMCAwIDAgMS4yMTMtLjMwM2wuMzU1LS40NjVBMiAyIDAgMCAxIDE3IDE1aDNhMiAyIDAgMCAxIDIgMnYzYTIgMiAwIDAgMS0yIDJBMTggMTggMCAwIDEgMiA0YTIgMiAwIDAgMSAyLTJoM2EyIDIgMCAwIDEgMiAydjNhMiAyIDAgMCAxLS44IDEuNmwtLjQ2OC4zNTFhMSAxIDAgMCAwLS4yOTIgMS4yMzMgMTQgMTQgMCAwIDAgNi4zOTIgNi4zODQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/phone
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var Phone = createLucideIcon_default("phone", [["path", { "d": "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" }]]);
//#endregion
//#region src/components/homepage/Team.astro
var $$Team = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="section overflow-hidden"><div class="container"><hgroup class="text-center max-w-5xl mx-auto"><h2><span class="bg-linear-to-r from-[#0179B4] to-[#88D8FF] bg-clip-text text-transparent">Ahli di Bidangnya:</span><br> Kenali tim kreatif kami</h2><p>Tim profesional kreatif kami berdedikasi dalam merancang souvenir korporat yang sempurna. Setiap anggota membawa keahlian desain, pengetahuan industri, dan komitmen terhadap kualitas:</p></hgroup><div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto py-10 relative z-0
	after:absolute after:top-5 after:-left-10 after:bg-[url('/img/shape/shape5.svg')] after:bg-no-repeat after:w-29 after:h-14.75 after:bg-position-[left_top]] after:bg-contain after:-z-10 
	before:absolute before:bottom-5 before:-right-10 before:bg-[url('/img/shape/shape6.svg')] before:bg-no-repeat before:w-29 before:h-14.75 before:bg-position-[right_bottom]] before:bg-contain before:z-0
	"><article class="rounded-3xl text-white bg-gradient-to-br from-[#35BDFF] to-[#008CD0] p-8 flex flex-col items-center text-center shadow-xl relative group hover:-translate-y-2 transition-all duration-300"><div class="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">${renderComponent($$result, "Image", $$Image, {
		"src": "/img/cm1.webp",
		"alt": "Mega Anggun",
		"width": 200,
		"height": 200,
		"format": "webp",
		"quality": "high",
		"class": "w-full h-full object-cover"
	})}</div><h3 class="text-2xl font-bold mb-1">Mega Anggun</h3><span class="text-main-200 font-bold mb-5 text-sm bg-white px-4 py-1.5 rounded-full shadow-sm">Direktur Kreatif</span><p class="mb-8 text-white/95 leading-relaxed text-sm md:text-base">Mega memimpin tim desain kami dengan pengalaman lebih dari 10 tahun di bidang desain produk dan branding perusahaan. Kejeliannya terhadap detail dan hasratnya menciptakan hadiah indah telah membantu ratusan perusahaan meningkatkan citra korporat mereka.</p><a href="/contact" class="btn bg-gray-900 text-white hover:bg-gray-800 border-none rounded-xl px-8 mt-auto h-auto min-h-[2.5rem] py-2 inline-flex items-center gap-2 shadow-md"><span>Hubungi</span>${renderComponent($$result, "Phone", Phone, {
		"size": 16,
		"class": "text-main-200"
	})}</a></article><article class="rounded-3xl text-white bg-gradient-to-br from-[#35BDFF] to-[#008CD0] p-8 flex flex-col items-center text-center shadow-xl relative group hover:-translate-y-2 transition-all duration-300"><div class="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">${renderComponent($$result, "Image", $$Image, {
		"src": "/img/cm2.webp",
		"alt": "Hawa Nadira",
		"width": 200,
		"height": 200,
		"format": "webp",
		"quality": "high",
		"class": "w-full h-full object-cover"
	})}</div><h3 class="text-2xl font-bold mb-1">Hawa Nadira</h3><span class="text-main-200 font-bold mb-5 text-sm bg-white px-4 py-1.5 rounded-full shadow-sm">Manajer Produksi</span><p class="mb-8 text-white/95 leading-relaxed text-sm md:text-base">Hawa mengawasi seluruh proses produksi kami, memastikan setiap pesanan memenuhi standar kualitas yang ketat. Dengan keahlian manajemen rantai pasok, ia menjamin pengiriman tepat waktu dan keunggulan produk yang konsisten.</p><a href="/contact" class="btn bg-gray-900 text-white hover:bg-gray-800 border-none rounded-xl px-8 mt-auto h-auto min-h-[2.5rem] py-2 inline-flex items-center gap-2 shadow-md"><span>Hubungi</span>${renderComponent($$result, "Phone", Phone, {
		"size": 16,
		"class": "text-main-200"
	})}</a></article></div></div></section>`;
}, "D:/astro/GiftCorp/src/components/homepage/Team.astro", void 0);
//#endregion
//#region src/components/homepage/Story.astro
var $$Story = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="section" id="about"><div class="container"><article class="bg-[linear-gradient(45deg,#F8FDFF,#FFFFFF)] text-black rounded-2xl p-4 lg:p-10 border-2 border-main-200"><h2 class="text-center"><span class="bg-linear-to-r from-[#0179B4] to-[#88D8FF] bg-clip-text text-transparent">Cerita GiftCorp:</span> Kenali kami lebih dekat</h2><div class="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 lg:gap-10 mt-4 lg:mt-10 items-stretch text-center md:text-left"><div>${renderComponent($$result, "Image", $$Image, {
		"src": "/img/img2.webp",
		"alt": "Workshop GiftCorp",
		"format": "webp",
		"quality": "low",
		"width": "448",
		"height": "344",
		"class": "w-auto h-auto mx-auto rounded-xl object-cover"
	})}</div><div class="h-full flex flex-col justify-between align-start"><p class="mb-5">GiftCorp bukan sekadar penyedia souvenir kantor — kami adalah komitmen untuk membantu perusahaan membangun hubungan yang lebih kuat melalui hadiah berkualitas tinggi dan bermakna. Didirikan oleh tim profesional kreatif dan pakar branding, kami digerakkan oleh misi untuk menghadirkan souvenir korporat yang benar-benar merepresentasikan brand Anda. Platform kami dibangun di atas pilar kualitas, kreativitas, dan kepuasan pelanggan, memastikan setiap hadiah dikurasi dengan cermat dan dikemas dengan indah. Dengan katalog 200+ produk premium dan kemitraan dengan produsen terpercaya, kami menjamin hadiah yang memukau — setiap saat.</p><a href="/services" class="btn bg-[linear-gradient(125deg,var(--color-main-100),var(--color-main-200))] text-white border-0 rounded-xl text-lg py-3 px-6 h-auto shadow-xl hover:shadow-2xl md:mr-auto">Pelajari lebih lanjut</a></div></div></article></div></section>`;
}, "D:/astro/GiftCorp/src/components/homepage/Story.astro", void 0);
//#endregion
export { $$Team as n, Phone as r, $$Story as t };
