import express from "express"
import { getRandomRecipe, searchRecipeController,getRecipeById } from "../controllers/recipe.controller.js"



const recipeRouter = express.Router()


//route to get random recipe --
recipeRouter.get('/random-recipe', getRandomRecipe)

// route to search recipe by name --
recipeRouter.post('/search', searchRecipeController)

// Route to get recipe by ID
recipeRouter.get('/:id', getRecipeById);


export default recipeRouter;