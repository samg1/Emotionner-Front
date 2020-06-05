import React, {Component} from 'react';
import Navbar_ from '../Elements/navbar';
import Sidebar from '../Elements/sidebar';
import CreateArticle from '../Forms/articulo-form';


class addArticleView extends Component{
    render(){
        return(
            <div>
            <Navbar_/>
            <div className='container'>
                <div className='row justify-content-end'>
                    <div className='col col-md-10'>
                    <CreateArticle/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
 


} export default addArticleView