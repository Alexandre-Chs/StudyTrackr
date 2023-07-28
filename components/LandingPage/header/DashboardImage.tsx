import React from "react";
import Image from "next/image";
import dashboard from "@/app/assets/LandingPage/dashboard.jpg";
import LineSVG from "@/app/assets/LandingPage/line.svg";

const DashboardImage = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-full">
        <Image
          src={dashboard}
          alt="dashboard example"
          width={1200}
          height={800}
          className="z-40 mt-24 w-[90%] shadow-2xl xl:w-auto shadow-third_color"
        />

        <Image
          priority
          src={LineSVG}
          alt="svg line"
          className="absolute left-0 z-30 w-full z-1 -bottom-1/4"
        />
      </div>
    </>
  );
};

export default DashboardImage;
