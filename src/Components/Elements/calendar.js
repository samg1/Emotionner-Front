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
          title: 'All Day Event very long title',
          allDay: true,
          start: new Date(2020, 6, 2),
          end: new Date(2020, 6, 1),
      },
      {
          id: 1,
          title: 'Long Event',
          start: new Date(2020, 6, 7),
          end: new Date(2020, 6, 10),
      },
      {
          id: 2,
          title: 'Right now Time Event',
          start: now,
          end: now,
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
