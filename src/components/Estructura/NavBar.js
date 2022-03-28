import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../fb';
import "./NavBar.css";




export const NavBar = () => {

  const logout = async () => {
    await signOut(auth);
  };



  return (
    <> 
    <div className='navbarcontainer'>
          <div className='navbarbox'>
              <Link to="/panel" className="menuitem">Tienda</Link>
              <Link to="configuracion" className="menuitem">Configuracion</Link>
              <Link to="productos" className="menuitem">Productos</Link>
            <button onClick={logout} className="logoutnavbar"> Cerrar sesión </button>
          </div>
      </div>
      
      <div>
        <Outlet>
        </Outlet>
      </div>  
    </>
  )
}
