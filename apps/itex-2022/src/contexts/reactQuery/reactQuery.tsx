import { useLazyRef } from "@app/utils/useLazyRef"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"

const ReactQueryDevTool = React.lazy(() =>
	import("@tanstack/react-query-devtools").then(({ ReactQueryDevtools }) => ({
		default: ReactQueryDevtools
	}))
)

const initQueryClient = () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				staleTime: 1000 * 60 * 5, // 5 minutes
				cacheTime: 1000 * 60 * 60 * 24 // 24 hours
			}
		}
	})

	window._app["queryClient"] = queryClient
	return queryClient
}

export interface ReactQueryProviderProps {
	children: React.ReactNode
}

export const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
	const queryClient = useLazyRef(initQueryClient)
	return (
		<QueryClientProvider client={queryClient.current}>
			{children}
			<ReactQueryDevTool />
		</QueryClientProvider>
	)
}

export default ReactQueryProvider
