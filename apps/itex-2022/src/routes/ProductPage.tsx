import React from "react"
import { useParams } from "react-router-dom"

import { ProductDetails } from "@app/features/ProductDetails"

const ProductPageComponent = () => {
	const { id } = useParams<"id">()
	const idInt = parseInt(id ?? "")
	if (isNaN(idInt)) {
		throw new Error("Missing parameter ID")
	}

	return <ProductDetails id={idInt} />
}

export const ProductPage = React.memo(ProductPageComponent) as unknown as typeof ProductPageComponent
