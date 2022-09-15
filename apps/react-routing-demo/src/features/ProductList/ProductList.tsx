import React from "react"
import styled from "styled-components"

import { useProductsData } from "@app/data/productsData"

import { ProductListItem } from "./ProductListItem"

const List = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: stretch;
	flex-wrap: wrap;
	& > {
		padding: 0;
	}
	& > *:not(:last-child) {
		padding-right: 24px;
		padding-bottom: 24px;
	}
`

const ProductListComponent = () => {
	const { data: products } = useProductsData()

	return "sdkljfdsl"

	return (
		<List>
			{products?.map((product) => (
				<li key={product.id}>
					<ProductListItem product={product} />
				</li>
			))}
		</List>
	)
}

export const ProductList = React.memo(ProductListComponent as unknown) as typeof ProductListComponent
