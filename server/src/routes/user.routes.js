import express from "express";
import { loginController, signupController } from "../controllers/user.controller.js";

const userRounter = express.Router();



//route for user login
userRounter.post('/login', loginController )


// route for user signup
userRounter.post('/signup', signupController)


export default userRounter;