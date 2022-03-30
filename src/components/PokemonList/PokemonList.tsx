import React from "react";
import { PokemonItem } from "../PokemonItem";
import { usePokemons } from "@hooks";
import { Case, Switch } from "react-if";
import { LoadingIndicator } from "@components/LoadingIndicator";
import { ErrorIndicator } from "@components/ErrorIndicator";
import s from "./PokemonList.module.scss";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useModalStore } from "@store";

export const PokemonList = () => {
	const { data, isLoading, isError } = usePokemons();
	const { toggleOpen } = useModalStore();

	return (
		<AnimateSharedLayout>
			<motion.div layout className={s.container}>
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
									<PokemonItem
										onClick={toggleOpen}
										key={j}
										pokemon={pokemon}
									/>
								))}
							</React.Fragment>
						))}
					</Case>
				</Switch>
			</motion.div>
		</AnimateSharedLayout>
	);
};
