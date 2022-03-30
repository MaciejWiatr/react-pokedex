import { FormInput } from "@components/FormInput";
import { usePokemons } from "@hooks";
import { useFilterStore } from "@store";
import { MouseEventHandler } from "react";
import { useForm } from "react-hook-form";
import s from "./PokemonForm.module.scss";
import { Button } from "@components/Button";

interface IFormData {
	name: string;
	type: string;
}

export const PokemonForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<IFormData>();
	const { fetchNextPage } = usePokemons();
	const { setNameFilter, setTypeFilter } = useFilterStore();

	const onSubmit = (data: IFormData) => {
		setNameFilter(data.name);
		setTypeFilter(data.type);
	};

	const onButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		fetchNextPage();
	};

	return (
		<div className={s.formContainer}>
			<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
				<span className={s.formLabel}>Filter by name:</span>
				<FormInput placeholder="Filter by name" {...register("name")} />
				<span className={s.formLabel}>Filter by type:</span>
				<FormInput placeholder="Filter by type" {...register("type")} />
				<div className={s.buttonContainer}>
					<Button onClick={onButtonClick} variant="primary">
						Fetch more pokemons
					</Button>
					<Button type="submit" variant="secondary">
						Filter
					</Button>
				</div>
			</form>
		</div>
	);
};
