import { StrictMode } from "react"
import * as ReactDOM from "react-dom/client"

import "normalize.css"
import "./main.css"

import { App } from "./App"

declare global {
	interface Window {
		_app: {
			[k: string]: unknown
		}
	}
}
window._app = {}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<StrictMode>
		<App />
	</StrictMode>
)
