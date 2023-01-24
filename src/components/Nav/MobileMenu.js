import { motion } from "framer-motion";
import { menuSlideDown } from "../../utils/animations";
import MobileCard from "./MobileCard";
import { useLayoutStore } from "../../store/layoutStore";

const MobileMenu = () => {
	const { updateMenuOpen, updateModalOpen } = useLayoutStore();

	const handleMenuClick = () => {
		updateMenuOpen(false);
		updateModalOpen(false);
	};
	return (
		<motion.div
			className='absolute top-0 left-0 w-full px-[1.5rem] py-[2rem] flex flex-col md:flex-row justify-center gap-[1rem] bg-white rounded-b-lg z-20'
			variants={menuSlideDown}
			initial='hidden'
			animate='show'
			exit='exit'
			onClick={handleMenuClick}
		>
			<MobileCard title='headphones' dest='/headphones' />
			<MobileCard title='speakers' dest='/speakers' />
			<MobileCard title='earphones' dest='/earphones' />
		</motion.div>
	);
};

export default MobileMenu;
