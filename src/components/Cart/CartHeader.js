import { useLayoutStore } from "../../store/layoutStore";

const CartHeader = ({ cart, removeAllCartItems }) => {
	const { updateModalOpen, updateCartOpen } = useLayoutStore();
	const handleCartClose = () => {
		updateCartOpen(false);
		updateModalOpen(false);
	};
	return (
		<div className='flex w-full justify-between'>
			<h3 className='text-18 font-bold uppercase leading-25 tracking-[1.28px] text-black'>
				cart ({cart.length})
			</h3>
			{cart.length > 0 && (
				<button
					className='text-15 font-medium leading-25 text-black/50 underline'
					onClick={removeAllCartItems}
				>
					Remove all
				</button>
			)}
			<button
				className='text-15 font-medium leading-25 text-black/50 underline'
				onClick={handleCartClose}
			>
				Close
			</button>
		</div>
	);
};

export default CartHeader;
