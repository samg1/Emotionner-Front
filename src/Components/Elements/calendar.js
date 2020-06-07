import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


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
          start: new Date(2020, 3, 7),
          end: new Date(2020, 3, 10),
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
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
          />
        </div>
    );
  }
}

export default Calendario
