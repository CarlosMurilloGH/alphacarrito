import React from "react";
import "./App.css";
import {CartProvider} from "react-use-cart";
import { CartContextProvider } from "./contexts/CartContext";
import { Route,Routes } from "react-router-dom";

import {RequireAuth} from "./components/RequireAuth";

import {Tienda} from "./components/Tienda";
import Login from "./components/Login";
import { Configuracion } from "./components/Dashboard/Configuracion";
import { NavBar } from "./components/Estructura/NavBar";
import { PanelProductos } from "./components/Dashboard/PanelProductos";


function App() {

	return (
		<div className="App">
			<CartContextProvider>
				<CartProvider>
					<Routes>
						<Route>
							<Route exact path="/" element={<Tienda />} />
							<Route exact path="/login" element={<Login />} />
						</Route>

						<Route element={<RequireAuth />}>
							<Route path="/panel" element={<NavBar />}>
								<Route path="tienda" element={<Tienda />} />
								<Route path="configuracion" element={<Configuracion />} />
								<Route path="productos" element={<PanelProductos />} />
							</Route>						
						</Route>
					</Routes>
				</CartProvider>
			</CartContextProvider>			
		</div>
	);
}


export default App;
