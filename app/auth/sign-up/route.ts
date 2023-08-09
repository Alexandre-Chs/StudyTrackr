import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "../../../prisma/prismaClient";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const username = String(formData.get("username"));
  const confirmPassword = String(formData.get("confirmPassword"));
  const supabase = createRouteHandlerClient({ cookies });

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${requestUrl.origin}/auth/callback`,
    },
  });

  try {
    if (!error) {
      const user = await prisma.user.create({
        data: {
          email: email,
          username: username,
        },
      });
    }
  } catch (err) {
    return NextResponse.redirect(
      `${requestUrl.origin}/auth/register?error=Email already exists.`,
      {
        status: 301,
      }
    );
  }

  if (password !== confirmPassword) {
    return NextResponse.redirect(
      `${requestUrl.origin}/auth/register?error=Password must be identical`,
      {
        status: 301,
      }
    );
  }

  if (password.length < 8) {
    return NextResponse.redirect(
      `${requestUrl.origin}/auth/register?error=Password must be at least 8 characters long`,
      {
        status: 301,
      }
    );
  }

  if (error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/auth/register?error=Rate limit exceeded.`,
      {
        status: 301,
      }
    );
  }

  return NextResponse.redirect(`${requestUrl.origin}/auth/verifyEmail`, {
    status: 301,
  });
}
