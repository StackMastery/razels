import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema(
    {
        thumb: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        minAmmount: {
            type: Number, 
            default: 1,
            required: true,
        },
        deadline: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
        },
        userEmail: {
            type: String,
            required: true,
        },
        userAvatar: {
            type: String,
            required: true,
        },
        ownerUid: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Campaign = mongoose.model("campaigns", campaignSchema);

export default Campaign;
