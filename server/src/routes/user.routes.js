import express from "express";
import { signupController } from "../controllers/user.controller.js";

const userRounter = express.Router();



//route for user login
// userRounter.post('/login', fn )


// route for user signup
userRounter.post('/signup', signupController)


export default userRounter;