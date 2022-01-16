import React, { useContext, useMemo } from 'react';
import moment from 'moment';
import { Outlet } from 'react-router-dom';
import { DateContext } from 'utils/DateProvider';

export const CalendarLayout = () => {
  const { month, goToPrevMonth, goToNextMonth } = useContext(DateContext);

  const displayDate = useMemo(
    () => moment(month).format('MMM DD YYYY'),
    [month]
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
