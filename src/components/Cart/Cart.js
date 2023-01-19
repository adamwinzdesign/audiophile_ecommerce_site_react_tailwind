import { motion } from "framer-motion";
import { modalFadeIn } from "../../utils/animations";
import { useCartStore } from "../../store/cartStore";
import CartHeader from "./CartHeader";
import CartItemList from "./CartItemList";
import CartTotal from "./CartTotal";

const Cart = ({ handleCartClick }) => {
	const { cart, removeAllCartItems } = useCartStore();

	return (
		<motion.div
			// left-[50%] and negative left margin equal to half of the width to center an absolute element
			className='absolute w-[20.5rem] left-[50%] -ml-[10.25rem] mt-[1.5rem] px-[1.75rem] py-[2rem] flex flex-col items-center justify-center bg-white rounded-lg z-20'
			variants={modalFadeIn}
			initial='hidden'
			animate='show'
			exit='exit'
		>
			<CartHeader
				cart={cart}
				removeAllCartItems={removeAllCartItems}
				handleCartClick={handleCartClick}
			/>
			{/* list of items in cart, including photo, name, price, quantity buttons, and quantity in cart */}
			<CartItemList />
			{/* product subtotal, does not include shipping or indicate VAT amount */}

			<CartTotal cart={cart} />
			{/* checkout button */}
			<div></div>
		</motion.div>
	);
};

export default Cart;
