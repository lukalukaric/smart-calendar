import React from 'react';
import Calendar from 'react-calendar';

import './index.css';

interface Props {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<any>>;
}

function CustomCalendar({ date, setDate }: Props) {
  return (
    <Calendar value={date} onChange={setDate} />
  );
}

export default CustomCalendar;
