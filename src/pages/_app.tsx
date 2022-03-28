import { Metatags } from "../components";
import "../styles/globals.css";
import { Hydrate, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import { AppQueryClient } from "@lib";

function MyApp({ Component, pageProps }) {
	const [queryClient] = useState(() => AppQueryClient);
	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<Metatags />
				<Component {...pageProps} />
				<ReactQueryDevtools initialIsOpen={false} />
			</Hydrate>
		</QueryClientProvider>
	);
}

export default MyApp;
