import React from "react"
import { BrowserRouter } from "react-router-dom"

import { DevModeProvider } from "@app/contexts/devMode"
import { ReactQueryProvider } from "@app/contexts/reactQuery"
import { Routes } from "@app/routes"

import { ErrorBoundary } from "./features/ErrorBoundary"

const AppComponent = () => {
	return (
		<DevModeProvider>
			<ErrorBoundary>
				<ReactQueryProvider>
					<BrowserRouter>
						<Routes />
					</BrowserRouter>
				</ReactQueryProvider>
			</ErrorBoundary>
		</DevModeProvider>
	)
}

export const App = React.memo(AppComponent)
