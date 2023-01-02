import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";
import { Modal } from "./Nav/Modal";
import Footer from "./Footer/Footer";

const Layout = () => {
	const [modalOpen, setModalOpen] = useState(true);

	return (
		<div>
			<Nav />
			<div className='relative'>
				{modalOpen && <Modal setModalOpen={setModalOpen} />}
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
