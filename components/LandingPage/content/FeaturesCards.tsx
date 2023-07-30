import React from "react";
import { PropsWithChildren } from "react";

type FeaturesCardsProps = {
  title: string;
  description: string;
};

const FeaturesCards = ({
  children,
  title,
  description,
}: PropsWithChildren<FeaturesCardsProps>) => {
  return (
    <div className="px-8 bg-white border rounded-lg xl:w-full xl:h-full border-black/20 py-9">
      <div className="">
        <div>{children}</div>
        <h3 className="py-2 text-2xl font-bold md:text-3xl text-third_color">
          {title}
        </h3>
        <div>
          {description.split("\n").map((line, index) => (
            <p
              key={index}
              className="mb-2 text-sm md:text-base text-paragrapheColor"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesCards;
