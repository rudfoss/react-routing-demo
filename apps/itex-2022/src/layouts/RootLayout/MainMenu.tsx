import { AppBar, IconButton, Toolbar } from "@mui/material"
import React from "react"
import { MdHome } from "react-icons/md"

const MainMenuComponent = () => {
	return (
		<AppBar position="static" sx={{ width: "100%" }}>
			<Toolbar>
				<IconButton>
					<MdHome />
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}

export const MainMenu = React.memo(MainMenuComponent) as unknown as typeof MainMenuComponent
