import { concatUrls } from "./concatUrls"

export class FetchError extends Error {
	public constructor(message: string, public readonly response?: Response, public readonly innerError?: unknown) {
		super(message)
		this.name = "FetchError"
	}
}

export const fetchJson = async <TData>(
	urlSegments: string | string[],
	params?: Record<string, string>
): Promise<TData | undefined> => {
	const searchParams = new URLSearchParams()
	for (const [key, value] of Object.entries(params ?? {})) {
		searchParams.set(key, value)
	}

	const requestUrl =
		concatUrls(Array.isArray(urlSegments) ? urlSegments : [urlSegments]) + (params ? `?${searchParams.toString()}` : "")

	const response = await fetch(requestUrl)
	if (!response.ok) {
		throw new FetchError(requestUrl, response)
	}
	if (response.headers.get("content-length") === "0") {
		return undefined
	}
	try {
		return await response.json()
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		throw new FetchError(`${err?.message}: ${requestUrl}`, response, err)
	}
}
