import CheckoutItemList from "./CheckoutItemLIst";
import { useLayoutStore } from "../../store/layoutStore";
import { useCartStore } from "../../store/cartStore";

const CheckoutSummary = () => {
	const { updateModalOpen, updateMenuOpen, updateCartOpen, updateThankYouOpen } = useLayoutStore();
	const { cart } = useCartStore();

	const cartTotalItems = cart.reduce((result, item) => {
		result = result + item.productQty;
		return result;
	}, 0);

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
		<div className='w-full p-[1.5rem] flex flex-col items-start bg-white rounded-lg'>
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
