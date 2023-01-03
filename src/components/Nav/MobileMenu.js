import { motion } from "framer-motion";
import { menuSlideDown } from "../../utils/animations";
import MobileLink from "./MobileLink";

const MobileMenu = ({ handleMenuClick }) => {
	return (
		<motion.div
			className='absolute top-0 left-0 w-full h-[46.875rem] md:h-[21.25rem] px-[1.5rem] py-[2rem] flex justify-center bg-white rounded-br-lg rounded-bl-lg'
			variants={menuSlideDown}
			initial='hidden'
			animate='show'
			exit='exit'
			onClick={handleMenuClick}
		>
			{/* mobile item */}
			<div className='flex flex-col md:flex-row'>
				<h2>headphones</h2>
				<MobileLink dest='/headphones' text='Headphones' />
			</div>
		</motion.div>
	);
};

export default MobileMenu;
