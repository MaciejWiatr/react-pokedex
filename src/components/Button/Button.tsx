import { ReactNode } from "react";
import s from "./Button.module.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant: "primary" | "secondary";
}

export const Button = ({ children, variant, ...props }: IButtonProps) => {
	return (
		<button
			{...props}
			className={
				variant === "primary" ? s.buttonPrimary : s.buttonSecondary
			}
		>
			{children}
		</button>
	);
};
