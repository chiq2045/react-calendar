import React from 'react';
import { Month } from 'components/Month';
import { Moment } from 'moment';

interface CalendarProps {
  viewDate: Moment;
}
export const Calendar = ({ viewDate }: CalendarProps) => {
  console.log('view date', viewDate.format());
  return (
    <div>
      <Month viewDate={viewDate} />
    </div>
  );
};
