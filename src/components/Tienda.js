import React, { useEffect, useState } from "react";
import {app} from "../fb";
import { Carrito } from "./Carrito";
import { Footer } from "./Footer";
import { HeaderTienda } from "./HeaderTienda";
import { SingleProduct } from "./SingleProduct";
import "./Tienda.css";

export const Tienda = () => {
	const [docs, setDocs] = useState([]);


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

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="tiendaContainer">
			<div>
				<HeaderTienda />
			</div>
			<div className="tiendagrid">
				<div className="productsGrid">
					{docs.length > 0 &&
						docs.map((doc) => (
							<div key={doc.id}>
								<SingleProduct data={doc} item={doc} key={doc.id}/>
							</div>
						))}
				</div>
				<div className="carritocontainer">
					<Carrito />
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};
