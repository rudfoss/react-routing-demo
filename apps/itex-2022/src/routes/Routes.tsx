import { Typography } from "@mui/material"
import React from "react"

const RoutesComponent = () => <Typography variant="h1">Hello world</Typography>

export const Routes = React.memo(RoutesComponent) as unknown as typeof RoutesComponent
