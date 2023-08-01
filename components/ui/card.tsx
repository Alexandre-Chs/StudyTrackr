import React from "react";
import { PropsWithChildren } from "react";

const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex w-full px-4 py-2 text-sm rounded-lg bg-lightViolet text-textViolet">
      {children}
    </div>
  );
};

export default Card;
