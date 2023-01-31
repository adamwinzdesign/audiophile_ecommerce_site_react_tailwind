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
			className='absolute left-[50%] z-20 -ml-[10.25rem] mt-[8.5rem] flex h-[37.5rem] w-[20.5rem] flex-col items-start justify-between rounded-lg bg-white p-[2rem]'
			variants={modalFadeIn}
			initial='hidden'
			animate='show'
			exit='exit'
		>
			{/* checkmark */}
			<Checkmark paymentProcessed={paymentProcessed} />
			<h1 className='text-[1.5rem] font-bold uppercase leading-[28px] tracking-[0.8px] text-black'>
				Thank you <br />
				for your order
			</h1>
			<p className='text-15 font-medium leading-25 text-black/50'>
				You will receive an email confirmation shortly.
			</p>
			{/* thank you summary, see design, only includes one item with photo, price and qty and a line about additional items, plus the grand total */}
			<div className='flex min-h-[14.5rem] w-full flex-col overflow-hidden rounded-lg'>
				<div className='flex h-[8.75rem] flex-col bg-light_grey p-[1.5rem]'>
					{/* one item's photo, name from cart, price, and qty ordered */}
					<div className='flex border-b border-black/10 pb-[1rem]'>
						{/* photo */}
						<img src={productThumbnail} alt='first cart item' className='h-[3rem] w-[3rem]' />
						{/* name and price */}
						<div className='mr-auto flex flex-col'>
							<h3 className='text-15 font-bold uppercase leading-25 text-black'>{nameForCart}</h3>
							<p className='text-[14px] font-bold leading-25 text-black/50'>
								$ {price.toLocaleString()}
							</p>
						</div>
						{/* quantity of just this one item */}
						<p className='text-15 font-bold leading-25 text-black/50'>x{productQty}</p>
					</div>
					{/* and x other item(s) */}
					<div className='flex justify-center pt-[1rem]'>
						<p className='text-[12px] font-bold leading-[16px] tracking-[-0.21px] text-black/50'>
							and {cart.length - 1} other item(s)
						</p>
					</div>
				</div>
				{/* grand total */}
				<div className='flex w-full flex-col items-start justify-between rounded-b-lg bg-black px-[1.5rem] py-[1.25rem]'>
					<h3 className='text-15 font-medium uppercase leading-25 text-white/50'>Grand Total</h3>
					<p className='text-18 font-bold uppercase leading-25 text-white'>$ {grandTotal}</p>
				</div>
			</div>
			<Link to='/' className='w-full'>
				<button
					className='h-[3rem] w-full bg-peru text-13 font-bold uppercase leading-[18px] tracking-[1px] text-white'
					onClick={handleThankYouClose}
				>
					back to home
				</button>
			</Link>
		</motion.div>
	);
};

export default ThankYou;
