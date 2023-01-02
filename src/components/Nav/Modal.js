import { motion } from "framer-motion";

const modalFadeIn = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export const Modal = () => {
	return (
		<motion.div
			className='absolute top-0 left-0 w-full h-[100%] bg-black/40'
			variants={modalFadeIn}
			initial='hidden'
			animate='show'
			exit='exit'
		/>
	);
};
