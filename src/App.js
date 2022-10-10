import React from "react";
import "./App.css";
import {CartProvider} from "react-use-cart";
import { CartContextProvider } from "./contexts/CartContext";
import { Route,Routes } from "react-router-dom";

import {RequireAuth} from "./components/RequireAuth";

import { Tienda } from "./components/Paginas/Tienda";
import Login from "./components/Paginas/Login"; 
import { Configuracion } from "./components/Dashboard/Configuracion";
import { NavBar } from "./components/Estructura/NavBar";
import { PanelProductos } from "./components/Dashboard/PanelProductos";


function App() {

	return (
		<div className="App">
			<CartContextProvider>
				<CartProvider>
					{/* <Routes>
						<Route>
							<Route exact path="/" element={<Tienda />} />
							<Route exact path="/iniciar" element={<Login />} />
						</Route>

						<Route element={<RequireAuth />}>
							<Route path="/panel" element={<NavBar />}>
								<Route index element={<Tienda />} />
								<Route path="configuracion" element={<Configuracion />} />
								<Route path="productos" element={<PanelProductos />} />
							</Route>						
						</Route>
					</Routes> */}
					<Login />
				</CartProvider>
			</CartContextProvider>			
		</div>
	);
}


export default App;
