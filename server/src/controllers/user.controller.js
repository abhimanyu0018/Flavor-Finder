import {User} from "../models/user.model.js";
import bcrypt from "bcrypt";
import validator from 'validator';


export const signupController = async (req,res) => {
    try {

        const {firstName,lastName, email, password} = req.body;

        if(!email || !firstName || !lastName || !password){
            return res.status(500).json({success: false,error: "All fields must be filled" })
        }

        if(!validator.isEmail(email)){
            return res.status(500).json({success: false,error: "Email is not valid" })
        }

        const existUser = await User.findOne({email})

        if(existUser) {
            return res.status(500).json({success: false,error: "Email already exists" })
            
        }


        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password,salt)

        // add user to database 
        const user = await User.create({firstName, lastName, email, password: hash})

        // console.log(user)     --------- for debug 

        return res.status(200).json({success: true,user})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error });
    }
   

}