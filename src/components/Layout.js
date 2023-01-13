import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";
import MobileMenu from "./Nav/MobileMenu";
import { Modal } from "./Nav/Modal";
import { AnimatePresence } from "framer-motion";
import Footer from "./Footer/Footer";
import About from "./About/About";
import CartDebuggerViewer from "./Cart/CartDebuggerViewer";

const Layout = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [cartOpen, setCartOpen] = useState(false);
	const [thankyouOpen, setThankyouOpen] = useState(false);

	const handleMenuClick = () => {
		setModalOpen(!modalOpen);
		setMenuOpen(!menuOpen);
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
	};

	return (
		<div>
			<Nav {...props} />
			<CartDebuggerViewer />
			<div className='relative overflow-hidden'>
				<AnimatePresence initial={false}>{modalOpen && <Modal />}</AnimatePresence>
				<AnimatePresence initial={false}>{menuOpen && <MobileMenu {...props} />}</AnimatePresence>
				<Outlet />
				<About />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
