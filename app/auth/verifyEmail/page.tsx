"use client";

import { Button } from "../../components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const VerifyEmail = () => {
  const router = useRouter();

  const handleUnderstand = () => {
    router.push("/auth/login");
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-left backgroundColor text-textViolet">
      <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
        Verify Email
      </h1>
      <p className="text-center font-base md:font-xl">
        You must verify your email to log in!
        <br />
      </p>
      <Button
        onClick={handleUnderstand}
        className="mt-6 text-base font-bold bg-white md:text-lg text-main_color hover:bg-slate-200"
      >
        I understand !
      </Button>
      <p className="max-w-xs mt-6 text-sm font-thin text-center md:max-w-lg">
        Emails can sometimes land in the spam folder, so don&apos;t forget to
        check there!
        <br />
        If you don&apos;t receive the email within a few minutes, please check
        your spam folder.
      </p>
    </div>
  );
};

export default VerifyEmail;
