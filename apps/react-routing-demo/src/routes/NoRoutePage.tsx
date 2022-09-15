import React from "react"

import { RootLayout } from "@app/layouts"

import { HomePage } from "./HomePage"

const NoRoutePageComponent = () => (
	<RootLayout>
		<HomePage />
	</RootLayout>
)

export const NoRoutePage = React.memo(NoRoutePageComponent)
