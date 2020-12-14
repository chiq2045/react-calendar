import React, { useState } from 'react';
import dayjs from 'dayjs';
import Header from './components/Header';
import Title from './components/Title';

export default function Calendar () {
  // const currentDate = dayjs().now();
  // const [selectedDate, setSelectedDate] = useState(dayjs().now());
  const [displayDate, setDisplayDate] = useState(dayjs());

  return (
    <div>
      <Title title='Test Calendar' />
      <Header
        displayDate={displayDate}
        setDisplayDate={setDisplayDate}
      />
    </div>
  );
}
