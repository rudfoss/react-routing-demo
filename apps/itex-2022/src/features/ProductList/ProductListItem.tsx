import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

import { Product } from "@app/data/productsData"

export interface ProductListItemProps {
	product: Product
}

const ProductListItemComponent = ({ product }: ProductListItemProps) => {
	const nav = useNavigate()

	return (
		<Card sx={{ maxWidth: 350, height: "100%", display: "flex", flexDirection: "column" }}>
			<CardMedia component="img" image={product.image} height="240"></CardMedia>
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
			<CardActions sx={{ marginTop: "auto" }}>
				<Button size="small" onClick={() => nav(`product/${product.id}`)}>
					Mer informasjon
				</Button>
			</CardActions>
		</Card>
	)
}

export const ProductListItem = React.memo(ProductListItemComponent) as unknown as typeof ProductListItemComponent
