import React, { Component} from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarToolbar from './toolbar';
import axios from 'axios';
import AuthService from '../../Services/auth.service';
require('moment/locale/es.js');

moment.locale('es');
const localizer = momentLocalizer(moment);

class Calendario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        //State is updated via componentDidMount
      ],
      
    }
    
    }
    convertDate = (date) => {
      return moment.utc(date).toDate()
    }

    componentDidMount() {
      const currentUser = AuthService.getCurrentUser();
      const id = currentUser.id;
      console.log(id);
      axios.get(`https://emotionner.herokuapp.com/users/tasks/${id}`)
        .then(response => {
          let aux = response.data.tasks.tasks;
          //We filter through enabled tasks only
          let appointments = aux.filter(x => x.enabled === 1)
          for (let i = 0; i < appointments.length; i++) {
            //Convertimos a formato date
            appointments[i].start = this.convertDate(appointments[i].start) 
            var dias = 1; // Número de días a agregar
            appointments[i].start.setDate(appointments[i].start.getDate() + dias);
            appointments[i].end = this.convertDate(appointments[i].end)
            appointments[i].end.setDate(appointments[i].end.getDate() + dias);
            
          }
          console.log('DESPUES')
          console.log(appointments);
          this.setState({
            tasks:appointments
          })
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  render() {
    
    const { tasks } = this.state
    return (
        <div className="calendar-container">
          <Calendar
            popup
            selectable
            localizer={localizer}
            events={tasks}
            defaultView={Views.MONTH}
            scrollToTime={new Date(1970, 1, 1, 6)}
            onSelectEvent={event => alert('Tarea: '+ event.title + '\n'+ 'Descripcion: '+ event.description)}
            components = {{toolbar : CalendarToolbar}}
            onSelectSlot={this.handleSelect}
            dayLayoutAlgorithm={this.state.dayLayoutAlgorithm}
            defaultDate={new Date()}
        />
        </div>
    );
  }
}

export default Calendario