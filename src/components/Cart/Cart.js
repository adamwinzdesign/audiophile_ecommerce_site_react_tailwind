import { motion } from "framer-motion";
import { modalFadeIn } from "../../utils/animations";
import { useCartStore } from "../../store/cartStore";
import CartHeader from "./CartHeader";
import CartItemList from "./CartItemList";
import CartTotal from "./CartTotal";
import { Link } from "react-router-dom";
import { useLayoutStore } from "../../store/layoutStore";
import { useCartTotalItems } from "../../hooks/useCartTotalItems";

const Cart = () => {
	const { cart, removeAllCartItems } = useCartStore();
	const { updateCartOpen, updateModalOpen } = useLayoutStore();

	const handleCheckoutClick = () => {
		updateCartOpen(false);
		updateModalOpen(false);
	};

	const cartTotalItems = useCartTotalItems(cart);

	return (
		<motion.div
			// left-[50%] and negative left margin equal to half of the width to center an absolute element
			className='absolute left-[50%] z-20 -ml-[10.25rem] mt-[1.5rem] flex w-[20.5rem] flex-col items-center justify-center rounded-lg bg-white px-[1.75rem] py-[2rem]'
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
			<Link to='/checkout' className='mt-[1.5rem] w-full'>
				<button
					className='h-[3rem] w-full bg-peru text-13 font-bold uppercase leading-18 tracking-[1px] text-white disabled:cursor-not-allowed disabled:bg-peru/50'
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
