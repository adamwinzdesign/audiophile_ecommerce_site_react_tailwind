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
				draft.modalOpen = payload.modalOpen;
			})
		),
	updateMenuOpen: (payload) => {
		set(
			produce((draft) => {
				draft.menuOpen = payload.menuOpen;
			})
		);
	},
	updateCartOpen: (payload) => {
		set(
			produce((draft) => {
				draft.cartOpen = payload.cartOpen;
			})
		);
	},
	updateThankYouOpen: (payload) => {
		set(
			produce((draft) => {
				draft.thankYouOpen = payload.thankYouOpen;
			})
		);
	},
}));
