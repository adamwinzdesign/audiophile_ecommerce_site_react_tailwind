import { motion } from "framer-motion";
import { menuSlideDown } from "../../utils/animations";
import MobileCard from "./MobileCard";

const MobileMenu = ({ handleMenuClick }) => {
	return (
		<motion.div
			className='absolute top-0 left-0 w-full h-[46.875rem] md:h-[21.25rem] px-[1.5rem] py-[2rem] flex flex-col md:flex-row justify-center gap-[2.375rem] bg-white rounded-br-lg rounded-bl-lg z-20'
			variants={menuSlideDown}
			initial='hidden'
			animate='show'
			exit='exit'
			onClick={handleMenuClick}
		>
			{/* mobile item */}
			<MobileCard title='headphones' dest='/headphones' />
			<MobileCard title='speakers' dest='/speakers' />
			<MobileCard title='earphones' dest='/earphones' />
		</motion.div>
	);
};

export default MobileMenu;
