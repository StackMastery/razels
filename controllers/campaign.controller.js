import Campaign from '../models/campaign.model.js';
import myDonation from '../models/mydonation.model.js';

const addCampaign = async (req, res) => {

    const { thumb_URL, campTitle, campCategory , campMinAmmount, campDeadline, campDes, UserName, UserEmail, UserAvatar, OwnerUid  } = req.body

    try{
        const campaign = new Campaign({
            thumb: thumb_URL,
            title: campTitle,
            category: campCategory,
            minAmmount: campMinAmmount,
            deadline: campDeadline, 
            description: campDes,
            userName: UserName,
            userEmail: UserEmail,
            userAvatar: UserAvatar,
            ownerUid: OwnerUid
        })

        const resCampaign = await campaign.save()
        res.status(200).send({
            campId: resCampaign._id,
            msg: "Succesfuly Campaign Added"
        })
    }
    catch(err){
        res.status(401).send(err)
    }
}

const getCampaign = async (req, res) => {

    const { campId } = req.query

    try{
        const camp = await Campaign.findById(`${campId}`)
        if(camp?._id){
            res.status(200).send(camp)
        }
        else{
            res.status(401).send({
                code: 404,
                msg: 'Something Went Wrong Campaign Not Found'
            })
        }
    }
    catch(err){
        res.status(401).send({
            code: 404,
            msg: 'Something Went Wrong Campaign Not Found'
        })
    }
}


const getCampaignForHome = async (req, res) => {

    const { limit } = req.query

    try{
        const camps = await Campaign.find().limit(limit).sort({createdAt: -1})
        res.send(camps)
    }
    catch{

    }
}


const addDonations = async (req, res) => {
    const { CampId, OwnerUID, Ammount } = req.body
    try{
        const donation = myDonation({
            campId: CampId,
            ownerUid: OwnerUID,
            ammount: Ammount
        })

        const addDonation = await donation.save()
        res.status(200).send(addDonation)
    }
    catch(err){
        res.send(err)
    }
}
 
const myCampaigns = async (req, res) => {
    const { ownerUID } = req.query

    try{
        const findCamps = await Campaign.find({ ownerUid : ownerUID})
        if(findCamps.length > 0){
            res.status(200).send(findCamps)
        }else{
            res.status(404).send({
                code: 404,
                msg: `No campaigns stored by this ${ownerUID}`
            })
        }
    }
    catch(err){
        res.status(404).send({
            code: 404,
            msg: `No campaigns stored by this ${ownerUID}`
        })
    }
}

const deleteCampaign = async (req, res) => {
    const { ownerUID, campId } = req.body
    try{
        const camp = await Campaign.deleteOne({_id: campId, ownerUid: ownerUID})
        if(camp?.deletedCount > 0){
            res.status.send(camp)
        }
        else{
            res.status(404).send({
                code: 404,
                msg: 'Delete Unsuccesfull'
            })
        }
    }   
    catch(err){
        res.send(err)
    }
}

const updatecampaign = async (req, res) => {

    const { campId , thumb_URL, campTitle, campCategory , campMinAmmount, campDeadline, campDes, UserName, UserEmail, UserAvatar, OwnerUid  } = req.body
    
    try{
        const updateCampaign = await Campaign.findByIdAndUpdate(`${campId}`,{
            thumb: thumb_URL,
            title: campTitle,
            category: campCategory,
            minAmmount: campMinAmmount,
            deadline: campDeadline, 
            description: campDes,
        }, { new: true, overwrite: false } )

        res.send(updateCampaign)
    }
    catch(err){

    }
}

export { addCampaign, getCampaign, getCampaignForHome, addDonations, myCampaigns, deleteCampaign, updatecampaign }
