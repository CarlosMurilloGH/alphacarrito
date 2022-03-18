import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import "./NavBar.css";

export const NavBar = () => {
  return (
    <>
        <div className='navbarcontainer'>
            <div className='navbarbox'>
                <Link to="tienda" className="menuitem">Tienda</Link>
                <Link to="configuracion" className="menuitem">Configuracion</Link>
                <Link to="productos" className="menuitem">Productos</Link>
            </div>
        </div>  
        <Outlet>
        </Outlet>
    </>
  )
}
