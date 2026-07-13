import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { E as createComponent, T as createAstro, a as renderComponent, f as renderTemplate, g as maybeRenderHead } from "./server_CR6e1SMo.mjs";
import "./_astro_assets_CYMCoJCi.mjs";
import { t as $$MainLayout } from "./MainLayout_DA7o5NXz.mjs";
import { t as db_default } from "./db_yf0CV2fq.mjs";
//#region src/pages/contact.astro
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contact,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://heal-net-self.vercel.app/");
var $$Contact = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Contact;
	let error = "";
	let success = "";
	if (Astro.request.method === "POST") try {
		const data = await Astro.request.formData();
		const name = data.get("name");
		const email = data.get("email");
		const subject = data.get("subject");
		const message = data.get("message");
		if (!name || !email || !message) error = "Nama, Email, dan Pesan wajib diisi.";
		else {
			const { error: insertError } = await db_default.from("messages").insert([{
				name,
				email,
				subject,
				message
			}]);
			if (insertError) throw insertError;
			success = "Pesan Anda berhasil dikirim! Tim kami akan segera menghubungi Anda.";
		}
	} catch (err) {
		error = "Terjadi kesalahan saat mengirim pesan: " + err.message;
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, {
		"title": "Hubungi Kami - Corporate",
		"description": "Hubungi kami untuk penawaran dan pertanyaan lebih lanjut"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="min-h-screen bg-base-100 pb-24"><!-- Header Section --><section class="relative py-12 lg:py-20 bg-base-200/30 overflow-hidden"><div class="container mx-auto px-4 relative z-10 text-center"><h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-base-content"><span class="bg-linear-to-r from-[#0179B4] to-[#88D8FF] bg-clip-text text-transparent">Hubungi Kami</span></h1><p class="text-lg md:text-xl max-w-3xl mx-auto text-base-content/70 font-medium">Apakah Anda memiliki pertanyaan atau ingin meminta penawaran? Kirimkan pesan kepada kami!</p></div></section><!-- Form Section --><div class="container mx-auto px-4 max-w-5xl -mt-16 relative z-20">${error && renderTemplate`<div class="alert alert-error mb-8 text-white shadow-xl shadow-red-500/20 rounded-2xl border-none"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>${error}</span></div>`}${success && renderTemplate`<div class="alert alert-success mb-8 text-white shadow-xl shadow-green-500/20 rounded-2xl border-none"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>${success}</span></div>`}<div class="bg-base-100 p-8 md:p-14 rounded-3xl shadow-2xl border border-base-300 relative overflow-hidden"><div class="absolute top-0 right-0 w-64 h-64 bg-main-100/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div><div class="absolute bottom-0 left-0 w-64 h-64 bg-main-200/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div><form method="POST" class="relative z-10"><div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"><div class="form-control w-full"><label class="label mb-2"><span class="label-text font-bold text-base-content text-base">Nama Lengkap <span class="text-red-500">*</span></span></label><input type="text" name="name" required class="input input-lg input-bordered w-full focus:border-main-200 focus:ring-2 focus:ring-main-200/20 bg-base-200 border-base-300 rounded-2xl transition-all" placeholder="Masukkan nama Anda..."></div><div class="form-control w-full"><label class="label mb-2"><span class="label-text font-bold text-base-content text-base">Alamat Email <span class="text-red-500">*</span></span></label><input type="email" name="email" required class="input input-lg input-bordered w-full focus:border-main-200 focus:ring-2 focus:ring-main-200/20 bg-base-200 border-base-300 rounded-2xl transition-all" placeholder="nama@email.com"></div></div><div class="form-control w-full mb-8"><label class="label mb-2"><span class="label-text font-bold text-base-content text-base">Subjek</span></label><input type="text" name="subject" class="input input-lg input-bordered w-full focus:border-main-200 focus:ring-2 focus:ring-main-200/20 bg-base-200 border-base-300 rounded-2xl transition-all" placeholder="Topik pembicaraan..."></div><div class="form-control w-full mb-10"><label class="label mb-2"><span class="label-text font-bold text-base-content text-base">Pesan Anda <span class="text-red-500">*</span></span></label><textarea name="message" required class="textarea textarea-bordered h-48 focus:border-main-200 focus:ring-2 focus:ring-main-200/20 bg-base-200 border-base-300 rounded-2xl transition-all text-base p-6" placeholder="Tulis pesan atau pertanyaan Anda di sini..."></textarea></div><div class="text-center md:text-right"><button type="submit" class="btn bg-[linear-gradient(125deg,var(--color-main-100),var(--color-main-200))] text-white border-0 rounded-xl text-lg py-3 px-8 h-auto shadow-xl hover:shadow-2xl transition-all">Kirim Pesan Sekarang<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 inline-block" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg></button></div></form></div></div></div>` })}`;
}, "D:/astro/GiftCorp/src/pages/contact.astro", void 0);
var $$file = "D:/astro/GiftCorp/src/pages/contact.astro";
var $$url = "/contact";
//#endregion
//#region \0virtual:astro:page:src/pages/contact@_@astro
var page = () => contact_exports;
//#endregion
export { page };
