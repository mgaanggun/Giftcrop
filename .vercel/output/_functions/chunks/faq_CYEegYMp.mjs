import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { E as createComponent, a as renderComponent, f as renderTemplate, g as maybeRenderHead } from "./server_CR6e1SMo.mjs";
import "./_astro_assets_CYMCoJCi.mjs";
import { t as $$MainLayout } from "./MainLayout_C1Mbp3iP.mjs";
//#region src/pages/faq.astro
var faq_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Faq,
	file: () => $$file,
	url: () => $$url
});
var $$Faq = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, {
		"title": "FAQ & Bantuan",
		"description": "Pertanyaan yang sering diajukan."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="min-h-[60vh] text-base-content bg-base-100 py-16"><div class="container mx-auto px-4 max-w-4xl text-center"><h1 class="text-4xl md:text-5xl font-extrabold mb-6">FAQ & <span class="text-main-200">Bantuan</span></h1><p class="text-lg md:text-xl text-base-content/80 mb-12">Berikut adalah pertanyaan yang sering diajukan oleh pelanggan kami.</p></div><div class="container mx-auto px-4 max-w-3xl"><div class="space-y-4"><div class="collapse collapse-plus bg-base-200/50 rounded-xl border border-base-300"><input type="radio" name="my-accordion-3" checked="checked"><div class="collapse-title text-xl font-bold">Bagaimana cara memesan souvenir?</div><div class="collapse-content text-base-content/80 text-lg"><p>Anda dapat menghubungi kami melalui halaman kontak atau mengklik tombol "Hubungi Kami" untuk langsung terhubung dengan tim penjualan kami. Kami akan memandu Anda dalam memilih dan menyesuaikan produk sesuai kebutuhan.</p></div></div><div class="collapse collapse-plus bg-base-200/50 rounded-xl border border-base-300"><input type="radio" name="my-accordion-3"><div class="collapse-title text-xl font-bold">Berapa lama waktu pengerjaan pesanan?</div><div class="collapse-content text-base-content/80 text-lg"><p>Waktu pengerjaan bervariasi tergantung pada jenis produk, jumlah pesanan, dan tingkat kesulitan customisasi (seperti logo/branding). Rata-rata memakan waktu 7 hingga 14 hari kerja setelah desain disetujui.</p></div></div><div class="collapse collapse-plus bg-base-200/50 rounded-xl border border-base-300"><input type="radio" name="my-accordion-3"><div class="collapse-title text-xl font-bold">Apakah ada minimum pemesanan (MOQ)?</div><div class="collapse-content text-base-content/80 text-lg"><p>Ya, sebagian besar produk souvenir memiliki batas minimum pemesanan yang bervariasi mulai dari 50 hingga 100 pcs. Namun, untuk paket hadiah premium tertentu, kami dapat memproses pesanan dalam jumlah yang lebih sedikit. Silakan hubungi kami untuk rincian lebih lanjut.</p></div></div></div></div></div>` })}`;
}, "D:/astro/GiftCorp/src/pages/faq.astro", void 0);
var $$file = "D:/astro/GiftCorp/src/pages/faq.astro";
var $$url = "/faq";
//#endregion
//#region \0virtual:astro:page:src/pages/faq@_@astro
var page = () => faq_exports;
//#endregion
export { page };
