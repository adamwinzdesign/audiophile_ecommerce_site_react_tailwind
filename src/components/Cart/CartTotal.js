const CartTotal = ({ cart }) => {
	// console.log(cart);

	// for each item in cart, get the item total by multiplying productQty by price
	// add all item totals to get cart subtotal, which does not indicate VAT or include shipping

	const cartSubtotal = {};

	cart.map((item) => console.log(item.name, item.productQty, item.productQty * item.price));

	return (
		<div className='w-full flex justify-between'>
			<h3>total</h3>
			<h3>$0</h3>
		</div>
	);
};

export default CartTotal;
