"use client";

import IncommingExam from "@/components/Application/Home/IncommingExam";
import LittleCalendar from "@/components/Application/Home/LittleCalendar";
import Objectives from "@/components/Application/Home/Objectives";
import TaskToDo from "@/components/Application/Home/TaskToDo";
import WelcomeName from "@/components/Application/Home/WelcomeName";
import React, { useState } from "react";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Home = () => {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());

  const handleSelectedDate = (value: Value) => {
    setSelectedDate(value);
  };

  return (
    <div className="flex w-full p-10">
      <div className="w-full">
        <WelcomeName />
        <TaskToDo />
        <IncommingExam />
      </div>
      <div className="w-auto py-4 pl-8">
        <LittleCalendar onDateChange={handleSelectedDate} />
        <Objectives />
      </div>
    </div>
  );
};

export default Home;
