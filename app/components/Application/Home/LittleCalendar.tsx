"use client";
import Calendar from "react-calendar";
import "../styles/calendar.css";
import { useDateContext } from "../Context/DateProvider";

const LittleCalendar = () => {
  const { setSelectedDate, selectedDate } = useDateContext();
  return (
    <div>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        locale="en-EN"
      />
    </div>
  );
};

export default LittleCalendar;
