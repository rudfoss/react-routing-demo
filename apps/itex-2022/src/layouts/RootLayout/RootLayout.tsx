import React from "react"
import { Outlet } from "react-router-dom"

import { MainMenu } from "./MainMenu"

export interface RootLayoutProps {
	children?: React.ReactNode
}

const RootLayoutComponent = ({ children = <Outlet /> }: RootLayoutProps) => (
	<>
		<MainMenu />
		<main>{children}</main>
	</>
)

export const RootLayout = React.memo(RootLayoutComponent)
