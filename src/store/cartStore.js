import { create } from "zustand";
import produce from "immer";

export const useCartStore = create((set) => ({
	// cart: {},
	cart: [],
	addCartItem: (payload) =>
		set(
			produce((draft) => {
				draft.cart.push({
					id: payload.id,
					name: payload.name,
					productQty: payload.productQty,
				});
			})
		),
	// updateCartItem:
}));
