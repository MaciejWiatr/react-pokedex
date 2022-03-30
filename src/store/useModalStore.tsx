import { Pokemon } from "@types";
import create from "zustand";

interface IModalStore {
	isOpen: boolean;
	activePokemon: Pokemon;
	toggleOpen(pokemon?: Pokemon): void;
}

export const useModalStore = create<IModalStore>((set, get) => ({
	isOpen: false,
	activePokemon: null,
	toggleOpen(pokemon?: Pokemon) {
		if (get().isOpen) {
			set((state) => ({ ...state, isOpen: false, activePokemon: null }));
		}
		if (pokemon) {
			set((state) => ({
				...state,
				isOpen: true,
				activePokemon: pokemon,
			}));
		}
	},
}));
