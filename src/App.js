import React, { useContext, Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UserProvider from "./Providers/userProvider";
import Application from "./Components/aplication";
import Calendario from "./Components/Elements/calendar";

function App() {
  
  return (
    <>
    <div className= 'container'>
      <div className='row align-content-center'>
        <div className='col colm-md-8'>
        <Calendario/>
        </div>
      </div>
    </div>
    
     

    </>
    
  );
}

export default App;