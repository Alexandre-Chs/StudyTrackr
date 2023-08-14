"use client";

import React, { Suspense, useEffect, useState } from "react";
import NameOption from "../../../components/Application/common/NameOption";
import Task from "../../../components/Application/common/Task";
import FilterTasks from "../../../components/tools/FilterTasks";
import { Button } from "../../../components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type TaskProps = {
  id: string;
  user_id: string;
  priority: number;
  status: "inProgress" | "todo" | "finished";
  title: string;
  description: string;
  schoolSubject: string;
  dateToDo: Date;
};

const AllTasks = () => {
  const [tasks, setTasks] = useState<any>();
  const [filter, setFilter] = useState<string>();
  const [currentDate, setCurrentDate] = useState<Date>();
  const [counterDate, setCounterDate] = useState<number>(0);

  useEffect(() => {
    const currentDate = new Date();
    // modifier la date en fonction du +1
    currentDate.setDate(currentDate.getDate() + counterDate);
    setCurrentDate(currentDate);

    const getAllTasks = async () => {
      const response = await fetch(`/api/get-tasks?date=${currentDate}`);
      const data = await response.json();
      setTasks(data.task);
    };
    getAllTasks();
  }, [counterDate]);

  const handleTasks = () => {
    if (tasks !== undefined && tasks.length > 0 && tasks !== null) {
      const filteredTasks = FilterTasks(tasks, filter);

      return filteredTasks.map((task: TaskProps) => (
        <Task
          key={task.id}
          priority={task.priority}
          status={task.status}
          title={task.title}
          schoolSubject={task.schoolSubject}
          description={task.description}
        />
      ));
    }
  };

  const handleDate = (e) => {
    if (e.currentTarget.value === "+") {
      setCounterDate((current) => current + 1);
    } else {
      setCounterDate((current) => current - 1);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <NameOption option={"All tasks"} currentDate={currentDate} />
        <div className="text-textViolet">
          <button
            onClick={handleDate}
            value="-"
            className="p-4 md:p-2 rounded-xl hover:bg-lightViolet"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleDate}
            value="+"
            className="p-4 md:p-2 rounded-xl hover:bg-lightViolet"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="mt-12">
        <div className="text-white">{handleTasks()}</div>
      </div>
    </div>
  );
};

export default AllTasks;
