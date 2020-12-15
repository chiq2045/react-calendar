import React, { useState } from 'react';
import dayjs from 'dayjs';
import Header from './components/Header';
import Title from './components/Title';
import Table from './components/Table';

export default function Calendar () {
  const currentDate = dayjs();
  const [displayDate, setDisplayDate] = useState(dayjs());
  return (
    <div>
      <Title title='Test Calendar' />
      <Header
        displayDate={displayDate}
        setDisplayDate={setDisplayDate}
      />
      <Table displayDate={displayDate} />
    </div>
  );
}
