import React from "react"
import { Route, Routes as RRoutes } from "react-router-dom"

import { RootLayout } from "@app/layouts"

import { HomePage } from "./HomePage"
import { ProductPage } from "./ProductPage"

const RoutesComponent = () => (
	<RRoutes>
		<Route path="/" element={<RootLayout />}>
			<Route index element={<HomePage />} />
			<Route path="product/:id" element={<ProductPage />} />
		</Route>
	</RRoutes>
)

export const Routes = React.memo(RoutesComponent)
