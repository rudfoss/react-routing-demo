import React from "react"
import { Routes as ReactRouterRoutes, Route } from "react-router-dom"

import { RootLayout } from "@app/layouts"

import { HomePage } from "./HomePage"
import { ProductPage } from "./ProductPage"

const RoutesComponent = () => (
	<ReactRouterRoutes>
		<Route path="/" element={<RootLayout />}>
			<Route index element={<HomePage />} />
			<Route path="product">
				<Route path=":id" element={<ProductPage />} />
			</Route>
		</Route>
	</ReactRouterRoutes>
)

export const Routes = React.memo(RoutesComponent)
