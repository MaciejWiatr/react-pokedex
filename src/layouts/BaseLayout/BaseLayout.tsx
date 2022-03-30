import { PokemonModal } from "@components";
import s from "./BaseLayout.module.scss";

export const BaseLayout = ({ children }) => {
	return (
		<main className={s.layoutContainer}>
			{children}
			<PokemonModal />
		</main>
	);
};
