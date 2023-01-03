import { motion } from "framer-motion";
import { menuSlideDown } from "../../utils/animations";
import MobileLink from "./MobileLink";
import arrowRight from "../../images/shared/desktop/icon-arrow-right.svg";
import headphones from "../../images/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../images/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../../images/shared/desktop/image-category-thumbnail-earphones.png";
import MobileCard from "./MobileCard";

const MobileMenu = ({ handleMenuClick }) => {
	return (
		<motion.div
			className='absolute top-0 left-0 w-full h-[46.875rem] md:h-[21.25rem] px-[1.5rem] py-[2rem] flex flex-col md:flex-row justify-center gap-[2.375rem] bg-white rounded-br-lg rounded-bl-lg'
			variants={menuSlideDown}
			initial='hidden'
			animate='show'
			exit='exit'
			onClick={handleMenuClick}
		>
			{/* mobile item */}
			<MobileCard img={headphones} title='headphones' dest='/headphones' />
			<MobileCard img={speakers} title='speakers' dest='/speakers' />
			<MobileCard img={earphones} title='earphones' dest='/earphones' />
		</motion.div>
	);
};

export default MobileMenu;
