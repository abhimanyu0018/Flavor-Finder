import mongoose from "mongoose"

const dishSchema = new mongoose.Schema(
    {
        addedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },

    }
)


export const Dish = mongoose.model("Dish",dishSchema);