import { useModalStore } from "@store";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import s from "./PokemonModal.module.scss";

export const PokemonModal = () => {
	const { isOpen, activePokemon, toggleOpen } = useModalStore();

	return (
		<AnimatePresence>
			{isOpen ? (
				<div className={s.modalContainer}>
					<motion.div
						data-cy={`modal-${activePokemon.name}`}
						initial={{ opacity: 0, y: 200 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 200 }}
						className={s.modal}
					>
						<div className={s.modalImage}>
							<Image
								src={activePokemon.sprites.front_default}
								width={200}
								height={200}
								alt={activePokemon.name}
							/>
						</div>
						<h1>{activePokemon.name}</h1>
						<div className={s.modalBadges}>
							{activePokemon.types.map((type) => {
								return (
									<div
										key={type.type.name}
										className={s.badge}
									>
										{type.type.name}
									</div>
								);
							})}
						</div>
						<h2>Weight:</h2>
						{activePokemon.weight}
						<h2>Height:</h2>
						{activePokemon.height}
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => toggleOpen()}
						className={s.modalBackground}
					/>
				</div>
			) : null}
		</AnimatePresence>
	);
};
