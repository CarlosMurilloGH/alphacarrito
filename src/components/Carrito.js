import React from 'react';
import "./Carrito.css";

import { useCart } from 'react-use-cart';

export const Carrito = () => {

    const {items}=useCart();

    return (
        <div className="carritobox">
            <p>carrito vacio</p>
        </div>
    )
}
