import React from "react"

import { DevModeProvider } from "@app/contexts/devMode"
import { ReactQueryProvider } from "@app/contexts/reactQuery"
import { Routes } from "@app/routes/Routes"

import { ErrorBoundary } from "./features/ErrorBoundary"

const AppComponent = () => {
	return (
		<DevModeProvider>
			<ErrorBoundary>
				<ReactQueryProvider>
					<Routes />
				</ReactQueryProvider>
			</ErrorBoundary>
		</DevModeProvider>
	)
}

export const App = React.memo(AppComponent)
