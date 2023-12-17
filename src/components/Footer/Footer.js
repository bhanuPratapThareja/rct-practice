import classes from "./Footer.module.css"
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export const Footer = () => {
    return (
        <Box className={classes.footer}>
            <AppBar position="static" >
                <Toolbar className={classes.toolbar}>
                    <Typography component="p" sx={{ flexGrow: 1 }}>
                        @copyright
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}