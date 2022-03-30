import Image from "next/image";
import { Pokemon } from "../../types";
import s from "./PokemonItem.module.scss";
import { motion } from "framer-motion";

interface IPokemonItemProps {
	pokemon: Pokemon;
	onClick: (pokemon: Pokemon) => void;
}

export const PokemonItem = ({ pokemon, onClick }: IPokemonItemProps) => {
	return (
		<motion.div layout>
			<div onClick={() => onClick(pokemon)} className={s.pokemonCard}>
				<div className={s.pokemonImage}>
					<Image
						src={pokemon.sprites.front_default}
						width={100}
						height={100}
						alt={pokemon.name}
					/>
				</div>
				<h1>{pokemon.name}</h1>
				<div className={s.badges}>
					{pokemon.types.map((type) => {
						return (
							<div key={type.type.name} className={s.typeBadge}>
								{type.type.name}
							</div>
						);
					})}
				</div>
			</div>
		</motion.div>
	);
};
