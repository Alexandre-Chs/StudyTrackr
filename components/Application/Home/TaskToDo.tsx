import CardTask from "@/components/ui/cardTask";
import Link from "next/link";
import React from "react";
import { ListChecks } from "lucide-react";
const TaskToDo = () => {
  return (
    <div className="p-4 mt-12 border-2 rounded-lg border-lightViolet">
      <h4 className="flex items-center mb-4 text-2xl text-white">
        <span className="translate-y-0.5 mr-2">
          <ListChecks color="white" />
        </span>
        Tasks to do !
      </h4>
      <div className="[&>*]:mt-3">
        <CardTask type="Review">Mathematics notes from July 16th</CardTask>
        <CardTask type="Practice">Code a Python bot</CardTask>
        <CardTask type="Learn">Mathematics notes from July 16th</CardTask>
      </div>
      <Link
        href="#"
        className="flex justify-end pt-2 font-light underline text-textViolet underline-offset-2"
      >
        See more
      </Link>
    </div>
  );
};

export default TaskToDo;
