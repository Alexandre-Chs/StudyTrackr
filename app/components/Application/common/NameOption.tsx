import { CalendarDays } from "lucide-react";
import React from "react";
import { format } from "date-fns";

const NameOption = ({
  option,
  currentDate,
}: {
  option: String;
  currentDate: Date;
}) => {
  let currentDateFormated = "";
  if (currentDate) {
    currentDateFormated = format(currentDate, "dd/MM/yyyy");
  }

  return (
    <div className="flex flex-col text-4xl font-medium text-textViolet">
      <div>{option}</div>
      <div className="flex items-center pt-2">
        <div>
          <CalendarDays color={"#ccc3e7"} size={22} />
        </div>
        <div className="pl-2 text-sm">{currentDateFormated}</div>
      </div>
    </div>
  );
};

export default NameOption;
