import { NextResponse } from "next/server";
import { prisma } from "../../../prisma/prisma";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export async function POST(request: Request) {
  const formData = await request.formData();
  const title = String(formData.get("title"));
  const description = String(formData.get("description"));
  const priority = Number(formData.get("priority"));
  const status = String(formData.get("status"));
  const schoolSubject = String(formData.get("schoolSubject"));
  const date = <string>formData.get("date");
  const formattedDate = new Date(date).toISOString();
  const requestUrl = new URL(request.url);

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

  if (userId.id) {
    const createTask = await prisma.task.create({
      data: {
        priority,
        status,
        title,
        description,
        schoolSubject,
        dateToDo: formattedDate,
        user_id: userId.id,
      },
    });
  }

  return NextResponse.redirect(
    `${requestUrl.origin}/application/schedule/addTask`
  );
}
