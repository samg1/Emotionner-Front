import React from 'react';
import Toolbar from 'react-big-calendar/lib/Toolbar';

export const navigateContants = {
    PREVIOUS: 'PREV',
    NEXT: 'NEXT',
    TODAY: 'TODAY',
    DATE: 'DATE'
};
export const views = {
    MONTH: 'month',
    WEEK: 'week',
    WORK_WEEK: 'work_week',
    DAY: 'day',
    AGENDA: 'agenda'
};

export default class CalendarToolbar extends Toolbar {

	componentDidMount() {
		const view = this.props.view;
		console.log(view)
	}

	render() {
        const now = new Date();
		return (
            <>
            <div className='container-fluid'>
            <div class="row  d-sm-flex p-1 " style={{backgroundColor: "lightblue"}}>
                <span class="col-sm p-1 text-center"  >
                    <button type="button" onClick={this.view.bind(null, 'month')}>MES</button>
                </span>
                <span class="col-sm p-1 text-center" >
                    <button type="button" onClick={this.view.bind(null, 'week')}>SEMANA</button>
                </span>
                <span class="col-sm p-1 text-center"  >
                    <button type="button" onClick={this.view.bind(null, 'day')}>DIA</button>
                </span>
            </div>
            <div class="row d-sm-flex p-1 " style={{backgroundColor: " #b79ced"}}>
                <span class="col-sm p-1 text-center"  >
                    <button type="button" onClick={() => this.navigate('PREV')}><i class="fa fa-arrow-left"></i></button>
                </span>    
                <span class="col-sm p-1 text-center" >
                    <button type="button" onClick={() => this.navigate('TODAY')}>HOY</button>
                </span>
                <span class="col-sm p-1 text-center" >
                    <button type="button" onClick={() => this.navigate('NEXT')}><i class="fa fa-arrow-right"></i></button>
                </span>
            </div>
            <div class="row  d-sm-flex p-1 " style={{backgroundColor: "lightblue"}}>
                <div className='col-sm p-1 text-center'>
                    <h5>{this.props.label}</h5>
                </div>
            </div>
     
            </div>
            </>
		);
	}
}