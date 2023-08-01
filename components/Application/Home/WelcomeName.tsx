import React from "react";
import { month } from "../../../components/utils/months.js";

const WelcomeName = () => {
  const currentDate = new Date();
  return (
    <div className="text-white">
      {/* Setup name on database login after */}
      <h3 className="text-4xl">Hello Alexandre !</h3>
      <p className="text-base text-textViolet">
        {currentDate.getDate()} {month[currentDate.getMonth()]}{" "}
        {currentDate.getFullYear()}
      </p>
    </div>
  );
};

export default WelcomeName;
