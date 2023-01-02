import { motion } from "framer-motion";
import { menuFadeIn } from "../../utils/animations";

const MobileMenu = () => {
	return (
		<motion.div
			className='absolute top-0 left-0 w-full flex justify-center'
			variants={menuFadeIn}
			initial='hidden'
			animate='show'
			exit='exit'
		>
			MobileMenu
		</motion.div>
	);
};

export default MobileMenu;
