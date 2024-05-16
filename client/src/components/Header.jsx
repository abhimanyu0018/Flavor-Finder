import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Switch,
  Box,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar
      position="static"
      color={darkMode ? "default" : "primary"}
      style={{ backgroundColor: "#232323" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Flavor Finder
        </Typography>
        <Switch
          checked={darkMode}
          onChange={handleDarkModeToggle}
          color="default"
          inputProps={{ "aria-label": "toggle dark mode" }}
        />
        <Box sx={{ display: "flex", gap: 1 }}>
          {" "}
          {/* Add Box component to create space */}
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button color="inherit" style={{ backgroundColor: "#111111" }}>
              Login
            </Button>
          </Link>
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button color="inherit" style={{ backgroundColor: "#111111" }}>
              Sign Up
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
