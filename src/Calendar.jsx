import React from 'react';
import dayjs from 'dayjs';

export default function Calendar () {
  const RenderCalendarHeader = displayDate => {
    return (
      <div>
        <button className='btn-transparent'>
          <i className='fa-wrapper fa fa-chevron-left' />
        </button>
        <div>
          {displayDate().format('MMMM')}
        </div>
        <div>
          {displayDate().format('YYYY')}
        </div>
        <button className='btn-transparent'>
          <i className='fa-wrapper fa fa-chevron-right' />
        </button>
      </div>
    );
  };

  const RenderCalendarTitle = title => {
    return (
      <div>
        {title}
      </div>
    );
  };

  return (
    <div>
      {RenderCalendarTitle('Test Calendar')}
      {RenderCalendarHeader(dayjs)}
    </div>
  );
}
