import React from "react"

import { ProductList } from "@app/features/ProductList"

const HomePageComponent = () => {
	return <ProductList />
}

export const HomePage = React.memo(HomePageComponent)
