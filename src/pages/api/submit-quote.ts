export const prerender = false;

import type { APIRoute } from "astro";
import db from "../../lib/db";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();

  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const quantity = formData.get("quantity")?.toString();

  if (!email || !phone || !quantity) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
    });
  }

  try {
    const { error } = await db.from("quotes").insert([
      {
        email,
        phone,
        quantity,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return redirect("/?quote=error#quote");
    }

    return redirect("/?quote=success#quote");
  } catch (error) {
    console.error("API error:", error);
    return redirect("/?quote=error#quote");
  }
};
