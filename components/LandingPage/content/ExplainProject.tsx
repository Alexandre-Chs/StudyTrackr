import React from "react";
import FeaturesCards from "./FeaturesCards";

const ExplainProject = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-full max-w-xs pt-44 md:max-w-3xl xl:max-w-6xl sm:max-w-xl z-[100] mx-auto">
        <h2 className="text-5xl font-bold text-center text-third_color">
          Boost Your Study Game with Study Trackr
        </h2>
        <p className="mt-4">Plan, Track, Succeed - All in One Place!</p>
      </div>
      {/* ALL FEATURE CARDS HERE */}
      <div className="">
        <FeaturesCards />
      </div>
    </>
  );
};

export default ExplainProject;
