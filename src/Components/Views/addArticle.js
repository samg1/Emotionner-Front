import React, {Component} from 'react';
import Sidebar from '../Elements/sidebar';
import CreateArticle from '../Forms/articulo-form';


class addArticleView extends Component{
    render(){
        return(
            <>
            <Sidebar/>
            <div className='container'>
                <div className='row justify-content-end'>
                    <div className='col col-md-10'>
                    <CreateArticle/>
                    </div>
                </div>
            </div>
        </>
        )
    }
 


} export default addArticleView