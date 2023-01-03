import { motion } from "framer-motion";
import { menuSlideDown } from "../../utils/animations";

const MobileMenu = () => {
	return (
		<motion.div
			className='absolute top-0 left-0 w-full h-[46.875rem] flex justify-center bg-white rounded-br-lg rounded-bl-lg'
			variants={menuSlideDown}
			initial='hidden'
			animate='show'
			exit='exit'
		>
			MobileMenu
		</motion.div>
	);
};

export default MobileMenu;
