import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import {CartProvider} from "react-use-cart";
import { CartContextProvider } from "./contexts/CartContext";

function App() {
	return (
		<div className="App">
			<CartContextProvider>
			<CartProvider>
				<Dashboard/>
			</CartProvider>
			</CartContextProvider>
			
		</div>
	);
}

export default App;
