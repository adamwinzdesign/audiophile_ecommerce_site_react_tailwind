import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";
import MobileMenu from "./Nav/MobileMenu";
import { Modal } from "./Nav/Modal";
import { AnimatePresence } from "framer-motion";
import Footer from "./Footer/Footer";
import About from "./About/About";
import CartDebuggerViewer from "./Cart/CartDebuggerViewer";
import Cart from "./Cart/Cart";

const Layout = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [cartOpen, setCartOpen] = useState(false);
	const [thankyouOpen, setThankyouOpen] = useState(false);

	const handleMenuClick = () => {
		if (menuOpen) {
			setModalOpen(false);
			setMenuOpen(false);
		} else {
			setModalOpen(true);
			setMenuOpen(true);
		}
		setCartOpen(false);
	};

	const handleCartClick = () => {
		if (cartOpen) {
			setModalOpen(false);
			setCartOpen(false);
		} else {
			setModalOpen(true);
			setCartOpen(true);
		}
		setMenuOpen(false);
	};

	const props = {
		modalOpen,
		setModalOpen,
		menuOpen,
		setMenuOpen,
		cartOpen,
		setCartOpen,
		thankyouOpen,
		setThankyouOpen,
		handleMenuClick,
		handleCartClick,
	};

	return (
		<div>
			<Nav {...props} />
			<CartDebuggerViewer />
			<div className='relative overflow-hidden'>
				<AnimatePresence initial={false}>{modalOpen && <Modal />}</AnimatePresence>
				<AnimatePresence initial={false}>{menuOpen && <MobileMenu {...props} />}</AnimatePresence>
				<AnimatePresence initial={false}>{cartOpen && <Cart {...props} />}</AnimatePresence>
				<Outlet />
				<About />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
