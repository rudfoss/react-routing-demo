import { AppBar, IconButton, Toolbar } from "@mui/material"
import React from "react"
import { MdHome } from "react-icons/md"
import { useNavigate } from "react-router-dom"

const MainMenuComponent = () => {
	const nav = useNavigate()
	const goToHome = () => {
		nav("/")
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
