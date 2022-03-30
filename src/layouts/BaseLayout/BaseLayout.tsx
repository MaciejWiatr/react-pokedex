import { PokemonModal } from "@components";
import { GlobalLoadingIndicator } from "@components/GlobalLoadingIndicator";
import s from "./BaseLayout.module.scss";

export const BaseLayout = ({ children }) => {
	return (
		<main className={s.layoutContainer}>
			{children}
			<PokemonModal />
			<GlobalLoadingIndicator />
		</main>
	);
};
