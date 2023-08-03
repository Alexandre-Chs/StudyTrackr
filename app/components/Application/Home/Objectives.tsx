import Card from "../../ui/card";
import Link from "next/link";
import React from "react";

const Objectives = () => {
  return (
    <div className="w-full p-4 ml-4 border-2 rounded-lg xl:w-auto xl:ml-0 xl:mt-6 bg-navbarAppColor border-lightViolet text-textViolet">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-medium text-white">Objectives</h3>
        <Link href="#" className="font-light underline underline-offset-2">
          See all
        </Link>
      </div>
      <div className="[&>*]:mt-3">
        <Card>Programming 2 hours each day 💪</Card>
        <Card>Learn english 🤌</Card>
        <Card>Focus on maths for the exam ! 🥵</Card>
      </div>
    </div>
  );
};

export default Objectives;
