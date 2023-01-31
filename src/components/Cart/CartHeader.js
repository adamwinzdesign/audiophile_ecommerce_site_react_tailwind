import { useLayoutStore } from "../../store/layoutStore";

const CartHeader = ({ cart, removeAllCartItems }) => {
	const { updateModalOpen, updateCartOpen } = useLayoutStore();
	const handleCartClose = () => {
		updateCartOpen(false);
		updateModalOpen(false);
	};
	return (
		<div className='w-full flex justify-between'>
			<h3 className='font-bold text-18 leading-25 tracking-[1.28px] uppercase text-black'>
				cart ({cart.length})
			</h3>
			{cart.length > 0 && (
				<button
					className='font-medium text-xs leading-25 text-black/50 underline'
					onClick={removeAllCartItems}
				>
					Remove all
				</button>
			)}
			<button
				className='font-medium text-xs leading-25 text-black/50 underline'
				onClick={handleCartClose}
			>
				Close
			</button>
		</div>
	);
};

export default CartHeader;
