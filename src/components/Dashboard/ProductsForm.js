import React from "react";
import "./ProductsForm.css"

export const ProductsForm = (props) => {
	const {  data, setData, clearData ,saveData,setSelectedFile} = props;


	const submitHandler = async (e) => {
		e.preventDefault();
    saveData()
	};

	return (
		<form className="productForm">
			<div className="tituloform">
				<p>Sube o Edita tu producto</p>
			</div>
			<div className="uploadbox">
				<label className="uploadButton">Imagen del producto </label>
				<input
					type="file"
					onChange={(e) => setSelectedFile(e.target.files[0])}
					accept="image/png, image/gif, image/jpeg"
				/>
			</div>
			<div className="nombrebox">
				<input
					type="text"
					onChange={(e) => setData({ ...data, name: e.target.value })}
					value={data.name}
					name="name"
					placeholder="nombre del producto"
					className="inputForm"
				/>
			</div>

			<div className="preciobox">
				<input
					type="number"
					onChange={(e) => setData({ ...data, price: e.target.value })}
					value={data.price}
					name="price"
					placeholder="precio del producto"
					className="inputForm"
				/>
			</div>
			<button className="BotonPositivo" onClick={submitHandler}>Guardar</button>
			<button className="BotonNegativo" onClick={clearData}>
				Limpiar
			</button> 
		</form>
	);
};
