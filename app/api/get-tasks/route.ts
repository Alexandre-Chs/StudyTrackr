import { NextResponse } from "next/server";
import { prisma } from "../../../prisma/prisma";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const date = <Date>searchParams.get("date");
  const startOfTheDay = new Date(date).setHours(0, 0, 0, 0);
  const endOfTheDay = new Date(date).setHours(23, 59, 59, 999);

  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const userEmail = user.email;

  const userId = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
  });

  const task = await prisma.task.findMany({
    where: {
      dateToDo: {
        gte: new Date(startOfTheDay).toISOString(),
        lte: new Date(endOfTheDay).toISOString(),
      },
      user_id: userId.id,
    },
  });

  return NextResponse.json({ task });
}
