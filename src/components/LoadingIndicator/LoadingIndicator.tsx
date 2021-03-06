import s from "./LoadingIndicator.module.scss";
import SurprisedPikachu from "@assets/images/surprised-pikachu.gif";
import Image from "next/image";
import { SyncLoader } from "react-spinners";

export const LoadingIndicator = () => {
	return (
		<div className={s.loaderContainer}>
			<Image
				width={200}
				height={100}
				src={SurprisedPikachu}
				alt="Surprised pikachu"
			/>
			<div>Loading pokemons...</div>
		</div>
	);
};
