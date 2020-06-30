import React, { Component } from 'react'
import { Table} from 'reactstrap';
import ModalForm from '../Forms/tasksModal'

/**
 * TASKS TABLE!!
 */

class TaskTable extends Component {


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