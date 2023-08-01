import React from "react";
import { PropsWithChildren } from "react";
import clsx from "clsx";

type CardTaskProps = {
  type: "Review" | "Learn" | "Practice";
};

const CardTask = ({ children, type }: PropsWithChildren & CardTaskProps) => {
  const textColorFromType = clsx({
    "text-yellow-600": type === "Review",
    "text-teal-600": type === "Learn",
    "text-pink-600": type === "Practice",
  });
  return (
    <div className="flex w-full px-8 py-4 text-base rounded-lg bg-lightViolet text-textViolet">
      <h5 className={`${textColorFromType} font-medium`}>{type}</h5>
      <span className="mx-2">|</span>
      <p>{children}</p>
    </div>
  );
};

export default CardTask;
