import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginUserForm from './Components/Forms/login-user-form';
import LoginAdminForm from './Components/Forms/login-admin-form';
import UserRegistration from './Components/Forms/user-registration';
function App() {
  return (
    <div className="container" style={{padding: '10vh'}}>
      <div className="row ">
        <div className='col'>
          <UserRegistration/>
          <LoginUserForm/>
          <LoginAdminForm/>
        </div>
      </div>
    </div>
  );
}

export default App;
