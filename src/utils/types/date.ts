import { Moment } from 'moment';

export interface NewDateProps {
  year: number;
  month: number;
  date: number;
}

export interface HeaderProps {
  getDate: () => Moment
  prevMonth: () => void;
  nextMonth: () => void;
}
