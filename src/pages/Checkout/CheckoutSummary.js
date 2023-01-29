import CheckoutItemList from "./CheckoutItemList";
import { useLayoutStore } from "../../store/layoutStore";
import { useCartStore } from "../../store/cartStore";
import { useCartTotalItems } from "../../hooks/useCartTotalItems";

const CheckoutSummary = () => {
	const { updateModalOpen, updateMenuOpen, updateCartOpen, updateThankYouOpen } = useLayoutStore();
	const { cart } = useCartStore();

	const cartTotalItems = useCartTotalItems(cart);

	const handleContinueClick = () => {
		updateModalOpen(true);
		updateThankYouOpen(true);
		updateMenuOpen(false);
		updateCartOpen(false);
		window.scroll({
			top: 0,
			left: 0,
		});
	};

	return (
		<div className='w-full mt-[2.5rem] px-[1.5rem] py-[1.8rem] flex flex-col items-start gap-[2rem] bg-white rounded-lg'>
			<h2 className='font-bold text-[18px] leading-[25px] tracking-[1.28px] uppercase text-black'>
				Summary
			</h2>
			<CheckoutItemList />
			<button
				className='w-full h-[3rem] font-bold text-[13px] leading-[18px] tracking-[1px] uppercase text-white bg-peru disabled:bg-peru/50 disabled:cursor-not-allowed'
				onClick={handleContinueClick}
				disabled={cartTotalItems === 0}
			>
				continue & pay
			</button>
		</div>
	);
};

export default CheckoutSummary;
