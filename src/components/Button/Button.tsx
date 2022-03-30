import { ReactNode } from "react";
import s from "./Button.module.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant: "primary" | "secondary";
	name: string;
}

export const Button = ({ children, variant, name, ...props }: IButtonProps) => {
	return (
		<button
			data-cy={`button-${name}`}
			{...props}
			className={
				variant === "primary" ? s.buttonPrimary : s.buttonSecondary
			}
		>
			{children}
		</button>
	);
};
