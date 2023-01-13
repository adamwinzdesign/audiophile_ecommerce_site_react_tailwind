import { create } from "zustand";
import produce from "immer";

export const useCartStore = create((set) => ({
	cart: {},
	addCartItem: (payload) => {
		console.log(payload);
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
