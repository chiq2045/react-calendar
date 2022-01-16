import React, { createContext, ReactNode } from 'react';
import { Moment } from 'moment';
import { useDate } from './useDate';

interface DateContextInterface {
  month: Moment;
  selectDate: (date: Moment) => void;
  currentDate: Moment;
  selectedDate: Moment;
  goToNextMonth: () => void;
  goToPrevMonth: () => void;
  dateIsInMonth: (date: Moment) => boolean;
}
export const DateContext = createContext<DateContextInterface>(Object()); // eslint-disable-line @typescript-eslint/no-unsafe-argument

export const DateProvider = ({ children }: { children: ReactNode }) => {
  const {
    month,
    selectDate,
    currentDate,
    selectedDate,
    goToPrevMonth,
    goToNextMonth,
    dateIsInMonth
  } = useDate();

  return (
    <DateContext.Provider
      value={{
        month,
        selectDate,
        currentDate,
        selectedDate,
        goToPrevMonth,
        goToNextMonth,
        dateIsInMonth
      }}
    >
      {children}
    </DateContext.Provider>
  );
};
