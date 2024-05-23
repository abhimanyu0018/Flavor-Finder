import express from "express"
import { searchRecipeController } from "../controllers/recipe.controller.js"



const recipeRouter = express.Router()


recipeRouter.post('/search', searchRecipeController)



export default recipeRouter;