const CartTotal = ({ cart }) => {
	const cartSubtotal = cart.reduce((result, item) => {
		const itemSubtotal = item.price * item.productQty;
		result = result + itemSubtotal;
		return result;
	}, 0);

	return (
		<div className='w-full flex justify-between'>
			<h3 className='font-medium text-[15px] leading-[25px] text-black/50 uppercase'>total</h3>
			<h3 className='font-bold text-[18px] leading-[25px] text-black uppercase'>
				$ {cartSubtotal.toLocaleString()}
			</h3>
		</div>
	);
};

export default CartTotal;