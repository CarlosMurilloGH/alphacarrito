import React from "react";
import { app } from "../fb";
import "./SingleProduct.css";

export const SingleProduct = (props) => {
  const { data } = props;

  //const {addItem} = useCart();
  const addItem = (item) => {
    //se añade un articulo nuevo al carrito
    app.firestore().collection("carts").add(item);
  };

  return (
    <div className="productCard" key={data.id}>
      <img className="productCardImg" src={data.imageURL} alt={data.name} />
      <p className="productCardName">{data.name}</p>
      <p className="productCardDescription">{data.description}</p>
      <p className="productCardPrice">S/.{data.price}</p>

      <button className="mainbutton" onClick={() => addItem(data)}>
        Comprar
      </button>
    </div>
  );
};
