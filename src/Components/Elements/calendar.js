import React from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarToolbar from './toolbar';
import AuthService from '../../Services/auth.service';
require('moment/locale/es.js');


const Calendario = () => {
  const currentUser = AuthService.getCurrentUser();
  const localizer = momentLocalizer(moment);
  const now = new Date();
  console.log(currentUser)
  const events = [
      {
          id: 0,
          title: 'Tarea 1',
          allDay: true,
          start: new Date(2020, 6, 2),
          end: new Date(2020, 6, 1),
      },
      {
          id: 1,
          title: 'Tarea 2',
          start: new Date(2020, 6, 7),
          end: new Date(2020, 6, 10),
      },
      {
          id: 2,
          title: 'Tarea 3',
          start: now,
          end: now,
      },
      {
        id: 3,
        title: 'Tarea 4',
        start: new Date(2020, 5, 10),
        end: new Date(2020, 5, 12),
      },
      
    ]

  return (
    <div className='container'>
      <div className ='row'>
        <h3>{currentUser.username}</h3>
      </div>
      <div className='row'>
      <div className="calendar-container">
          <Calendar
            selectable
            localizer={localizer}
            events={events}
            defaultView={Views.MONTH}
            scrollToTime={new Date(1970, 1, 1, 6)}
            onSelectEvent={event => alert(event.title)}
            components = {{toolbar : CalendarToolbar}}
            //onSelectSlot={handleSelect}
            //dayLayoutAlgorithm={dayLayoutAlgorithm}
        />
      </div>
      </div>
    </div>
    
  );
};

export default Calendario;
