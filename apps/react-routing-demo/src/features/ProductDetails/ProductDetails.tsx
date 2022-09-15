import { Alert, Card, CardContent, CardMedia, CircularProgress, Typography } from "@mui/material"
import React from "react"

import { Product, useProductData } from "@app/data/productsData"

export interface ProductDetailsProps {
	id: Product["id"]
}

const ProductDetailsComponent = ({ id }: ProductDetailsProps) => {
	const { data: product, isLoading } = useProductData(id)

	if (isLoading) {
		return <CircularProgress />
	}

	if (!product) {
		return <Alert severity="warning">Product not found ({id})</Alert>
	}
	return (
		<Card sx={{ height: "100%", display: "flex", flexDirection: "column", margin: "24px" }}>
			<CardMedia component="img" image={product.image} sx={{ maxHeight: "640px" }}></CardMedia>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{product.title}
				</Typography>
				<Typography variant="caption" component="div">
					{product.category}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{product.description}
				</Typography>
			</CardContent>
		</Card>
	)
}

export const ProductDetails = React.memo(ProductDetailsComponent)
