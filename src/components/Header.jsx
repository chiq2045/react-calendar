import React, { useState } from 'react';

export default function Header (props) {
  const { displayDate, setDisplayDate } = props;

  const handleNextMonthClick = () => {
    setDisplayDate(displayDate.add(1, 'month'));
  };

  const handlePreviousMonthClick = () => {
    setDisplayDate(displayDate.subtract(1, 'month'));
  };

  return (
    <div>
      <button
        className='btn-transparent'
        onClick={() => handlePreviousMonthClick()}
      >
        <i className='fa-wrapper fa fa-chevron-left' />
      </button>
      <div>
        {displayDate.format('MMMM')}
      </div>
      <div>
        {displayDate.format('YYYY')}
      </div>
      <button
        className='btn-transparent'
        onClick={() => handleNextMonthClick()}
      >
        <i className='fa-wrapper fa fa-chevron-right' />
      </button>
    </div>
  );
}
