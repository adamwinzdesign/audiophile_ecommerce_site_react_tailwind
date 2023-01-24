import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";
import MobileMenu from "./Nav/MobileMenu";
import { Modal } from "./Nav/Modal";
import { AnimatePresence } from "framer-motion";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Cart from "./Cart/Cart";
import ThankYou from "./Cart/ThankYou";
import { useLayoutStore } from "../store/layoutStore";

const Layout = () => {
	const { modalOpen, menuOpen, cartOpen, thankYouOpen } = useLayoutStore();

	return (
		<div>
			<Nav />
			<div className='relative overflow-hidden'>
				<AnimatePresence initial={false}>{modalOpen && <Modal />}</AnimatePresence>
				<AnimatePresence initial={false}>{menuOpen && <MobileMenu />}</AnimatePresence>
				<AnimatePresence initial={false}>{cartOpen && <Cart />}</AnimatePresence>
				<AnimatePresence initial={false}>{thankYouOpen && <ThankYou />}</AnimatePresence>
				<Outlet />
				<About />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
