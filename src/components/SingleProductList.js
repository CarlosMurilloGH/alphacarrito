import React from "react";
import { app } from "../fb";
import "./SingleProductList.css";


export const SingleProductList = (props) => {
	const { data,getData} = props;


	const onDeleteLink = async () => {
		if (window.confirm(`Estás seguro de eliminar a ${data.name}?`)) {
			await app.firestore().collection("products").doc(data.id).delete();
			getData()
		}
	};

	return (
		<div className="productCardList" key={data.id}>
			<img
				className="productCardListImg"
				src={data.imageURL}
				alt={data.name}
			/>
			<p className="productCardListName">{data.name}</p>
			<p className="productCardListDescription">{data.description}</p>
			<p className="productCardListPrice">S/.{data.price}</p>
			<button className="BotonNegativo" onClick={onDeleteLink}>Eliminar</button>
		</div>
	);
};
