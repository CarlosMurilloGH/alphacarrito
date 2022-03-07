import React from "react";
import "./App.css";
import {CartProvider} from "react-use-cart";
import { CartContextProvider } from "./contexts/CartContext";
import { Tienda } from "./components/Tienda";


function App() {

	return (
		<div className="App">
			<CartContextProvider>
				<CartProvider>
					<Tienda />
				</CartProvider>
			</CartContextProvider>
			
		</div>
	);
}

export default App;
