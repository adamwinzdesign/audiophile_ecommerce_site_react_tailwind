import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import HeadphonesCategory from "./pages/Headphones/HeadphonesCategory";
import SpeakersCategory from "./pages/Speakers/SpeakersCategory";
import EarphonesCategory from "./pages/Earphones/EarphonesCategory";
import Checkout from "./pages/Checkout/Checkout";
import NoMatch from "./components/NoMatch";
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();

	return (
		<div className='App'>
			<AnimatePresence mode='wait'>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='headphones' element={<HeadphonesCategory />} />
						<Route path='speakers' element={<SpeakersCategory />} />
						<Route path='earphones' element={<EarphonesCategory />} />
						<Route path='checkout' element={<Checkout />} />
						<Route path='*' element={<NoMatch />} />
					</Route>
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
