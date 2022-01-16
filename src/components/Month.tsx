import React, { useContext, useMemo } from 'react';
import moment, { Moment } from 'moment';
import { Week } from './Week';
import { DateContext } from 'utils/DateProvider';

export const Month = () => {
  const { month } = useContext(DateContext);
  const weeks = useMemo(() => {
    const weeksArray = new Array<Moment>();
    const startOfWeek = moment(month).startOf('M').week();
    const endOfWeek = moment(month).endOf('M').week();
    for (
      let i = startOfWeek;
      i <=
      (endOfWeek < startOfWeek
        ? moment(month).weeksInYear() + 1
        : endOfWeek);
      i++
    ) {
      weeksArray.push(moment(month).week(i));
    }

    return weeksArray;
  }, [month]);

  return (
    <div className='bg-indigo-600 p-1'>
      {weeks.map((w) => (
        <Week key={moment(w).week()} week={w} />
      ))}
    </div>
  );
};
