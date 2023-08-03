"use client";
import { Github, Twitter } from "lucide-react";
import React, { useEffect } from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../ui/navigation-menu";
import ScrollLink from "../../tools/ScrollLink";
import { navigationMenuTriggerStyle } from "../../ui/navigation-menu";

const Navbar = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      const scrollHeight = document.body.scrollHeight;
      const halfScrollHeight = scrollHeight / 2;

      let navbar = document.getElementById("navbar");
      let navbarChildren = document.getElementById("navbar-children");
      if (window.scrollY > 50) {
        navbar?.classList.add("glassy");
        navbar?.classList.remove("remove-glassy");
      } else {
        let navbar = document.getElementById("navbar");
        navbar?.classList.remove("glassy");
        navbar?.classList.add("remove-glassy");
      }

      if (scrollPosition + 350 > halfScrollHeight) {
        navbar?.classList.remove("text-textViolet");
        navbarChildren?.classList.remove("text-textViolet");
        navbar?.classList.add("text-black");
        navbarChildren?.classList.add("text-black");
      } else {
        navbar?.classList.add("text-textViolet");
        navbarChildren?.classList.add("text-textViolet");
        navbar?.classList.remove("text-black");
        navbarChildren?.classList.remove("text-black");
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div
      id="navbar"
      className="fixed z-[1000] flex items-center justify-between w-screen py-2 top-0 px-36 text-textViolet"
    >
      <div className="text-xl font-medium">Study Trackr</div>
      <NavigationMenu className="text-textViolet" id="navbar-children">
        <NavigationMenuList className="border border-gray-200/[.09] rounded-xl overflow-hidden">
          <NavigationMenuItem>
            <div className={navigationMenuTriggerStyle()}>
              <ScrollLink href="#home">Home</ScrollLink>
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <div className={navigationMenuTriggerStyle()}>
              <ScrollLink href="#features">Features</ScrollLink>
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <div className={navigationMenuTriggerStyle()}>
              <ScrollLink href="#questions">Questions</ScrollLink>
            </div>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex">
        <Link href="https://github.com/Alexandre-Chs" passHref>
          <Github className="mr-2 cursor-pointer" size={20} />
        </Link>
        <Link href="https://twitter.com/AlexandreChsDev">
          <Twitter size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
