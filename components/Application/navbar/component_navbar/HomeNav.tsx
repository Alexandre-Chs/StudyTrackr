import React from "react";
import { Home } from "lucide-react";
import Link from "next/link";

const HomeNav = () => {
  return (
    <div className="px-2 font-medium rounded-lg cursor-pointer hover:bg-lightViolet">
      <Link href="/application" className="flex text-textViolet ">
        <Home className="mr-2" />
        <p>Home</p>
      </Link>
    </div>
  );
};

export default HomeNav;
