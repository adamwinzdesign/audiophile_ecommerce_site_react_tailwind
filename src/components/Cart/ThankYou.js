import React from "react";
import { motion } from "framer-motion";
import { modalFadeIn } from "../../utils/animations";
import { useLayoutStore } from "../../store/layoutStore";
import checkmark from "../../images/checkout/icon-order-confirmation.svg";
import { Link } from "react-router-dom";

const ThankYou = () => {
	const { updateModalOpen, updateThankYouOpen } = useLayoutStore();

	const handleThankYouClose = () => {
		updateThankYouOpen(false);
		updateModalOpen(false);
	};

	return (
		<motion.div
			// left-[50%] and negative left margin equal to half of the width to center an absolute element
			className='absolute w-[20.5rem] h-[37.5rem] left-[50%] -ml-[10.25rem] mt-[8.5rem] p-[2rem] flex flex-col items-start justify-between bg-white rounded-lg z-20'
			variants={modalFadeIn}
			initial='hidden'
			animate='show'
			exit='exit'
		>
			{/* checkmark */}
			<img src={checkmark} alt='checkmark' />
			<h1 className='font-bold text-[1.5rem] leading-[28px] tracking-[0.8px] uppercase text-black'>
				Thank you <br />
				for your order
			</h1>
			<p className='font-medium text-[15px] leading-[25px] text-black/50'>
				You will receive an email confirmation shortly.
			</p>
			{/* thank you summary, see design, only includes one item with photo, price and qty and a line about additional items, plus the grand total */}
			<div className='w-full min-h-[14.5rem] flex flex-col rounded-lg overflow-hidden'>
				<div className='h-[8.75rem] px-[1.5rem] flex flex-col bg-light_grey'>
					{/* one item's photo, name from cart, price, and qty ordered */}
					<div className='flex'>
						{/* photo */}
						<p>photo</p>
						{/* name and price */}
						<p>name and price</p>
						<div className='flex flex-col'></div>
						{/* quantity of just this one item */}
						<p>x1</p>
					</div>
					{/* and x other item(s) */}
					<div>
						<p>and 3 other items</p>
					</div>
				</div>
				{/* grand total */}
				<div className='w-full px-[1.5rem] py-[1rem] flex flex-col items-start justify-between bg-black rounded-b-lg'>
					<h3 className='font-medium text-[15px] leading-[25px] text-white/50 uppercase'>
						Grand Total
					</h3>
					<p className='font-bold text-[18px] leading-[25px] uppercase text-white'>
						grand total amount here
					</p>
				</div>
			</div>
			<Link to='/' className='w-full'>
				<button
					className='w-full h-[3rem] font-bold text-[13px] leading-[18px] tracking-[1px] uppercase text-white bg-peru'
					onClick={handleThankYouClose}
				>
					back to home
				</button>
			</Link>
		</motion.div>
	);
};

export default ThankYou;
