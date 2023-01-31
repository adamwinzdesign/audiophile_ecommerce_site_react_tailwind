const CartProductQuantity = ({ id, productQty, updateCartItem, removeCartItem }) => {
	const decrementQty = () => {
		productQty > 1
			? updateCartItem({ id: id, productQty: productQty - 1 })
			: removeCartItem({ id: id });
	};

	const incrementQty = () => {
		updateCartItem({ id: id, productQty: productQty + 1 });
	};

	return (
		<div className='flex h-[2rem] w-[6rem] items-center justify-between bg-light_grey px-[1rem]'>
			<p
				className='cursor-pointer text-13 font-bold uppercase leading-18 tracking-[1px] text-black/25'
				onClick={decrementQty}
			>
				-
			</p>
			<p className='text-13 font-bold uppercase leading-18 tracking-[1px] text-black'>
				{productQty}
			</p>
			<p
				className='cursor-pointer text-13 font-bold uppercase leading-18 tracking-[1px] text-black/50'
				onClick={incrementQty}
			>
				+
			</p>
		</div>
	);
};

export default CartProductQuantity;
