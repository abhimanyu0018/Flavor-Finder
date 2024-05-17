import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true
    },
    favorites: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dish"
    }
})


export const User = mongoose.model("User",userSchema)