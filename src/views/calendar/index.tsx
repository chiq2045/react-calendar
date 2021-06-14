import React from 'react';
import { Header } from 'components/header';
import { useDate } from 'utils/state';

export const Calendar = () => {
  const { getDate, prevMonth, nextMonth } = useDate();
  return (
    <div>
      <Header getDate={getDate} prevMonth={prevMonth} nextMonth={nextMonth} />
    </div>
  );
};
