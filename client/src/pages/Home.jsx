import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          background: "#464646",
          color: "#FFFFFF",
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ height: "100%" }}
        >
          <Grid item xs={10} sm={8} md={6}>
            <Typography
              variant="h4"
              align="center"
              style={{ textTransform: "Uppercase" }}
              gutterBottom
            >
              Welcome to Flavor finder
            </Typography>
            <Grid container justifyContent="center">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#232323" }}
                >
                  Get Starteds
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
