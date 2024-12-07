import mongoose from "mongoose";

const subscribeSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Subscribe = mongoose.model("Subscribers", subscribeSchema);

export default Subscribe;
