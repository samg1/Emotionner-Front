import React, { Component } from 'react'
import { Table} from 'reactstrap';
import ModalForm from '../Forms/tasksModal'
import axios from 'axios'
import moment from 'moment';
// React Notification
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

/**
 * TASKS TABLE!!
 */

class TaskTable extends Component {

  state = {
    id: '',
    title: '', 
    description: '',
    completed: '', 
    start: '', 
    end: '', 
    time: '',
    enabled: '',
    userId: ''
}


  deleteItem = item => {
    let confirmDelete = window.confirm('¿Quiere eliminar esta tarea? Esta acción no se puede deshacer')
    if(confirmDelete){
      let data={
        id: item.id,
        title: item.title,
        description: item.description,
        completed: false,
        start: item.start,
        end: item.start,
        time: item.time, 
        enabled: 0
      }
      console.log(data)
      
      fetch(`https://emotionner.herokuapp.com/users/updateTask`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(item => {
          console.log(item.data)
          window.location.reload()
        })
        .catch(err => console.log(err)) 
    }

  }

  
 


  render() {

    let date = moment(moment.now()).format("YYYY-MM-DD")
    /**
     * We iterate across the items or tasks and we show them in the table
     */
    const items = this.props.items.map(item => {
      if(`${item.start}`=== date && item.enabled === 1 && item.completed === false){
          NotificationManager.info('Para hoy tienes planeado: '+ `${item.title}`, 'Recuerda tu tarea!', 80000);
      }
      return (
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>{item.description}</td>
          <td>{item.start}</td>
          <td>{item.time}</td>
          <td>
              <ModalForm buttonLabel="Editar" item={item} updateState={this.props.updateState}/>
          </td>
          <td>
          <div className = "buttonArrow" style={{marginTop:'18px'}}>
              <a className="link" style={{textTransform: 'uppercase'}} onClick={() => this.deleteItem(item)} title='Delete'>Eliminar</a>
          </div>
          </td>
        </tr>
        )
      })

    return (
      <>
      <Table bordered responsive hover style={{backgroundColor:'#fff'}}>
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Descripcion</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
      <NotificationContainer/>
      </>
    )
  }
}

export default TaskTable