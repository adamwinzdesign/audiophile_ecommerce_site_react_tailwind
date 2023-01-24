import { create } from "zustand";
import produce from "immer";

export const useLayoutStore = create((set) => ({
	modalOpen: false,
	menuOpen: false,
	cartOpen: false,
	thankYouOpen: false,
	updateModalOpen: (payload) =>
		set(
			produce((draft) => {
				draft.modalOpen = payload;
			})
		),
	updateMenuOpen: (payload) => {
		set(
			produce((draft) => {
				draft.menuOpen = payload;
			})
		);
	},
	updateCartOpen: (payload) => {
		set(
			produce((draft) => {
				draft.cartOpen = payload;
			})
		);
	},
	updateThankYouOpen: (payload) => {
		set(
			produce((draft) => {
				draft.thankYouOpen = payload;
			})
		);
	},
}));
