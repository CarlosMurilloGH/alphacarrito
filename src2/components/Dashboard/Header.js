import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

export const Header = () => {
    return (
        <div className="headercontainer">
            <div className="headerbox">
                <Link to="/productos" className="menuitem">Productos</Link>
                <Link to="/configuracion" className="menuitem">Configuracion</Link>
                <Link to="/tienda" className="menuitem">Tienda</Link>
                <button>Soporte tecnico</button>
            </div>            
        </div>
    )
}
