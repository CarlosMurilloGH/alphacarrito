import React from "react";
import "./SingleProduct.css";

import { useCart } from "react-use-cart";

export const SingleProduct = (props) => {
	const { data } = props;

	const {addItem} = useCart();

	return (
		<div className="productCard" key={data.id}>
			<img
				className="productCardImg"
				src={data.imageURL}
				alt={data.name}
			/>
			<p className="productCardName">{data.name}</p>
			<p className="productCardDescription">{data.description}</p>
			<p className="productCardPrice">S/.{data.price}</p>
			<button className="mainbutton" onClick={()=> addItem(data.item)}>Comprar</button>
		</div>
	);
};
