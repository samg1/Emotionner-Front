import React, {Component} from 'react';
import Sidebar from '../Elements/sidebar';
import CreatePhrase from '../Forms/createPhrase';
import './../../App.css'

class adminDashboard extends Component{
    render(){
        return(
            <>
            <Sidebar/>
            <div className='container'>
                <div className='row justify-content-end'>
                    <div className='col col-md-10'>
                    <h1>DASHBOARD</h1>
                    </div>
                </div>
            </div>
        </>
        )
    }
 


} export default adminDashboard