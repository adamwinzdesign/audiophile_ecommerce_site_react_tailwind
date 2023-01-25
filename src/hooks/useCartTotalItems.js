export const useCartTotalItems = (cart) => {
	const totalItems = cart.reduce((result, item) => {
		result = result + item.productQty;
		return result;
	}, 0);
	return totalItems;
};
