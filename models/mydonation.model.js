import mongoose from 'mongoose';

const myDonationSchema = new mongoose.Schema(
    {
        campId: {
            type: String,
            required: true,
        },
        ownerUid:{
            type: String,
            required: true,
        },
        ammount:{
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

const myDonation = mongoose.model("Donations", myDonationSchema)

export default myDonation