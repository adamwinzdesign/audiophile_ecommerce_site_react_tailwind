import React from "react";
import { motion } from "framer-motion";
import { modalFadeIn } from "../../utils/animations";
import { useLayoutStore } from "../../store/layoutStore";

const ThankYou = () => {
	const { updateModalOpen, updateThankYouOpen } = useLayoutStore();

	const handleThankYouClose = () => {
		updateThankYouOpen(false);
		updateModalOpen(false);
	};

	return (
		<motion.div
			// left-[50%] and negative left margin equal to half of the width to center an absolute element
			className='absolute w-[20.5rem] h-[37.5rem] left-[50%] -ml-[10.25rem] mt-[1.5rem] px-[1.75rem] py-[2rem] flex flex-col items-center justify-center bg-white rounded-lg z-20'
			variants={modalFadeIn}
			initial='hidden'
			animate='show'
			exit='exit'
		>
			<h1 className='font-bold text-black'>Thank You!</h1>
			<button onClick={handleThankYouClose}>close</button>
		</motion.div>
	);
};

export default ThankYou;
