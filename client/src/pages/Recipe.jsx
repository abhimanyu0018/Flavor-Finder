import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { useTheme } from "../context/ThemeContext"; // Import useTheme hook

const RecipeSearch = () => {
  const { isDark } = useTheme(); // Use the theme context to get darkMode state
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    // For now, mock the recipe fetching process
    const mockRecipes = [
      {
        id: 1,
        title: "Spaghetti Bolognese",
        image: "https://via.placeholder.com/150",
        description: "A classic Italian pasta dish with rich, meaty sauce.",
      },
      {
        id: 2,
        title: "Chicken Curry",
        image: "https://via.placeholder.com/150",
        description:
          "A flavorful and spicy chicken curry with a hint of coconut.",
      },
      // Add more mock recipes as needed
    ];

    // Filter recipes based on the query (this is a simple mock filter)
    const filteredRecipes = mockRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
    );

    setRecipes(filteredRecipes);
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
        <Grid container spacing={2} style={{ marginTop: "2rem" }}>
          {recipes.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.id}>
              <Card>
                <CardMedia
                  component="img"
                  alt={recipe.title}
                  height="140"
                  image={recipe.image}
                />
                <CardContent>
                  <Typography variant="h6">{recipe.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {recipe.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default RecipeSearch;
