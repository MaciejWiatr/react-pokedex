import { QueryClient } from "react-query";

export const AppQueryClient = new QueryClient({
	defaultOptions: { queries: { refetchOnWindowFocus: false } },
});
