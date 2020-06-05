import React, { useContext } from "react";
import { UserContext } from '../../Providers/userProvider';
import {auth} from '../../firebase';


const ProfilePage = () => {
  const user = useContext(UserContext);
  const {displayName, email} = user;
  console.log(user);
  

  return (
    <div className= 'container fluid'>
      <div className= 'row align-items-center'>
        <div className= 'col-sm-9 col-md-7 col-lg-5 mx-auto'>
          <div className='card card-signin my-5'>
            <div className='card-body'>
              <h3>Hola :) bienvenid@</h3>
              <h4>{email}</h4>
              <button className = "btn btn-lg btn-block text-uppercase btn-light" style={{backgroundColor:'#b79ced'}} onClick = {() => {auth.signOut()}}>Cerrar Sesion</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  ) 
};

export default ProfilePage;