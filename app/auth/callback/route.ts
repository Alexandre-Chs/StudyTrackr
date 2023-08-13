import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "../../../prisma/prisma";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next");

  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    const dataFromProvider = await supabase.auth.exchangeCodeForSession(code);

    const ifUserExists = await prisma.user.findUnique({
      where: {
        email: dataFromProvider.data.user.email,
      },
    });

    if (ifUserExists === null) {
      const createUserFromProviderInDB = await prisma.user.create({
        data: {
          email: dataFromProvider.data.user.email,
          // empty username because i take username in WelcomeName with session provider
          username: "",
        },
      });
    }
  }

  if (next) {
    return NextResponse.redirect(`${requestUrl.origin}${next}`);
  }
  // URL to redirect to after sign in process completes
  return NextResponse.redirect(`${requestUrl.origin}/application`);
}
