import React, { useMemo } from 'react';
import moment, { Moment } from 'moment';
import { Week } from './Week';

interface MonthProps {
  viewDate: Moment;
}
export const Month = ({ viewDate }: MonthProps) => {
  const weeks = useMemo(() => {
    const weeksArray = new Array<Moment>();
    const startOfWeek = moment(viewDate).startOf('M').week();
    const endOfWeek = moment(viewDate).endOf('M').week();
    for (
      let i = startOfWeek;
      i <=
      (endOfWeek < startOfWeek
        ? moment(viewDate).weeksInYear() + 1
        : endOfWeek);
      i++
    ) {
      weeksArray.push(moment(viewDate).week(i));
    }

    return weeksArray;
  }, [viewDate]);

  console.log('weeks', weeks);
  return (
    <div className='bg-indigo-600 p-1'>
      {weeks.map((w) => (
        <Week key={moment(w).week()} week={w} />
      ))}
    </div>
  );
};
