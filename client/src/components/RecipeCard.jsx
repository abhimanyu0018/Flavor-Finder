import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/recipe/${recipe.idMeal}`);
  };

  return (
    <Card onClick={handleCardClick} style={{ cursor: "pointer" }}>
      <CardMedia
        component="img"
        alt={recipe.strMeal}
        height="140"
        image={recipe.strMealThumb}
      />
      <CardContent>
        <Typography variant="h6">{recipe.strMeal}</Typography>
        <Typography variant="body2" color="textSecondary">
          {recipe.strInstructions.slice(0, 100)}...
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
