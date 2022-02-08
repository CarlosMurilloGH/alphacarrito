import React, {  useContext } from "react";
import "./Carrito.css";
import { CartContext } from "../contexts/CartContext";

export const Carrito = () => {
  const [{ items },{addItem,removeItem}] = useContext(CartContext);

  // eslint-disable-next-line
  //const { items } = useCart();
  const getString = () => {
    let object = {
      string: "",
      total: 0,
    };
    let total = 0;
    let newArray = [];
    let string = "";
    items.forEach((item) => {
      newArray.push();
      total = total + parseFloat(item.price*item.qnty);
      string = string + `*${item.name}* = *${item.price}** X*${item.qnty}** `;
    });
    let end = `Hola%2C+vengo+de+la+app+de+carlos+y+quiero+comprar%0D%0A${string}%0D%0A*Precio:*${total}**%0D%0A*Gracias*%21`;
    object.string = end;
    object.total = total;

    return object;
  };
  return (
    <div className="carritobox">
      {items.length === 0 && <p>carrito vacio</p>}
      {items.sort(function(a, b) {
  return a.order - b.order;
}).map((item, index) => {
        return (
          <div key={index}>
            <div>
              articulo:{item.name} X {item.qnty}
              <br></br>
              precio:{item.price}
              <img
                className="productCardImg"
                src={item.imageURL}
                alt={item.name}
              />
            </div>
            <div>
              <button onClick={()=>removeItem(item)} title="remover">-</button>
              <button  onClick={()=>addItem(item)} title="adicionar">+</button>
            </div>
          </div>
        );
      })}
      {items.length !== 0 && (
        <div>
          Total { getString().total}
          <button>
            <a
            rel="noreferrer"
              target="_blank"
              href={`https://api.whatsapp.com/send?phone=51956348183&text=${
                getString().string
              }`}
            >
              Enviar pedido
            </a>{" "}
          </button>
        </div>
      )}
    </div>
  );
};
