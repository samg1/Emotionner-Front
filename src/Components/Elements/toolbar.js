import React from 'react';
import Toolbar from 'react-big-calendar/lib/Toolbar';
import './../../App.css'

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
                {/**
                 * Toolbar en pantallas sm
                 */}
            <div className=" row d-none d-sm-flex d-md-none calendar-header">
                <span className="col col-sm-4 p-1 calendar-sm-toolbar"  >
                    <button type="button" onClick={() => this.navigate('PREV')} ><i className="fa fa-arrow-left"></i></button>
                </span>
                <span className="col col-sm-4 p-1 calendar-sm-toolbar"  >
                    <button type="button" onClick={() => this.navigate('TODAY')} ><i className="fa fa-circle"></i></button>
                </span>
                <span className="col col-sm-4 p-1 calendar-sm-toolbar"  >
                    <button type="button" onClick={() => this.navigate('NEXT')}><i className="fa fa-arrow-right"></i></button>
                </span>
            </div>
              {/**
                 * Toolbar en pantallas xs
                 */}
            <div className=" row d-none d-flex d-sm-none calendar-header ">
                <span className="col col-sm-4 p-1 calendar-sm-toolbar"  >
                    <button type="button" onClick={() => this.navigate('PREV')}><i className="fa fa-arrow-left"></i></button>
                </span>
                <span className="col col-sm-4 p-1 calendar-sm-toolbar "  >
                    <button type="button" onClick={() => this.navigate('TODAY')}><i className="fa fa-circle"></i></button>
                </span>
                <span className="col col-sm-4 p-1 calendar-sm-toolbar"  >
                    <button type="button" onClick={() => this.navigate('NEXT')}><i className="fa fa-arrow-right"></i></button>
                </span>
            </div>
              {/**
                 * Toolbar en pantallas md, lg y xl
                 */}
            <div className="row d-none d-md-flex p-1 calendar-header">
                <span className="col-sm p-1 calendar-sm-toolbar "  >
                    <button type="button" onClick={() => this.navigate('PREV')}><i className="fa fa-arrow-left"></i></button>
                </span>    
                <span className="col-sm p-1 calendar-sm-toolbar" >
                    <button type="button" onClick={() => this.navigate('TODAY')}><i className="fa fa-circle"></i></button>
                </span>
                <span className="col-sm p-1 calendar-sm-toolbar" >
                    <button type="button" onClick={() => this.navigate('NEXT')}><i className="fa fa-arrow-right"></i></button>
                </span>
            </div>
            <div className="row  d-none d-md-flex p-1 calendar-header">
                <span className="col-sm p-1 text-center calendar-button"  >
                    <button type="button" onClick={this.view.bind(null, 'month')}>MES</button>
                </span>
                <span className="col-sm p-1 text-center calendar-button" >
                    <button type="button" onClick={this.view.bind(null, 'week')}>SEMANA</button>
                </span>
                <span className="col-sm p-1 text-center calendar-button"  >
                    <button type="button" onClick={this.view.bind(null, 'day')}>DIA</button>
                </span>
            </div>
            <div className="row  d-sm-flex p-1 calendar-header">
                <div className='col-sm p-1 text-center calendar-text'>
                    <h2>{this.props.label}</h2>
                </div>
            </div>
     
            </div>
            </>
		);
	}
}