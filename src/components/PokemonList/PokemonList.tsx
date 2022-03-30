import React from "react";
import { PokemonItem } from "../PokemonItem";
import { usePokemons } from "@hooks";
import { Case, Switch } from "react-if";
import { LoadingIndicator } from "@components/LoadingIndicator";
import { ErrorIndicator } from "@components/ErrorIndicator";
import s from "./PokemonList.module.scss";

export const PokemonList = () => {
	const { data, isLoading, isError } = usePokemons();

	return (
		<div className={s.container}>
			<Switch>
				<Case condition={isLoading}>
					<LoadingIndicator />
				</Case>
				<Case condition={isError}>
					<ErrorIndicator />
				</Case>
				<Case condition={!!data && data.hasOwnProperty("pages")}>
					{data?.pages?.map((group, i) => (
						<React.Fragment key={i}>
							{group.map((pokemon, j) => (
								<PokemonItem key={j} pokemon={pokemon} />
							))}
						</React.Fragment>
					))}
				</Case>
			</Switch>
		</div>
	);
};
