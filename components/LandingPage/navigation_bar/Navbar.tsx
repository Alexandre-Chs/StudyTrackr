"use client";
import { Github, Twitter } from "lucide-react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        let navbar = document.getElementById("navbar");
        navbar?.classList.add("glassy");
        navbar?.classList.remove("remove-glassy");
      } else {
        let navbar = document.getElementById("navbar");
        navbar?.classList.remove("glassy");
        navbar?.classList.add("remove-glassy");
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div
      id="navbar"
      className="fixed z-50 flex items-center justify-between w-full max-w-md px-4 py-2 md:max-w-3xl xl:max-w-6xl top-4 text-secondary_color"
    >
      <div>Study Trackr</div>
      <NavigationMenu className="text-secondary_color">
        <NavigationMenuList className="border border-gray-200/[.09] rounded-xl overflow-hidden">
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home 1
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home 2
              </NavigationMenuLink>
            </Link>
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