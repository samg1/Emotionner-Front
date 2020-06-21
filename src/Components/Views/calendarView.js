import React, {Component} from 'react';
import Navbar_ from '../Elements/navbar';
import Calendario from '../Elements/calendar';
import Footer from '../Elements/footerInside'
import TasksForm from '../Forms/Tasks'
import EmotionsForm from '../Forms/emotionsForm'


class CalendarView extends Component{
    render(){
        return(
            <>
            <Navbar_/>
            <div className='container'>
                <div className ='row'>
                    <div className='col-1'>
                        
                    </div>
                    <div className ='col-4' style={{paddingTop:'25px'}}>
                        <TasksForm/>
                    </div>
                    <div className='col-1'>
                        
                    </div>
                    <div className ='col-5' style={{paddingTop:'25px'}}>
                        <EmotionsForm/>
                    </div>
                    <div className='col-1'>
                        
                    </div>
                </div>
                <div className ='row'>
                    <Calendario/>
                </div>
            </div>
            <Footer/>
        </>
        )
    }
 


} export default CalendarView