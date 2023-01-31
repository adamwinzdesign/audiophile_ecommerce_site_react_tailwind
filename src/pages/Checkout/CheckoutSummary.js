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
		<div className='mt-[2.5rem] flex w-full flex-col items-start gap-[2rem] rounded-lg bg-white px-[1.5rem] py-[1.8rem]'>
			<h2 className='text-18 font-bold uppercase leading-25 tracking-[1.28px] text-black'>
				Summary
			</h2>
			<CheckoutItemList />
			<button
				className='h-[3rem] w-full bg-peru text-13 font-bold uppercase leading-18 tracking-[1px] text-white disabled:cursor-not-allowed disabled:bg-peru/50'
				onClick={handleContinueClick}
				disabled={cartTotalItems === 0}
			>
				continue & pay
			</button>
		</div>
	);
};

export default CheckoutSummary;
