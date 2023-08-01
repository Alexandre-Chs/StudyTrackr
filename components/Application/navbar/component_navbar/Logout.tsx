import React from "react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

const Logout = () => {
  return (
    <Link href="/api/auth/signout">
      <Button className="w-full font-normal bg-[#1a162f] border-lightViolet border-2 cursor-pointer text-textViolet">
        <LogOut className="mr-2" />
        Log out
      </Button>
    </Link>
  );
};

export default Logout;
