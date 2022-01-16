import { useCallback, useMemo, useState } from 'react';
import moment, { Moment } from 'moment';

export const useDate = () => {
  const [month, setMonth] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(moment());

  const selectDate = useCallback((newSelectedDate: Moment) => {
    setSelectedDate(moment(newSelectedDate));
  }, []);

  const goToNextMonth = useCallback(() => {
    setMonth(moment(month).add(1, 'M'));
  }, [month]);

  const goToPrevMonth = useCallback(() => {
    setMonth(moment(month).subtract(1, 'M'));
  }, [month]);

  const currentDate = useMemo(() => moment(), []);

  const startOfMonth = useMemo(() => moment(month).startOf('M'), [month]);

  const endOfMonth = useMemo(() => moment(month).endOf('M'), [month]);

  const dateIsInMonth = useCallback(
    (date: Moment) => date >= startOfMonth && date <= endOfMonth,

    [startOfMonth, endOfMonth]
  );

  return {
    month,
    selectDate,
    selectedDate,
    goToPrevMonth,
    goToNextMonth,
    currentDate,
    dateIsInMonth
  };
};
