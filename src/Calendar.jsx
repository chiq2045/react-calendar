import React from 'react';
import dayjs from 'dayjs';

export default function Calendar () {
  return (
    <div>
      <div>
        Calendar
      </div>
      <div>
        <button className='btn-transparent'>
          <i className='fa-wrapper fa fa-chevron-left' />
        </button>
        <div>
          {dayjs().format('MMMM')}
        </div>
        <div>
          {dayjs().format('YYYY')}
        </div>
        <button className='btn-transparent'>
          <i className='fa-wrapper fa fa-chevron-right' />
        </button>
      </div>
    </div>
  );
}
