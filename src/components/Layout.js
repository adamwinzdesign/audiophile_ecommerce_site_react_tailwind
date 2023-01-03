import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";
import MobileMenu from "./Nav/MobileMenu";
import { Modal } from "./Nav/Modal";
import { AnimatePresence } from "framer-motion";
import Footer from "./Footer/Footer";

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
			<div className='relative overflow-hidden'>
				<AnimatePresence initial={false}>{modalOpen && <Modal />}</AnimatePresence>
				<AnimatePresence initial={false}>{menuOpen && <MobileMenu {...props} />}</AnimatePresence>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
