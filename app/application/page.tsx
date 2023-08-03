import React from "react";
import WelcomeName from "../components/Application/Home/WelcomeName";
import TaskToDo from "../components/Application/Home/TaskToDo";
import IncommingExam from "../components/Application/Home/IncommingExam";
import LittleCalendar from "../components/Application/Home/LittleCalendar";
import Objectives from "../components/Application/Home/Objectives";

const Home = () => {
  return (
    <div className="flex flex-col items-start justify-between w-full h-full p-10 xl:flex-row">
      <div className="w-full max-w-5xl">
        <WelcomeName />
        <TaskToDo />
        <IncommingExam />
      </div>
      <div className="flex w-full mt-12 xl:pl-8 xl:w-auto xl:flex-col xl:mt-28">
        <LittleCalendar />
        <Objectives />
      </div>
    </div>
  );
};

export default Home;
