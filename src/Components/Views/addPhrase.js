import React, {Component} from 'react';
import Sidebar from '../Elements/sidebar';
import CreatePhrase from '../Forms/createPhrase';
import './../../App.css'

class addPhraseView extends Component{
    render(){
        return(
            <>
            <Sidebar/>
            <div className='container'>
                <div className='row justify-content-end'>
                    <div className='col col-md-10'>
                    <CreatePhrase/>
                    </div>
                </div>
            </div>
        </>
        )
    }
 


} export default addPhraseView