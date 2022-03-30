import create from "zustand";

interface IFilterStore {
	nameFilter: string;
	typeFilter: string;
	setNameFilter: (name: string) => void;
	setTypeFilter: (type: string) => void;
}

export const useFilterStore = create<IFilterStore>((set) => ({
	nameFilter: "",
	typeFilter: "",
	setNameFilter: (nameFilter) =>
		set((state) => ({ ...state, nameFilter: nameFilter.toLowerCase() })),
	setTypeFilter: (typeFilter) =>
		set((state) => ({ ...state, typeFilter: typeFilter.toLowerCase() })),
}));
