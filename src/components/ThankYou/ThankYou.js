import { useState } from "react";
import { motion } from "framer-motion";
import { modalFadeIn } from "../../utils/animations";
import { useLayoutStore } from "../../store/layoutStore";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import { useCartSubTotal } from "../../hooks/useCartSubtotal";
import Checkmark from "./Checkmark";

const ThankYou = () => {
	const { cart } = useCartStore();
	const { updateModalOpen, updateThankYouOpen } = useLayoutStore();

	const firstCartItem = cart[0];
	const { nameForCart, price, productQty, slug } = firstCartItem;

	const cartSubtotal = useCartSubTotal(cart);

	const shipping = 50;
	const grandTotal = (cartSubtotal + shipping).toLocaleString();
	const productThumbnail = require(`../../images/cart/image-${slug}.jpg`);

	const handleThankYouClose = () => {
		updateThankYouOpen(false);
		updateModalOpen(false);
	};

	// setTimeout and local state to fake an API call for payment processing
	const [paymentProcessed, setPaymentProcessed] = useState(false);
	setTimeout(() => setPaymentProcessed(true), 5000);

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
			<Checkmark paymentProcessed={paymentProcessed} />
			<h1 className='font-bold text-[1.5rem] leading-[28px] tracking-[0.8px] uppercase text-black'>
				Thank you <br />
				for your order
			</h1>
			<p className='font-medium text-xs leading-25 text-black/50'>
				You will receive an email confirmation shortly.
			</p>
			{/* thank you summary, see design, only includes one item with photo, price and qty and a line about additional items, plus the grand total */}
			<div className='w-full min-h-[14.5rem] flex flex-col rounded-lg overflow-hidden'>
				<div className='h-[8.75rem] p-[1.5rem] flex flex-col bg-light_grey'>
					{/* one item's photo, name from cart, price, and qty ordered */}
					<div className='pb-[1rem] flex border-b border-black/10'>
						{/* photo */}
						<img src={productThumbnail} alt='first cart item' className='h-[3rem] w-[3rem]' />
						{/* name and price */}
						<div className='mr-auto flex flex-col'>
							<h3 className='font-bold text-xs leading-25 uppercase text-black'>{nameForCart}</h3>
							<p className='font-bold text-[14px] leading-25 text-black/50'>
								$ {price.toLocaleString()}
							</p>
						</div>
						{/* quantity of just this one item */}
						<p className='font-bold text-xs leading-25 text-black/50'>x{productQty}</p>
					</div>
					{/* and x other item(s) */}
					<div className='pt-[1rem] flex justify-center'>
						<p className='font-bold text-[12px] leading-[16px] tracking-[-0.21px] text-black/50'>
							and {cart.length - 1} other item(s)
						</p>
					</div>
				</div>
				{/* grand total */}
				<div className='w-full px-[1.5rem] py-[1.25rem] flex flex-col items-start justify-between bg-black rounded-b-lg'>
					<h3 className='font-medium text-xs leading-25 text-white/50 uppercase'>Grand Total</h3>
					<p className='font-bold text-18 leading-25 uppercase text-white'>$ {grandTotal}</p>
				</div>
			</div>
			<Link to='/' className='w-full'>
				<button
					className='w-full h-[3rem] font-bold text-13 leading-[18px] tracking-[1px] uppercase text-white bg-peru'
					onClick={handleThankYouClose}
				>
					back to home
				</button>
			</Link>
		</motion.div>
	);
};

export default ThankYou;
