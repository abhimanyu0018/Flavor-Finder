import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/logo.png";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Switch,
  Box,
} from "@mui/material";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <AppBar
      position="static"
      color={isDark ? "primary" : "default"}
      style={{ backgroundColor: isDark ? "#232323" : "" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img src={logo} width="60px" />
          </Link>
        </Typography>
        <Switch
          checked={isDark}
          onChange={toggleTheme}
          color="default"
          inputProps={{ "aria-label": "toggle dark mode" }}
        />
        <Box sx={{ display: "flex", gap: 1 }}>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button style={{ color: "#FFFFFF", backgroundColor: "#111111" }}>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
