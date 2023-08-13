import {
  AlertCircle,
  CheckCircle2,
  Circle,
  CircleDashed,
  SignalHigh,
  SignalLow,
  SignalMedium,
} from "lucide-react";
import React from "react";

type TaskProps = {
  priority: number;
  status: "inProgress" | "todo" | "finished";
  title: string;
  schoolSubject: string;
  description?: string;
};
const Task = ({
  priority,
  status,
  title,
  schoolSubject,
  description,
}: TaskProps) => {
  const priorityIcon = ({ priority }) => {
    if (priority === 1) {
      return <SignalLow color="#929292" className="hover:stroke-white" />;
    } else if (priority === 2) {
      return <SignalMedium color="#929292" className="hover:stroke-white" />;
    } else if (priority === 3) {
      return <SignalHigh color="#929292" className="hover:stroke-white" />;
    } else {
      return <AlertCircle color="#a30000" className="hover:stroke-red-600" />;
    }
  };

  const statusIcon = ({ status }) => {
    if (status === "inProgress") {
      return (
        <CircleDashed
          color=" #FFD700"
          strokeWidth="2.5"
          className="hover:stroke-yellow-200"
        />
      );
    } else if (status === "todo") {
      return (
        <Circle
          color="#0074D9"
          strokeWidth="2.5"
          className="hover:stroke-blue-500"
        />
      );
    } else {
      return (
        <CheckCircle2
          color="#02d102a6"
          strokeWidth="2.5"
          className="hover:stroke-green-600"
        />
      );
    }
  };

  const titleLengthCheck = ({ title }) => {
    if (title.length > 50) {
      return title.substring(0, 50) + "...";
    } else {
      return title;
    }
  };

  const descriptionLengthCheck = ({ description }) => {
    if (description) {
      if (description.length > 100) {
        return description.substring(0, 100) + "...";
      } else {
        return description;
      }
    }
    return (description = "");
  };

  return (
    <div className="h-[80px] flex justify-between items-center cw-full p-4 border-b-2 border-lightViolet text-textViolet cursor-grab">
      <div className="flex pl-2 pr-4">
        <div className="flex items-center justify-center pr-1 cursor-pointer">
          {priorityIcon({ priority })}
        </div>
        <div className="flex items-center justify-center cursor-pointer">
          {statusIcon({ status })}
        </div>
      </div>

      <div className="flex items-center justify-center mr-auto text-textViolet">
        <div className="pr-6 w-[350px] font-medium">
          {titleLengthCheck({ title })}
        </div>
        <div className="font-light">
          {descriptionLengthCheck({ description })}
        </div>
      </div>

      <div className="font-bold">{schoolSubject}</div>
    </div>
  );
};

export default Task;
