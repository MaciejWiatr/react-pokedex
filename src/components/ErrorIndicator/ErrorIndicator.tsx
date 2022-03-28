import SadPikachu from "@assets/images/sad-pikachu.gif";
import Image from "next/image";

export const ErrorIndicator = () => {
	return (
		<div>
			<Image
				src={SadPikachu}
				width={100}
				height={100}
				alt="Sad pikachu"
			/>
			<h2>There was an error</h2>
		</div>
	);
};
