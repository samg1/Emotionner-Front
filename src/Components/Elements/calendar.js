import React ,{ useState, useEffect } from "react";
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarToolbar from './toolbar';
import AuthService from '../../Services/auth.service';
import userService from "../../Services/user.service";
require('moment/locale/es.js');


const Calendario = () => {
  const currentUser = AuthService.getCurrentUser();
  const localizer = momentLocalizer(moment);
  const [tasks, setTasks] = useState("");
  const now = new Date();
  //console.log(currentUser)
  const events = [
      {
          id: 0,
          title: 'Tarea 1',
          allDay: true,
          start: new Date(2020, 6, 2),
          end: new Date(2020, 6, 1),
      },
      {
          start: new Date(2020, 6, 7),
          end: new Date(2020, 6, 10),
          id: 1,
          title: 'Tarea 2',
          description: 'blahblah'          
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
      
    ];
    useEffect(
      () => {
        fetch(`https://emotionner.herokuapp.com/users/tasks/${currentUser.id}`)
          .then(res => res.json())
          .then(t => {
            const tareas = Array.from(t.tasks.tasks);
            setTasks(tareas);
          })
          .catch(function(err) {
            console.error(err);
          });
      },
      []
    );
  
  /*
    useEffect(() => {
      console.log(currentUser.id)
      userService.getUserTasks(currentUser.id).then(
        (response) => {
          setTasks(response.data);
        },
        (error) => {
          const _content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
  
          setTasks(_content);
        }
      );
    }, []);
    console.log(tasks)
 */

  return (
    <div className='container'>
      <div className ='row'>
  <h3>{tasks.id}</h3>
        <h3>{currentUser.id}</h3>
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
