import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

const RandomRecipe = ({ apiUrl }) => {
  const [randomRecipe, setRandomRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomRecipe = async () => {
      try {
        setError(null);
        const response = await fetch(`${apiUrl}/api/recipe/random-recipe`);

        if (!response.ok) {
          throw new Error("Failed to fetch random recipe");
        }

        const result = await response.json();

        if (!result.success) {
          throw new Error(result.error || "Failed to fetch random recipe");
        }

        setRandomRecipe(result.data[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching random recipe:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRandomRecipe();
  }, [apiUrl]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="body1" color="error" align="center" gutterBottom>
        {error}
      </Typography>
    );
  }

  if (!randomRecipe) {
    return null;
  }

  return (
    <Box mt={4} mb={4}>
      <Typography variant="h5" align="center" gutterBottom>
        Random Recipe
      </Typography>
      <Card>
        <CardMedia
          component="img"
          alt={randomRecipe.strMeal}
          height="140"
          image={randomRecipe.strMealThumb}
        />
        <CardContent>
          <Typography variant="h6">{randomRecipe.strMeal}</Typography>
          <Typography variant="body2" color="textSecondary">
            {randomRecipe.strInstructions}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RandomRecipe;
