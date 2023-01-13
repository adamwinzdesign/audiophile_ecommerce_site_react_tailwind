import { create } from "zustand";
import produce from "immer";

export const useCartStore = create((set) => ({
	cart: {},
	addCartItem: (payload) => {
		set(
			produce((item) => {
				item.cart[payload.id] = payload.productQty;
			})
		);
	},
	removeCartItem: () => {},
}));
