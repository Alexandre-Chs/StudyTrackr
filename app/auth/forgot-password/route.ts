import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));

  const supabase = createRouteHandlerClient({ cookies });

  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:3000/auth/callback?next=/auth/updatePassword",
  });

  return NextResponse.redirect(`${requestUrl.origin}/auth/login`, {
    status: 301,
  });
}
