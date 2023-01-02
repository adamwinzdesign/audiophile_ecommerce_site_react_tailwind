import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";
import { Modal } from "./Nav/Modal";
import { AnimatePresence } from "framer-motion";
import Footer from "./Footer/Footer";

const Layout = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	const props = { modalOpen, setModalOpen, menuOpen, setMenuOpen };

	return (
		<div>
			<Nav {...props} />
			<div className='relative'>
				<AnimatePresence initial={false}>{modalOpen && <Modal />}</AnimatePresence>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
