import React, { useMemo } from 'react';
import moment, { Moment } from 'moment';
import { Outlet } from 'react-router-dom';

interface CalendarLayoutProps {
  viewDate: Moment;
  goToNextMonth: () => void;
  goToPrevMonth: () => void;
}
export const CalendarLayout = ({
  viewDate,
  goToPrevMonth,
  goToNextMonth
}: CalendarLayoutProps) => {
  const displayDate = useMemo(
    () => moment(viewDate).format('MMM DD YYYY'),
    [viewDate]
  );

  return (
    <>
      <div className='level'>
        <span className='icon level-item level-content'>
          <button
            className='text-indigo-100 bg-indigo-600'
            type='button'
            onClick={() => goToPrevMonth()}
          >
            <i className='fa fa-wrapper fa-chevron-left' />
          </button>
        </span>
        <span className='level-item level-content'>
          <h1>{displayDate}</h1>
        </span>
        <span className='icon level-item level-content'>
          <button
            className='text-indigo-100 bg-indigo-600'
            type='button'
            onClick={() => goToNextMonth()}
          >
            <i className='fa fa-wrapper fa-chevron-right' />
          </button>
        </span>
      </div>
      <div className='space' />
      <Outlet />
    </>
  );
};
