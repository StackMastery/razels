import mongoose from 'mongoose';

const myDonationSchema = new mongoose.Schema(
    {
        ownerUid:{
            type: String,
            required: true,
        },
        ammount:{
            type: Number,
            required: true,
        },
        campaign:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'campaigns',
            required: true
        }
    },
    {
        timestamps: true,
    }
)

const myDonation = mongoose.model("Donations", myDonationSchema)

export default myDonation