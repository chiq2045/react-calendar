import moment from 'moment';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Calendar } from 'views/Calendar';
import { CalendarLayout } from 'components/Layout';

export const App = () => {
  const [viewDate, setViewDate] = useState(moment());

  return (
    <div className='m-1'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <CalendarLayout
                viewDate={viewDate}
                goToNextMonth={() => setViewDate(moment(viewDate).add(1, 'M'))}
                goToPrevMonth={() => setViewDate(moment(viewDate).subtract(1, 'M'))}
              />
            }
          >
            <Route index element={<Calendar viewDate={viewDate} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
