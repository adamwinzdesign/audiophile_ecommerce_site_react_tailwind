import { create } from "zustand";
import produce from "immer";

export const useCartStore = create((set) => ({
	cart: [],
	addCartItem: (payload) =>
		set(
			produce((draft) => {
				draft.cart.push({
					id: payload.id,
					name: payload.name,
					productQty: payload.productQty,
					price: payload.price,
					nameForCart: payload.nameForCart,
					slug: payload.slug,
				});
			})
		),
	// updateCartItem: (payload) =>
	// 	set(
	// 		produce((draft) => {
	// 			const cartItem = draft.cart.find((item) => item.id === payload.id);
	// 			cartItem.productQty = payload.productQty;
	// 		})
	// 	),
	updateCartItem: (payload) =>
		set(
			produce((draft) => {
				const cartItem = draft.cart.find((item) => item.id === payload.id);
				if (cartItem.productQty === 0) {
					const cartItemIndex = draft.cart.findIndex((item) => item.id === payload);
					draft.cart.splice(cartItemIndex, 1);
				} else {
					cartItem.productQty = payload.productQty;
				}
			})
		),
	removeCartItem: (payload) =>
		set(
			produce((draft) => {
				const cartItemIndex = draft.cart.findIndex((item) => item.id === payload);
				draft.cart.splice(cartItemIndex, 1);
			})
		),
	removeAllCartItems: () =>
		set(
			produce((draft) => {
				draft.cart = [];
			})
		),
}));
