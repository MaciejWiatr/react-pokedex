import { PokemonList } from "@components";
import { BaseLayout } from "@layouts";
import { PokemonForm } from "@components/PokemonForm";

export default function Home() {
	return (
		<BaseLayout>
			<PokemonForm />
			<PokemonList />
		</BaseLayout>
	);
}
