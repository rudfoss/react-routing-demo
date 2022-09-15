import React from "react"

import { RootLayout } from "@app/layouts"

import { HomePage } from "./HomePage"

const RoutesComponent = () => (
	<RootLayout>
		<HomePage />
	</RootLayout>
)

export const Routes = React.memo(RoutesComponent)
