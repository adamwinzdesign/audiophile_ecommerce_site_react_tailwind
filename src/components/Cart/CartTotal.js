const CartTotal = ({ cart }) => {
	const cartSubtotal = cart.reduce((result, item) => {
		const itemSubtotal = item.price * item.productQty;
		result = result + itemSubtotal;
		return result;
	}, 0);

	return (
		<div className='w-full flex justify-between'>
			<h3>total</h3>
			<h3>$ {cartSubtotal.toLocaleString()}</h3>
		</div>
	);
};

export default CartTotal;
