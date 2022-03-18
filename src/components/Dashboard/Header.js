import React,{useState} from 'react';
import {  NavLink,Outlet } from 'react-router-dom';
import { signOut } from 'firebase/auth'; 
import { auth } from '../../fb';
import { onAuthStateChanged } from 'firebase/auth';
import "./Header.css";

export const Header = () => {

    // eslint-disable-next-line
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });

      const logout = async () => {
        await signOut(auth);
      };

    return (
        <div className="headercontainer">
            <div className="headerbox">
                <h1 className="logoheader"><a className="menuitem" href="/">LOGO</a></h1>
                <NavLink style={isActive => ({ color: isActive ? "#00A884" : "white" })} to="/productos" className="menuitem">Productos</NavLink>
                <NavLink style={isActive => ({ color: isActive ? "#00A884" : "white" })} to="/configuracion" className="menuitem">Configuracion</NavLink>
                <button onClick={logout}>Logout</button>
            </div>

            <div>
                <Outlet></Outlet>    
            </div>            
        </div>
    )
}
