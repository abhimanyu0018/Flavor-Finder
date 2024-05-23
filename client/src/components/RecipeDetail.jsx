import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  CircularProgress,
} from "@mui/material";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setError(null);
        setLoading(true);

        const response = await fetch(`${apiUrl}/api/recipe/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch recipe");
        }

        const result = await response.json();

        if (!result.success) {
          throw new Error(result.error || "Failed to fetch recipe");
        }

        setRecipe(result.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipe:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

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

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        {recipe.strMeal}
      </Typography>
      <Card>
        <CardMedia
          component="img"
          alt={recipe.strMeal}
          height="500"
          image={recipe.strMealThumb}
        />
        <CardContent>
          <Typography variant="h6">Category: {recipe.strCategory}</Typography>
          <Typography variant="h6">Area: {recipe.strArea}</Typography>
          <Typography variant="h6" gutterBottom>
            Ingredients:
          </Typography>
          <ul>
            {Object.keys(recipe)
              .filter((key) => key.startsWith("strIngredient") && recipe[key])
              .map((key) => (
                <li key={key}>
                  {recipe[key]} -{" "}
                  {recipe[`strMeasure${key.replace("strIngredient", "")}`]}
                </li>
              ))}
          </ul>
          <Typography variant="h6" gutterBottom>
            Instructions:
          </Typography>
          <Typography variant="body1">{recipe.strInstructions}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RecipeDetail;
