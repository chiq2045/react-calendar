import { useState, useEffect } from 'react';
import moment from 'moment';
import { NewDateProps } from '../types';

export const useDate = () => {
  const [date, setDate] = useState(moment());

  const prevMonth = () => setDate(date.subtract(1, 'month'));
  const nextMonth = () => setDate(date.add(1, 'month'));
  const prevYear = () => setDate(date.subtract(1, 'year'));
  const nextYear = () => setDate(date.add(1, 'year'));

  const changeDate = ({ year, month, date }: NewDateProps) =>
    setDate(
      moment().set({
        year,
        month,
        date
      })
    );

    const getDate = () => date

    useEffect(() => console.log(getDate()), [date])
  return {
    getDate,
    changeDate,
    prevMonth,
    nextMonth,
    prevYear,
    nextYear
  };
};
