import { create } from "zustand";
import produce from "immer";

// addDrama: (payload) =>
//   set(
//     produce((draft) => {
//       draft.kdramas.push({
//         id: Math.floor(Math.random() * 100),
//         name: payload,
//       });
//     })
//   ),

export const useCartStore = create((set) => ({
	cart: {},
	// addCartItem: (payload) => {
	// 	console.log(payload);
	// },
	addCartItem: (payload) => {
		set(
			produce((item) => {
				item.cart[payload.id] = payload.productQty;
			})
		);
	},
	removeCartItem: () => {},
	// xx59Headphones: 0,
	// xx99Mk1Headphones: 0,
	// xx99Mk2Headphones: 0,
	// yx1Earphones: 0,
	// zx7Speaker: 0,
	// zx9Speaker: 0,
	// incrementxx59Headphones: () => set((state) => ({ xx59Headphones: state.xx59Headphones + 1 })),
	// decrementxx59Headphones: () => set((state) => ({ xx59Headphones: state.xx59Headphones - 1 })),
	// resetCart: () =>
	// 	set(() => ({
	// 		xx59Headphones: 0,
	// 		xx99Mk1Headphones: 0,
	// 		xx99Mk2Headphones: 0,
	// 		yx1Earphones: 0,
	// 		zx7Speaker: 0,
	// 		zx9Speaker: 0,
	// 	})),
}));
