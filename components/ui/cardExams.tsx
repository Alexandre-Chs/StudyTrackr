import React from "react";
import { PropsWithChildren } from "react";
import clsx from "clsx";

type CardExamsProps = {
  type?: "Important";
  subjects: string;
};

const CardExams = ({
  children,
  type,
  subjects,
}: PropsWithChildren & CardExamsProps) => {
  const textColorFromType = clsx({
    "text-red-600 font-bold": type === "Important",
  });
  return (
    <div className="flex w-full px-8 py-4 text-base rounded-lg bg-lightViolet text-textViolet">
      <h5 className={`${textColorFromType} font-semibold uppercase mr-2`}>
        {type}
      </h5>
      <p className="font-semibold">{subjects}</p>
      <span className="mx-2">|</span>
      <p>{children}</p>
    </div>
  );
};

export default CardExams;
