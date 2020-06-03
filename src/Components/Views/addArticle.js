import React, {Component} from 'react';
import Navbar_ from '../Elements/navbar';
import CreateArticle from '../Forms/articulo-form';


class addArticleView extends Component{
    render(){
        return(
            <div className="container">
            <Navbar_/>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <CreateArticle/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
 


} export default addArticleView