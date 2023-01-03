import { motion } from "framer-motion";
import { menuSlideDown } from "../../utils/animations";
import MobileLink from "./MobileLink";
import arrowRight from "../../images/shared/desktop/icon-arrow-right.svg";
import headphones from "../../images/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../images/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../../images/shared/desktop/image-category-thumbnail-earphones.png";

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
			<div className='h-[12.25rem] flex flex-col md:flex-row items-center justify-between cursor-pointer'>
				<img src={headphones} alt='headphones category' className='h-[8.375rem]' />
				<h2 className='font-bold text-[1rem] leading-[1.125rem] tracking-[1.07px] uppercase text-black'>
					headphones
				</h2>
				<div className='flex items-center justify-center gap-[13px]'>
					<MobileLink dest='/headphones' />
					<img src={arrowRight} alt='arrow' className='w-[5px] h-[10px]' />
				</div>
			</div>

			<div className='h-[12.25rem] flex flex-col md:flex-row items-center justify-between cursor-pointer'>
				<img src={speakers} alt='speakers category' className='h-[8.375rem]' />
				<h2 className='font-bold text-[1rem] leading-[1.125rem] tracking-[1.07px] uppercase text-black'>
					speakers
				</h2>
				<div className='flex items-center justify-center gap-[13px]'>
					<MobileLink dest='/speakers' />
					<img src={arrowRight} alt='arrow' className='w-[5px] h-[10px]' />
				</div>
			</div>

			<div className='h-[12.25rem] flex flex-col md:flex-row items-center justify-between cursor-pointer'>
				<img src={earphones} alt='earphones category' className='h-[8.375rem]' />
				<h2 className='font-bold text-[1rem] leading-[1.125rem] tracking-[1.07px] uppercase text-black'>
					earphones
				</h2>
				<div className='flex items-center justify-center gap-[13px]'>
					<MobileLink dest='/earphones' />
					<img src={arrowRight} alt='arrow' className='w-[5px] h-[10px]' />
				</div>
			</div>
		</motion.div>
	);
};

export default MobileMenu;
