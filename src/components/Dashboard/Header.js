import React from 'react';
import {  NavLink } from 'react-router-dom';
import "./Header.css";

export const Header = () => {
    return (
        <div className="headercontainer">
            <div className="headerbox">
                <h1 className="logoheader"><a className="menuitem" href="/">LOGO</a></h1>
                <NavLink style={isActive => ({ color: isActive ? "#00A884" : "white" })} to="/productos" className="menuitem">Productos</NavLink>
                <NavLink style={isActive => ({ color: isActive ? "#00A884" : "white" })} to="/configuracion" className="menuitem">Configuracion</NavLink>
                <a className="menuitem" href="#link">Soporte</a>
            </div>            
        </div>
    )
}
