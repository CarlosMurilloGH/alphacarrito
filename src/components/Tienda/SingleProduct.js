import React,{useContext} from "react";
import "./SingleProduct.css";
import { CartContext } from "../../contexts/CartContext";

export const SingleProduct = (props) => {
  const [,{addItem}] = useContext(CartContext);
  const { data } = props;
  return (
    <div className="productCard" key={data.id}>
      <img className="productCardImg" src={data.imageURL} alt={data.name} />
      <p className="productCardName">{data.name}</p>
      <p className="productCardPrice">S/.{data.price}</p>

      <button className="BotonComprar" onClick={() => addItem(data)}>
        Comprar
      </button>
    </div>
  );
};


