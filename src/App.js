import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import HeadphonesCategory from "./pages/Headphones/HeadphonesCategory";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='headphones' element={<HeadphonesCategory />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
