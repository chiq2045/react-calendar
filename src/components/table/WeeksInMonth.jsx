import React from 'react';
import getDaysInWeek from './getDaysInWeek';

export default function WeeksInMonth (props) {
  const { displayDate } = props;
  const weeks = [];
  let startOfWeek = displayDate.startOf('month').day(0);

  while (startOfWeek < displayDate.endOf('month').day(6)) {
    const week = getDaysInWeek(startOfWeek);
    weeks.push(
      <tr key={`week beginning ${startOfWeek.date()}`}>
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
}
