import { motion } from "framer-motion";
import { modalFadeIn } from "../../utils/animations";
import { useCartStore } from "../../store/cartStore";
import CartHeader from "./CartHeader";
import CartItemList from "./CartItemList";
import CartTotal from "./CartTotal";
import { Link } from "react-router-dom";
import { useLayoutStore } from "../../store/layoutStore";

const Cart = () => {
	const { cart, removeAllCartItems } = useCartStore();
	const { updateCartOpen, updateModalOpen } = useLayoutStore();

	const handleCheckoutClick = () => {
		updateCartOpen(false);
		updateModalOpen(false);
	};

	const cartTotalItems = cart.reduce((result, item) => {
		result = result + item.productQty;
		return result;
	}, 0);

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
				updateCartOpen={updateCartOpen}
			/>
			{/* list of items in cart, including photo, name, price, quantity buttons, and quantity in cart */}
			<CartItemList />
			{/* product subtotal, does not include shipping or indicate VAT amount */}
			<CartTotal cart={cart} />
			{/* checkout button */}
			<Link to='/checkout' className='w-full'>
				<button
					className='w-full h-[3rem] font-bold text-[13px] leading-[18px] tracking-[1px] uppercase text-white bg-peru disabled:bg-peru/50 disabled:cursor-not-allowed'
					onClick={handleCheckoutClick}
					disabled={cartTotalItems === 0}
				>
					checkout
				</button>
			</Link>
		</motion.div>
	);
};

export default Cart;
