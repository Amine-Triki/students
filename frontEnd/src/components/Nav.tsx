import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import {NavLink} from "react-router-dom";
import AmineLogo from "../assets/4-157-71-68080953ce2d3.webp";

const pages = ["Home", "Projects", "Skills", "Contact"];

function Nav() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static"   sx={{
            background: "linear-gradient(to right, #2c0c92, #ffffff)", 
          }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: "none", md: "flex"},
                            fontWeight: 700,
                            letterSpacing: ".2rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Amine Triki
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{display: {xs: "block", md: "none"}}}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <NavLink
                                        to={page.toLowerCase() === 'home' ? '/' : `/${page.toLowerCase()}`}
                                        style={({isActive}) => ({
                                            textDecoration: "none",
                                            color: isActive ? "yellow" : "black",
                                            width: "100%",
                                            textAlign: "center",
                                            padding: "8px 0",
                                            fontWeight: 600,
                                        })}
                                    >
                                        {page}
                                    </NavLink>
                                </MenuItem>
                            ))}
                        </Menu>

                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: {xs: "flex", md: "none"},
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: ".2rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Amine Triki
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {xs: "none", md: "flex"},
                            justifyContent: "center",
                        }}
                    >
                        {pages.map((page) => (
                            <NavLink
                                key={page}
                                to={page.toLowerCase() === 'home' ? '/' : `/${page.toLowerCase()}`}
                                style={({isActive}) => ({
                                    textDecoration: "none",
                                    color: isActive ? "yellow" : "white",
                                    margin: "0 10px",
                                    padding: "10px 15px",
                                    fontWeight: 700,
                                })}
                                onClick={handleCloseNavMenu}
                            >
                                {page}
                            </NavLink>
                        ))}
                    </Box>
                    <Box sx={{flexGrow: 0}}>
                        <img src={AmineLogo} alt="Amine Logo" style={{height: "40px"}}/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Nav;
