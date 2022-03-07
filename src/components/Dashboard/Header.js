import React,{useState} from 'react';
import {  NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth'; 
import { auth,useAuth } from '../../fb';
import "./Header.css";

export const Header = () => {

    // eslint-disable-next-line
    const [loading,setLoading] = useState(false);
    const currentUser = useAuth();

    return (
        <div className="headercontainer">
            <div className="headerbox">
                <h1 className="logoheader"><a className="menuitem" href="/">LOGO</a></h1>
                <NavLink style={isActive => ({ color: isActive ? "#00A884" : "white" })} to="/productos" className="menuitem">Productos</NavLink>
                <NavLink style={isActive => ({ color: isActive ? "#00A884" : "white" })} to="/configuracion" className="menuitem">Configuracion</NavLink>
                <button disabled={loading || !currentUser } onClick={()=>signOut(auth)}>Logout</button>
            </div>            
        </div>
    )
}
