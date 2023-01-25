export const useCartSubTotal = (cart) => {
	const cartSubtotal = cart.reduce((result, item) => {
		const itemSubtotal = item.price * item.productQty;
		result = result + itemSubtotal;
		return result;
	}, 0);
	return cartSubtotal;
};
