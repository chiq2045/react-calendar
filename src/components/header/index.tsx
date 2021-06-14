import React from 'react';
import { HeaderProps } from 'utils/types';

export const Header = ({ getDate, prevMonth, nextMonth }: HeaderProps) => (
  <div className='row u-text-center u-flex'>
    <div className='col-3'>
      <button onClick={prevMonth}><i className='fa-wrapper fa fa-chevron-left' /></button>
    </div>
    {console.log('test')}
    <div className='col-6'>
      {console.log(getDate().year())}
      {console.log(getDate().month())}
      <h6>{getDate().year()}</h6>
    </div>
    <div className='col-3'>
      <button onClick={nextMonth}><i className='fa-wrapper fa fa-chevron-right' /></button>
    </div>
  </div>
);
