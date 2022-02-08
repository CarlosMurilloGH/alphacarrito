import React, { createContext, useState, useEffect } from "react";
const CLAVE = "articulos";
export const CartContext = createContext([]);
export const CartContextProvider = ({ children }) => {
  const [items, setitems] = useState([]);
  useEffect(() => {
    const articulos = localStorage.getItem(CLAVE);
    let productos = JSON.parse(articulos) || [];
    setitems(productos);
  }, []);
  const addItem = (item) => {
    item.qnty = 1; //se asigna nueva variable al objeto articulo(cantidad)

    const articulos = localStorage.getItem(CLAVE);
    let productos = JSON.parse(articulos) || [];
    let exist = productos.filter((p) => p.id === item.id);
    if (exist.length > 0) {
      //si ya existe en el articulo
      item.qnty = parseInt(exist[0].qnty) + 1;
      productos = productos.filter((p) => p.id !== item.id);
    } else {
      //si no existe va al final de la cola
      item.order = productos.length; //se asigna nueva variable al objeto articulo(orden)
    }
    productos.push(item);
    setitems(productos);
    localStorage.setItem(CLAVE, JSON.stringify(productos));
  };
  const removeItem = (item) => {
    let articulos = [];
    let itemsEdit = items.filter((i) => i.id === item.id);
    if (parseInt(itemsEdit[0].qnty) === 1) {
      //si es el ultimo articulo se remueve
      articulos = items.filter((i) => i.id !== item.id);
    } else {
      //si tiene mas cantidades se resta solo uno
      articulos = items.filter((i) => i.id !== item.id);
      let newArticuloEdit = itemsEdit[0];
      newArticuloEdit.qnty = newArticuloEdit.qnty - 1;
      articulos.push(newArticuloEdit);
    }
    //console.log(articulos);
    setitems(articulos);
    localStorage.setItem(CLAVE, JSON.stringify(articulos));
  };

  return (
    <CartContext.Provider
      value={[{ items }, { setitems, addItem, removeItem }]}
    >
      {children}
    </CartContext.Provider>
  );
};
