import React from 'react';

export default function DaysInWeek (week) {
  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(
      <td key={week.day(i).format('M/D')}>
        {week.day(i).format('D')}
      </td>
    );
  }

  return days;
}
