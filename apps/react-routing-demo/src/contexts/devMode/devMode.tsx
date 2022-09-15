import { createContextUser } from "@app/utils/createContextUser"
import { useBrowserStore } from "@app/utils/useBrowserStore"
import { useShortcut } from "@app/utils/useShortcut"
import React, { createContext } from "react"

/**
 * This context controls whether dev mode is enabled. Used to show/hide developer tools.
 */
interface DevModeContextProps {
	devModeEnabled: boolean
	setDevMode: (mode?: boolean) => unknown
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DevModeContext = createContext<DevModeContextProps>(undefined as any)
DevModeContext.displayName = "DevModeContext"

export const useDevMode = createContextUser(DevModeContext)

interface DevModeProviderProps {
	children: React.ReactNode
}

const DevModeProviderComponent = ({ children }: DevModeProviderProps) => {
	const [devModeEnabled, setEnabled] = useBrowserStore("wfe-devMode", false)
	const setDevMode = (mode?: boolean) => {
		if (mode === undefined) {
			mode = !devModeEnabled
		}
		setEnabled(mode)
	}

	useShortcut("Ctrl+Alt+D", () => setDevMode())

	return <DevModeContext.Provider value={{ devModeEnabled, setDevMode }}>{children}</DevModeContext.Provider>
}

export const DevModeProvider = React.memo(DevModeProviderComponent)
