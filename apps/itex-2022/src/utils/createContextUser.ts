import { Context, useContext } from "react"

export const createContextUser =
	<TValue>(context: Context<TValue>, mustInitialize = true) =>
	() => {
		const ctx = useContext(context)
		if (!ctx && mustInitialize) throw new Error(`${context.displayName} must be provided before use`)
		return ctx
	}
