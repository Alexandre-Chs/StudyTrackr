"use client";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "../styles/calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type onDateChangeProps = {
  onDateChange: (value: Value) => void;
};

const LittleCalendar = ({ onDateChange }: onDateChangeProps) => {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());

  const handleChange = (value: Value) => {
    setSelectedDate(value);
    onDateChange(value);
  };

  return (
    <div>
      <Calendar onChange={handleChange} value={selectedDate} locale="en-EN" />
    </div>
  );
};

export default LittleCalendar;
