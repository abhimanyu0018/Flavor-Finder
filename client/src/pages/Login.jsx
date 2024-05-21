import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

const LoginPage = () => {
  const { isDark } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    const userDate = { email, password };
    console.log(userDate);
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
