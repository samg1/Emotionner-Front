import React, { Component } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarToolbar from './toolbar';
require('moment/locale/es.js');

const localizer = momentLocalizer(moment);

class Calendario extends Component {
  constructor() {
    super();
    const now = new Date();
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
    this.state = {
      events
    };
    }

  render() {
    return (
        <div className="calendar-container">
          <Calendar
            selectable
            localizer={localizer}
            events={this.state.events}
            defaultView={Views.MONTH}
            scrollToTime={new Date(1970, 1, 1, 6)}
            onSelectEvent={event => alert(event.title)}
            components = {{toolbar : CalendarToolbar}}
            onSelectSlot={this.handleSelect}
            dayLayoutAlgorithm={this.state.dayLayoutAlgorithm}
        />
        </div>
    );
  }
}

export default Calendario
