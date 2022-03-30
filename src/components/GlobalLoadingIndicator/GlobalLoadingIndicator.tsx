import { usePokemons } from "@hooks";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import s from "./GlobalLoadingIndicator.module.scss";
import PokeballIcon from "@assets/images/pokeball.png";

export const GlobalLoadingIndicator = () => {
	const { isFetching } = usePokemons();

	return (
		<AnimatePresence>
			{isFetching && (
				<motion.div
					className={s.loaderContainer}
					initial={{ y: 200 }}
					animate={{ y: 0 }}
					exit={{ y: 200 }}
				>
					<motion.div
						animate={{ rotate: "360deg" }}
						transition={{
							repeat: Infinity,
							ease: "linear",
							duration: 1,
						}}
					>
						<Image
							src={PokeballIcon}
							height={50}
							width={50}
							alt="Pikachu icon"
						/>
					</motion.div>
					<p>New pokemons are on their way...</p>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
