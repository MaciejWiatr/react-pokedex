import SadPikachu from "@assets/images/sad-pikachu.gif";
import Image from "next/image";
import s from "./ErrorIndicator.module.scss";

export const ErrorIndicator = () => {
	return (
		<div className={s.errorContainer}>
			<Image
				src={SadPikachu}
				width={100}
				height={100}
				alt="Sad pikachu"
			/>
			<div>There was an error</div>
		</div>
	);
};
