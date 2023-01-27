import { motion } from "framer-motion";
import { modalFadeIn } from "../../utils/animations";

export const Modal = () => {
	return (
		<motion.div
			className='absolute top-0 left-0 w-full h-[100%] bg-black/40 z-10'
			variants={modalFadeIn}
			initial='hidden'
			animate='show'
			exit='exit'
		/>
	);
};
