import moment, { Moment } from 'moment';
import React, { useMemo } from 'react';
import { Day } from './Day';

interface WeekProps {
  week: Moment;
}
export const Week = ({ week }: WeekProps) => {
  const days = useMemo(() => {
    const daysArray = new Array<Moment>();
    for (
      let i = moment(week).startOf('w').day();
      i <= moment(week).endOf('w').day();
      i++
    ) {
      daysArray.push(moment(week).day(i));
    }
    return daysArray;
  }, [week]);

  console.log('week', week.week());
  return (
    <div className='bg-indigo-400 p-1 m-1'>
      <div className='grid grid-cols-7'>
        {days.map((d) => (
          <Day key={moment(d).date()} day={d} />
        ))}
      </div>
    </div>
  );
};
