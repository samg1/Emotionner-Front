import React, { useContext } from "react";
import { UserContext } from '../../Providers/userProvider';
import {auth} from '../../firebase';
import { AuthContext } from "../Authorization/Auth";
import Calendario from "../Elements/calendar";


const ProfilePage = () => {
  const user = useContext(UserContext);
  const {email} = user;
  
  return (
    <div className= 'container'>
      <div className='row align-content-center'>
        <div className='col col-md-4'>
              <h3>Hola :) bienvenid@</h3>
              <h4>{email}</h4>
              <button className = "btn btn-lg btn-block text-uppercase btn-light" style={{backgroundColor:'#b79ced'}} onClick = {() => {auth.signOut()}}>Cerrar Sesion</button>
        </div>
        <div className='col col-md-8'>
        <Calendario/>
        </div>
    </div>
    </div>
  ) 
};

export default ProfilePage;