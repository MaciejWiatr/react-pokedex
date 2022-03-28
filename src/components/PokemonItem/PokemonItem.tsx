import Image from "next/image";
import { Pokemon } from "../../types";
import s from "./PokemonItem.module.scss";

interface IPokemonItemProps {
	pokemon: Pokemon;
}

export const PokemonItem = ({ pokemon }: IPokemonItemProps) => {
	return (
		<div className={s.pokemonCard}>
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
	);
};
