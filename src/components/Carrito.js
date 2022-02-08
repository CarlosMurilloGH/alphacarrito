import React, { useEffect, useState } from "react";
import "./Carrito.css";
import { app } from "../fb";


export const Carrito = () => {
  const [items, setitems] = useState({});
  useEffect(() => {
    //se escucha el carrito de compras cada que sea modificado se actualiza el estado
    app
      .firestore()
      .collection(`carts`)

      .onSnapshot(function (data) {
        // eslint-disable-next-line
        let newArray = [];
        let docs = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        //Creamos un nuevo objeto donde vamos a almacenar por ciudades.
        let nuevoObjeto = {};
        //Recorremos el arreglo
        docs.forEach((x) => {
          //Si la ciudad no existe en nuevoObjeto entonces
          //la creamos e inicializamos el arreglo de profesionales.
          if (!nuevoObjeto.hasOwnProperty(x.name)) {
            nuevoObjeto[x.name] = {
              articulos: [],
            };
          }

          //Agregamos los datos de profesionales.
          nuevoObjeto[x.name].articulos.push(x);
        });

        setitems(nuevoObjeto);
      });
  }, []);
  const removeDoc = (key) => {
    //se remueve el articulo del carrito de compras

    items[key].articulos.forEach((item) => {
      let doc = item.id;
      console.log(key);
      app.firestore().collection("carts").doc(doc).delete();
    });
  };
  // eslint-disable-next-line
  const getString = () => {
    let total = 0;
    let newArray = [];
    let string = "";
    Object.keys(items).forEach((key) => {
      let item=items[key].articulos[0];
      
        newArray.push();
        total = total + parseFloat(item.price);
        string = string + `*${item.name}* = *${item.price}** X*${items[key].articulos.length}** `;
     
    });
    let end = `Hola%2C+vengo+de+la+app+de+carlos+y+quiero+comprar%0D%0A${string}%0D%0A*Precio:*${total}**%0D%0A*Gracias*%21`;
    return end;
  };
  return (
    <div className="carritobox">
      {Object.keys(items) && <p>carrito vacio</p>}
      {Object.keys(items).map((key) => {
        let item = items[key].articulos[0];

        return (
          <div key={key}>
            <div>
              articulo:{item.name} X {items[key].articulos.length}
              <img
                className="productCardImg"
                src={item.imageURL}
                alt={item.name}
              />
            </div>
            <div>
              <button onClick={() => removeDoc(key)} title="remover">
                -
              </button>
            </div>
          </div>
        );
      })}
      {Object.keys(items).length !== 0 && (
        <button>
          <a rel="noreferrer"
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=51956348183&text=${getString()}`}
          >
            Enviar pedido
          </a>{" "}
        </button>
      )}
    </div>
  );
};
