import React from "react";
import { month } from "../../../components/utils/months.js";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { prisma } from "prisma/prisma.js";

const WelcomeName = async () => {
  const currentDate = new Date();
  const supabase = createServerComponentClient({ cookies });

  let username;
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.user_metadata.user_name) {
    username = user?.user_metadata.user_name;
  } else {
    try {
      await prisma.user
        .findUnique({
          where: {
            email: user?.email,
          },
        })
        .then((res) => {
          username = res?.username;
        });
    } catch (error) {
      username = "";
    }
  }

  return (
    <div className="text-white">
      <h3 className="text-4xl font-medium">Hello {username} !</h3>
      <p className="text-base text-textViolet">
        {currentDate.getDate()} {month[currentDate.getMonth()]}{" "}
        {currentDate.getFullYear()}
      </p>
    </div>
  );
};

export default WelcomeName;
