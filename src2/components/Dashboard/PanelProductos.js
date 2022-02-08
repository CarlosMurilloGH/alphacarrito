import React, { useEffect, useState } from "react";
import { app } from "../../fb";
import { ProductsForm } from "./ProductsForm";
import { SingleProductList } from "../SingleProductList";
import "./PanelProductos.css";
const initialState = {
  id: "",
  name: "",
  price: "",
  description: "",
  imageURL: "",
};
export const PanelProductos = () => {
  const [docs, setDocs] = useState([]);
  const [data, setData] = useState(initialState);
  const [selectedFile, setSelectedFile] = useState("");

  const getData = () => {
    app
      .firestore()
      .collection("products")
      .get()
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setDocs(data);
      })
      .catch((err) => console.error(err));
  };

  const selectDoc = (id) => {
    const selected = docs.filter((doc) => doc.id === id);
    setData({
      id: id,
      name: selected[0].name,
      price: selected[0].price,
      description: selected[0].description,
    });
  };

  const clearData = () => {
    setData(initialState);
  };
  const saveData = async () => {
    if (!data.name) {
      alert("El nombre es obligatorio");
      return;
    }
    if (data.id) {
      let object = {
        name: data.name,
        price: data.price,
        description: data.description,
      };
      if (selectedFile) {//si seleccionaron archivos se sube nuevamente
        const storageRef = app.storage().ref();
        const filePath = storageRef.child(data.name);
        await filePath.put(selectedFile);
        const url = await filePath.getDownloadURL();
         object = {
          name: data.name,
          price: data.price,
          description: data.description,
          imageURL: url,
        };
      }
      app
        .firestore()
        .collection("products")
        .doc(data.id)
        .update(object)
        .then(() => {
          console.log("Document successfully updated!");
        })
        .catch((error) => console.error(error));
    } else {
      const storageRef = app.storage().ref();
      const filePath = storageRef.child(data.name);
      await filePath.put(selectedFile);
      // eslint-disable-next-line
      const url = await filePath.getDownloadURL();
      filePath
        .getDownloadURL()
        .then((url) => {
          app
            .firestore()
            .collection("products")
            .add({
              ...data,
              imageURL: url,
            });
        })
        .then(() => {
          getData();
        })
        .catch((error) => console.error(error));
    }
    clearData();
    getData();
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="homeContainer">
      <div className="productListGrid">
        {docs.length > 0 &&
          docs.map((doc) => (
            <div key={doc.id} onClick={() => selectDoc(doc.id)}>
              <SingleProductList data={doc} getData={() => getData()} />
            </div>
          ))}
      </div>
      <div className="productformcontainer">
        <ProductsForm
          data={data}
          setData={setData}
          clearData={clearData}
          saveData={saveData}
          setSelectedFile={setSelectedFile}
        />
      </div>
    </div>
  );
};
