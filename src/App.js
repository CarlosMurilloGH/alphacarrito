import "./App.css";
import { Tienda } from "./components/Tienda";
import { Dashboard } from "./components/Dashboard/Dashboard";
import {CartProvider} from "react-use-cart";

function App() {
	return (
		<div className="App">
			<CartProvider>
				<Dashboard />
			</CartProvider>
		</div>
	);
}

export default App;
