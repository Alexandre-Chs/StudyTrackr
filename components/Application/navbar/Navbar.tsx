import React from "react";
import CalendarNav from "./component_navbar/CalendarNav";
import HomeNav from "./component_navbar/HomeNav";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Logout from "./component_navbar/Logout";

const Navbar = () => {
  return (
    <div className="w-[250px] h-screen backgroundNavbar border-r-2 border-lightViolet text-white rounded-r-lg p-4 flex justify-between flex-col">
      <div className="[&>*]:py-4">
        <div className="mb-6 font-semibold border-b-2 text-textViolet border-lightViolet">
          <h1 className="text-xl text-center xl:text-3xl">Study Trackr</h1>
        </div>
        <HomeNav />
        <CalendarNav />
      </div>
      <div className="w-full">
        <Logout />
      </div>
    </div>
  );
};

export default Navbar;
