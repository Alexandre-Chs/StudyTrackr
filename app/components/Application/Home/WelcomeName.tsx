import React from "react";
import { month } from "../../../components/utils/months.js";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const WelcomeName = async () => {
  const currentDate = new Date();

  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const username = await prisma.user.findUnique({
    where: {
      email: user?.email,
    },
  });

  return (
    <div className="text-white">
      <h3 className="text-4xl font-medium">Hello {username?.username} !</h3>
      <p className="text-base text-textViolet">
        {currentDate.getDate()} {month[currentDate.getMonth()]}{" "}
        {currentDate.getFullYear()}
      </p>
    </div>
  );
};

export default WelcomeName;
