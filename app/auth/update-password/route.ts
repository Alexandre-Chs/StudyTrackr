import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const password = String(formData.get("password"));
  const supabase = createRouteHandlerClient({ cookies });

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  return NextResponse.redirect(`${requestUrl.origin}/auth/login`, {
    status: 301,
  });
}
