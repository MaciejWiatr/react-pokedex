import { PokemonList } from "@components";
import { BaseLayout } from "@layouts";
import { PokemonForm } from "@components/PokemonForm";
import { GlobalLoadingIndicator } from "@components/GlobalLoadingIndicator";

export default function Home() {
	return (
		<BaseLayout>
			<PokemonForm />
			<PokemonList />
			<GlobalLoadingIndicator />
		</BaseLayout>
	);
}
