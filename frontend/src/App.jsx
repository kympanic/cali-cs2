import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Home, NotFound, Products } from "./pages";
import "./index.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/products" element={<Products />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
