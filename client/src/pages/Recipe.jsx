import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { useTheme } from "../context/ThemeContext";
import RecipeCard from "../components/RecipeCard";
import RandomRecipe from "../components/RandomRecipe";

const RecipeSearch = () => {
  const { isDark } = useTheme();
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSearch = async () => {
    try {
      setError(null);
      setLoading(true);

      const response = await fetch(`${apiUrl}/api/recipe/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipeName: query }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || "Failed to fetch recipes");
      }

      setRecipes(result.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: isDark ? "#232323" : "#e3f2fd",
        color: isDark ? "#FFFFFF" : "#000000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Search for Recipes
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              variant="outlined"
              label="Search Recipes"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              sx={{ backgroundColor: "#FFFFFF" }}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleSearch}>
              Search
            </Button>
          </Grid>
        </Grid>
        {error && (
          <Typography variant="body1" color="error" align="center" gutterBottom>
            {error}
          </Typography>
        )}
        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={4}
          >
            <CircularProgress />
          </Box>
        ) : recipes.length > 0 ? (
          <Grid container spacing={2} style={{ marginTop: "2rem" }}>
            {recipes.map((recipe) => (
              <Grid item xs={12} sm={6} md={4} key={recipe.idMeal}>
                <RecipeCard recipe={recipe} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <RandomRecipe apiUrl={apiUrl} />
        )}
      </Container>
    </Box>
  );
};

export default RecipeSearch;
