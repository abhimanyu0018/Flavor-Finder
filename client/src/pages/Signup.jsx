import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
const Signup = () => {
  const { isDark } = useTheme();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    const userData = { firstName, lastName, email, password };

    console.log(userData);
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
            Sign Up
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  label="First Name"
                  fullWidth
                  required
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  label="Last Name"
                  fullWidth
                  required
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </Grid>
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#232323" }}
                  fullWidth
                  onClick={handleForm}
                >
                  Sign up
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography align="center">
                  Already have an account?{" "}
                  <Link to="/login" style={{ color: "inherit" }}>
                    Login
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

export default Signup;
