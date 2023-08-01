import React from "react";
import { Home } from "lucide-react";
import Link from "next/link";

const HomeNav = () => {
  return (
    <div className="font-medium cursor-pointer">
      <Link href="/application" className="flex">
        <Home className="mr-2" />
        <p>Home</p>
      </Link>
    </div>
  );
};

export default HomeNav;
