import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Calendar } from 'views/Calendar';
import { CalendarLayout } from 'components/Layout';
import { DateProvider } from 'utils/DateProvider';

export const App = () => {
  return (
    <DateProvider>
      <BrowserRouter>
        <div className='m-1'>
          <Routes>
            <Route path='/' element={<CalendarLayout />}>
              <Route index element={<Calendar />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </DateProvider>
  );
};
