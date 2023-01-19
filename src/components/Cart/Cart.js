import { motion } from "framer-motion";
import { modalFadeIn } from "../../utils/animations";
import { useCartStore } from "../../store/cartStore";

const Cart = ({ handleCartClick }) => {
	const { cart, removeAllCartItems } = useCartStore();

	return (
		<motion.div
			// left-[50%] and negative left margin equal to half of the width to center an absolute element
			className='absolute w-[20.5rem] left-[50%] -ml-[10.25rem] mt-[1.5rem] px-[1.75rem] py-[2rem] flex items-center justify-center bg-white rounded-lg z-20'
			variants={modalFadeIn}
			initial='hidden'
			animate='show'
			exit='exit'
			// move the handleCartClick to the buttons once they are in place so that not all clicks will close the cart
			onClick={handleCartClick}
		>
			{/* Cart header with Cart(3) and remove all items button */}
			<div className='flex'>
				<h3 className='font-bold text-[18px] leading-[25px] tracking-[1.28px] uppercase text-black'>
					cart ({cart.length})
				</h3>
				<button
					className='font-medium text-[15px] leading-[25px] text-black/50 underline'
					onClick={removeAllCartItems}
				>
					Remove all
				</button>
			</div>
			{/* list of items in cart, including photo, name, price, quantity buttons, and quantity in cart */}
			<div className='flex flex-col'></div>
			{/* total */}
			<div className='flex'></div>
			{/* checkout button */}
			<div></div>
		</motion.div>
	);
};

export default Cart;
