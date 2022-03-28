import { fetchPokemonsQuery } from "@api";
import { useFilterStore } from "@store";
import { useMemo } from "react";
import { useInfiniteQuery } from "react-query";

export const usePokemons = () => {
	const { data, error, fetchNextPage, isLoading, isError } = useInfiniteQuery(
		"pokemons",
		fetchPokemonsQuery,
		{
			getNextPageParam: (_lastPage, pages) => {
				return pages.length + 1;
			},
		}
	);
	const [nameFilter, typeFilter] = useFilterStore((state) => [
		state.nameFilter,
		state.typeFilter,
	]);

	const filteredPokemons = useMemo(() => {
		if (!data) return { pages: [], pageParams: [] };
		const filtered = data.pages.map((page) => {
			return page.filter((pokemon) => {
				const nameMatch =
					nameFilter === "" || pokemon.name.includes(nameFilter);
				const typeMatch =
					typeFilter === "" ||
					pokemon.types.findIndex(
						(type) => type.type.name === typeFilter
					) !== -1;

				return nameMatch && typeMatch;
			});
		});
		return {
			pages: filtered,
			pageParams: data.pageParams,
		};
	}, [data, nameFilter, typeFilter]);

	return { data: filteredPokemons, error, fetchNextPage, isLoading, isError };
};
