import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import dashboard from "@/app/assets/LandingPage/dashboard.jpg";

const Header = () => {
  return (
    <header className="pt-28 md:pt-48 text-secondary_color max-w-md md:max-w-3xl xl:max-w-6xl mx-auto z-50">
      <div>
        <h1 className="font-extrabold text-4xl md:text-5xl text-center tracking-tight">
          Optimize Your Study Sessions with Study Trackr - Excel in Your
          Studies!
        </h1>
        <p className="mt-6 leading-normal text-2xl max-w-4xl mx-auto text-center font-medium text-gray-200 tracking-tight">
          Optimize your studies with Study Trackr! Plan, track, and succeed in
          exams confidently. Join thousands of satisfied students!
        </p>
      </div>
      <div className="flex items-center justify-center mt-8 flex-col md:flex-row">
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
          Features
          <ArrowDown size={20} className="ml-2" />
        </Button>
      </div>
      <div className="mt-24 flex items-center justify-center">
        <Image
          src={dashboard}
          alt="dashboard example"
          width={1200}
          height={800}
          className="w-[90%] mx-auto sm:w-auto sm:mx-0 ml-6 mr-6 sm:p-0 shadow-2xl shadow-third_color"
        />
      </div>
    </header>
  );
};

export default Header;
