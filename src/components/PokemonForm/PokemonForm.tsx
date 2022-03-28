import { FormInput } from "@components/FormInput";
import { usePokemons } from "@hooks";
import { useFilterStore } from "@store";
import { MouseEventHandler, useEffect } from "react";
import { useForm } from "react-hook-form";
import debounce from "debounce";
import s from "./PokemonForm.module.scss";

interface IFormData {
	name: string;
	type: string;
}

export const PokemonForm = () => {
	const {
		register,
		formState: { errors },
	} = useForm<IFormData>();
	const { fetchNextPage } = usePokemons();

	const onButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		fetchNextPage();
	};

	return (
		<div className={s.formContainer}>
			<form className={s.form}>
				<FormInput placeholder="Filter by name" {...register("name")} />
				<FormInput placeholder="Filter by type" {...register("type")} />
				<button className={s.fetchButton} onClick={onButtonClick}>
					Fetch next 20 pokemons
				</button>
			</form>
		</div>
	);
};
