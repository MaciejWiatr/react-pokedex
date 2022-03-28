/* eslint-disable react/display-name */
import { forwardRef, LegacyRef } from "react";
import styles from "./FormInput.module.scss";

interface IFormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	errorMessage?: string;
}

export const FormInput = forwardRef(
	(
		{
			label,
			placeholder = "",
			errorMessage,
			...inputProps
		}: IFormInputProps,
		ref: LegacyRef<HTMLInputElement>
	) => {
		return (
			<div className={styles.container}>
				{label ? <p className={styles.label}>{label}</p> : null}
				<input
					ref={ref}
					{...inputProps}
					className={styles.inputField}
				/>
				{errorMessage ? (
					<p className={styles.errorMessage}>{errorMessage}</p>
				) : null}
			</div>
		);
	}
);
