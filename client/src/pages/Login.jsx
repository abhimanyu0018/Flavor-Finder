import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const { isDark } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleForm = async (e) => {
    e.preventDefault();
    const userDate = { email, password };

    // console.log(userDate);

    try {
      const response = await fetch(`${apiUrl}/api/user/login`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(userDate),
      });

      if (!response.ok) {
        throw new Error("Network responsewas not ok");
      }

      const data = await response.json();
      // console.log(data);         ----for debug
      login(data.token);

      // console.log(localStorage.getItem("authToken"));   --------- for debug
      navigate("/recipe");
    } catch (error) {
      console.error("There was a problem with the login request:", error);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: isDark ? "#464646" : "",
        color: isDark ? "#FFFFFF" : "",
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ height: "100%" }}
      >
        <Grid item xs={10} sm={6} md={4} lg={3}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <form>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Email"
                  type="email"
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Password"
                  type="password"
                  fullWidth
                  required
                  style={{ color: "#FFFFFF" }}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  style={{ backgroundColor: "#111111" }}
                  onClick={handleForm}
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography align="center">
                  Don't have an account?{" "}
                  <Link to="/signup" style={{ color: "inherit" }}>
                    Sign up
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;
