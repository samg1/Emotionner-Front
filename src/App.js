import React, { useContext, Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UserProvider from "./Providers/userProvider";
import Application from "./Components/aplication";

function App() {
  
  return (
    <>
      <UserProvider>
        <Application />
      </UserProvider>
    </>
  );
}

export default App;