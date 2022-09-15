import { AppBar, IconButton, Toolbar } from "@mui/material"
import React from "react"
import { MdHome } from "react-icons/md"

const MainMenuComponent = () => {
	const goToHome = () => {
		window.location.href = "/"
	}

	return (
		<AppBar position="static" sx={{ width: "100%" }}>
			<Toolbar>
				<IconButton onClick={goToHome}>
					<MdHome />
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}

export const MainMenu = React.memo(MainMenuComponent)
