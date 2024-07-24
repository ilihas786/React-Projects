import React from 'react';
import './App.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)
function App() {




  return (
    <Calendar
      localizer={localizer}

      style={{ height: 500 }}
    />

  );
}

export default App

