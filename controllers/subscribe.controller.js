import SubscribeUser from '../models/subscribe.model.js';
const subscribeController = async (req, res) => {
    try{
        const email = new SubscribeUser({
            email: req.body.email
        })

        const user = await email.save()
        res.status(200).send(user)
    }
    catch(err){
        if(err.code === 11000){
            res.status(400).send({
                code: 11000,
                msg: 'This Email Alredy Exist'
            })
        }
        else{
            res.status(400).send(err)
        }

    }
}

export { subscribeController }
