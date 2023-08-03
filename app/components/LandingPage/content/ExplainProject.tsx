import React from "react";
import FeaturesCards from "./FeaturesCards";
import { Target } from "lucide-react";

const ExplainProject = () => {
  return (
    <>
      <div
        id="features"
        className="relative flex flex-col items-center justify-center w-full max-w-xs pt-44 md:max-w-3xl xl:max-w-6xl sm:max-w-lg xs:max-w-md z-[100] mx-auto"
      >
        <h2 className="text-4xl font-bold text-center md:text-5xl text-third_color">
          Boost Your Study Game with Study Trackr
        </h2>
        <p className="mt-4 text-base md:text-xl text-paragrapheColor">
          Plan, Track, Succeed - All in One Place!
        </p>

        <div className="grid w-full h-auto grid-cols-1 gap-6 mt-8 xl:grid-cols-4 xl:grid-rows-2">
          <div className="xl:row-span-2">
            <FeaturesCards
              title="Flashcard"
              description={`Lorem blabla blabla bip boup je sais plus quoi dire.\nCeci est une nouvelle ligne.\nEt encore une autre ligne.\nLorem blabla blabla bip boup je sais plus quoi dire.\nCeci est une nouvelle ligne.\nEt encore une autre ligne.`}
            >
              <Target size={40} />
            </FeaturesCards>
          </div>
          <div className="row-start-2 xl:row-start-auto">
            <FeaturesCards
              title="Planning"
              description="Lorem blabla blabla bip boup je sais plus quoi dire."
            >
              <Target size={40} />
            </FeaturesCards>
          </div>
          <div className="row-start-3 xl:col-start-2 xl:row-start-2">
            <FeaturesCards
              title="Organisation"
              description="Lorem blabla blabla bip boup je sais plus quoi dire."
            >
              <Target size={40} />
            </FeaturesCards>
          </div>
          <div className="row-start-4 xl:col-span-2 xl:col-start-3 xl:row-start-2">
            <FeaturesCards
              title="Jesaispas"
              description="Lorem blabla blabla bip boup je sais plus quoi dire."
            >
              <Target size={40} />
            </FeaturesCards>
          </div>
          <div className="row-start-5 xl:col-span-2 xl:col-start-3 xl:row-start-1">
            <FeaturesCards
              title="Jesaispas"
              description="Lorem blabla blabla bip boup je sais plus quoi dire."
            >
              <Target size={40} />
            </FeaturesCards>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplainProject;
