import React, {Component} from 'react';
import ModalInfo from '../Forms/articleModal';

/**
 * Form for CRUD operations in Tasks table
 */

class AddCards extends Component {

    render() {
      const items = this.props.items.map(item => {
      return (
        <div className="blog-card">
            <div className="meta">
            <div className="photo" style={{backgroundImage:'url('+`${item.image}`+')'}}></div>
            <ul className="details">
                <li className="author"><a href="#">{item.autor}</a></li>
                <li className="tags">
                <ul>
                    <li><a href="#">{item.animo}</a></li>
                </ul>
                </li>
            </ul>
            </div>
            <div className="description">
            <h1>{item.title}</h1>
            <h2>{item.autor}</h2>
            <p>{item.description}</p>
            <ModalInfo buttonLabel="read-more" item={item}/>
            </div>
        </div>
      )
      });

      return(
        <div className='container'>
            {items}
        </div>
      )
    }
  } export default AddCards