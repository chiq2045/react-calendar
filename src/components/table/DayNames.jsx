import React from 'react';

export default function DayNames (props) {
  const { displayDate } = props;

  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(
      <th key={`day ${i}`}>
        <abbr title={`day ${i}`}>{displayDate.day(i).format('ddd')}</abbr>
      </th>
    );
  }

  return days;
}
