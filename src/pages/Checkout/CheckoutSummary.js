import CheckoutItemList from "./CheckoutItemLIst";
// import { useCartStore } from "../../store/cartStore";
import { useLayoutStore } from "../../store/layoutStore";

const CheckoutSummary = () => {
	// const { orderSubmitted, updateOrderSubmitted } = useCartStore();
	const {
		modalOpen,
		thankYouOpen,
		updateModalOpen,
		updateMenuOpen,
		updateCartOpen,
		updateThankYouOpen,
	} = useLayoutStore();

	const handleContinueClick = () => {
		updateModalOpen(!modalOpen);
		updateThankYouOpen(!thankYouOpen);
		updateMenuOpen(false);
		updateCartOpen(false);
	};

	return (
		<div className='w-full p-[1.5rem] flex flex-col items-start bg-white rounded-lg'>
			<h2 className='font-bold text-[18px] leading-[25px] tracking-[1.28px] uppercase text-black'>
				Summary
			</h2>
			<CheckoutItemList />
			<button
				className='w-full h-[3rem] font-bold text-[13px] leading-[18px] tracking-[1px] uppercase text-white bg-peru'
				onClick={handleContinueClick}
			>
				continue & pay
			</button>
		</div>
	);
};

export default CheckoutSummary;
