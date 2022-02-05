import React from 'react';
import "./Carrito.css";

import { useCart } from 'react-use-cart';

export const Carrito = () => {

    // eslint-disable-next-line
    const {items}=useCart(); 

    return (
        <div className="carritobox">
            <p>carrito vacio</p>
        </div>
    )
}
