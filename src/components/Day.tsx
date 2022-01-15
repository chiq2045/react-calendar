import { Moment } from 'moment';
import React from 'react';

interface DayProps {
  day: Moment;
}
export const Day = ({ day }: DayProps) => {
  return (
    <div className='bg-indigo-200 p-1 m-1' style={{ height: '150px' }}>
      {day.date()}
    </div>
  );
};
