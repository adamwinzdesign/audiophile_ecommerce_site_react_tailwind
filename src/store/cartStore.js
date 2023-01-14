import { create } from "zustand";
import produce from "immer";

export const useCartStore = create((set) => ({
	// cart: {},
	cart: [],
	// addCartItem: (payload) => {
	// 	set(
	// 		produce((item) => {
	// 			item.cart[payload.id] = payload.productQty;
	// 		})
	// 	);
	// },
	addCartItem: (payload) =>
		set(
			produce((draft) => {
				draft.cart.push({
					id: payload.id,
					productQty: payload.productQty,
				});
			})
		),
}));
