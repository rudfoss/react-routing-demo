import { useQuery, useQueryClient } from "@tanstack/react-query"

import { config } from "@app/config"
import { fetchJson } from "@app/utils/fetchJson"

export interface Product {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
	rating: Rating
}

export interface Rating {
	rate: number
	count: number
}

export const productsKeys = {
	all: () => ["products"] as const,
	byId: (id: Product["id"]) => [...productsKeys.all(), "byId", id] as const
}

export const useProductsData = () => {
	const queryClient = useQueryClient()
	return useQuery(
		productsKeys.all(),
		async () => (await fetchJson<Product[]>([config.fakeStoreEndpoint, "products"])) ?? [],
		{
			onSuccess: (products) => {
				for (const product of products) {
					queryClient.setQueryData(productsKeys.byId(product.id), product)
				}
			}
		}
	)
}

export const useProductData = (id: Product["id"]) => {
	return useQuery(productsKeys.byId(id), () => fetchJson<Product>([config.fakeStoreEndpoint, "products", id + ""]))
}
