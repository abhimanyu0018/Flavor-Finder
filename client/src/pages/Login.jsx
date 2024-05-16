import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div style={{ height: "100vh", background: "#464646", color: "#FFFFFF" }}>
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
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  style={{ backgroundColor: "#232323" }}
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