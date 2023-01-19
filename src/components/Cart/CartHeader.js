const CartHeader = ({ cart, removeAllCartItems, handleCartClick }) => {
	return (
		<div className='w-full flex justify-between'>
			<h3 className='font-bold text-[18px] leading-[25px] tracking-[1.28px] uppercase text-black'>
				cart ({cart.length})
			</h3>
			<button
				className='font-medium text-[15px] leading-[25px] text-black/50 underline'
				onClick={removeAllCartItems}
			>
				Remove all
			</button>
			<button
				className='font-medium text-[15px] leading-[25px] text-black/50 underline'
				onClick={handleCartClick}
			>
				Close
			</button>
		</div>
	);
};

export default CartHeader;
