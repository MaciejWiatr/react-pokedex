import { PAGE_SIZE } from "@constants";
import { Pokemon, Pokedex } from "@types";
import axios from "axios";

const fetchPokemonDetailsQuery = async (pokemonUrl: string) => {
	const resp = await axios.get<Pokemon>(pokemonUrl);
	return resp.data;
};

export const fetchPokemonsQuery = async ({ pageParam = 0 }) => {
	const resp = await axios.get<Pokedex>(
		`https://pokeapi.co/api/v2/pokemon?offset=${
			pageParam * PAGE_SIZE
		}&limit=${PAGE_SIZE}`
	);

	const newPokemons = await Promise.all(
		resp.data.results.map(
			async (pokemon) => await fetchPokemonDetailsQuery(pokemon.url)
		)
	);

	return newPokemons;
};
