"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type ContextType = {
  selectedDate: Value;
  handleSelectedDate: (value: Value) => void;
  setSelectedDate: (value: Value) => void;
};

const DateContext = createContext<ContextType | null>(null);

export const useDateContext = () => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error("useDateContext must be used within a DateProvider");
  }

  return context;
};

export function DateProvider({ children }: PropsWithChildren) {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const handleSelectedDate = (value: Value) => {
    setSelectedDate(value);
  };
  const values = {
    selectedDate,
    handleSelectedDate,
    setSelectedDate,
  };

  return <DateContext.Provider value={values}>{children}</DateContext.Provider>;
}
