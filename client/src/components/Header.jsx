import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext"; // Import useAuth
import logo from "../assets/logo.png";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Switch,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth(); // Get auth state and logout function from context
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      color={isDark ? "primary" : "default"}
      style={{ backgroundColor: isDark ? "#232323" : "" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img src={logo} width="60px" alt="Logo" />
          </Link>
        </Typography>
        <Switch
          checked={isDark}
          onChange={toggleTheme}
          color="default"
          inputProps={{ "aria-label": "toggle dark mode" }}
        />
        <Box sx={{ display: "flex", gap: 1 }}>
          {isAuthenticated ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => navigate("/saves")}>Saves</MenuItem>
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  style={{ color: "#FFFFFF", backgroundColor: "#111111" }}
                >
                  Login
                </Button>
              </Link>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  color="inherit"
                  style={{ color: "#FFFFFF", backgroundColor: "#111111" }}
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
