import React, { Component } from 'react'
import { Table} from 'reactstrap';
import ModalForm from '../Forms/tasksModal'
import axios from 'axios'

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
    /**
     * We iterate across the items or tasks and we show them in the table
     */
    const items = this.props.items.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>{item.description}</td>
          <td>{item.start}</td>
          <td>{item.time}</td>
          <td>
              <ModalForm buttonLabel="Edit" item={item} updateState={this.props.updateState}/>
          </td>
          <td>
          <div className = "buttonArrow">
              <a className="link" style={{textTransform: 'uppercase'}} onClick={() => this.deleteItem(item)} title='Delete'>Eliminar</a>
          </div>
          </td>
        </tr>
        )
      })

    return (
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
    )
  }
}

export default TaskTable