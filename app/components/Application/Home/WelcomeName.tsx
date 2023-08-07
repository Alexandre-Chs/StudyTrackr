import React from "react";
import { month } from "../../../components/utils/months.js";

const WelcomeName = async () => {
  const currentDate = new Date();
  // const session = await getServerSession();

  return (
    <div className="text-white">
      {/* Setup name on database login after */}
      {/* <h3 className="text-4xl font-medium">Hello {session?.user?.name} !</h3> */}
      <p className="text-base text-textViolet">
        {currentDate.getDate()} {month[currentDate.getMonth()]}{" "}
        {currentDate.getFullYear()}
      </p>
    </div>
  );
};

export default WelcomeName;
