import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import ScrollLink from "@/components/tools/ScrollLink";

const Header = () => {
  return (
    <header
      id="home"
      className="relative z-50 max-w-xs mx-auto transition pt-28 sm:max-w-xl md:pt-48 text-secondary_color md:max-w-3xl xl:max-w-6xl"
    >
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-center md:text-5xl">
          Optimize Your Study Sessions with Study Trackr - Excel in Your
          Studies!
        </h1>
        <p className="max-w-4xl mx-auto mt-6 text-base font-medium leading-normal tracking-tight text-center text-gray-200 md:text-2xl">
          Optimize your studies with Study Trackr! Plan, track, and succeed in
          exams confidently. Join thousands of satisfied students!
        </p>
      </div>
      <div className="z-50 flex flex-col items-center justify-center mt-8 md:flex-row">
        <Button
          variant="outline"
          className="w-[80%] md:w-auto mx-auto md:mx-2 flex justify-center items-center px-8 py-4"
        >
          Let&apos;s go !
          <ArrowRight size={20} />
        </Button>
        <Button
          variant="outline"
          className="w-[80%] md:w-auto mx-auto md:mx-2 mt-4 md:mt-0 flex justify-center items-center px-8 py-"
        >
          <ScrollLink href="#features">Features</ScrollLink>
          <ArrowDown size={20} className="ml-2" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
