import Link from "next/link";
import React from "react";
import { Book } from "lucide-react";
import CardExams from "../../ui/cardExams";

const IncommingExam = () => {
  return (
    <div className="p-4 mt-12 border-2 rounded-lg border-lightViolet">
      <h4 className="flex items-center mb-4 text-2xl text-white">
        <span className="translate-y-0.5 mr-2">
          <Book color="white" />
        </span>
        Exams coming soon
      </h4>
      <div className="[&>*]:mt-3">
        <CardExams type="Important" subjects="Math">
          Matriciel algebra
        </CardExams>
        <CardExams subjects="Algo">Algorithm python exams</CardExams>
        <CardExams subjects="History">WW2</CardExams>
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

export default IncommingExam;
