import React, { useState } from 'react';
import DayNames from './table/DayNames';
import WeeksInMonth from './table/WeeksInMonth';

export default function Table (props) {
  const { displayDate } = props;

  const CalendarTable = () => {
    const weeks = [];
    let startOfWeek = displayDate.startOf('month').day(0);
    while (startOfWeek <= displayDate.endOf('month').day(6)) {
      const week = getDaysInWeek(startOfWeek);
      weeks.push(
        <tr key={startOfWeek.date()}>
          {week[0]}
          {week[1]}
          {week[2]}
          {week[3]}
          {week[4]}
          {week[5]}
          {week[6]}
        </tr>
      );
      startOfWeek = startOfWeek.add(1, 'week');
    }

    return weeks;
  };

  return (
    <table className='table bordered'>
      <thead>
        <tr>
          <DayNames displayDate={displayDate} />
        </tr>
      </thead>
      <tbody>
        <WeeksInMonth displayDate={displayDate} />
      </tbody>
    </table>
  );
}
