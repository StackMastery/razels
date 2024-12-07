import express from 'express'
import { subscribeController } from '../controllers/subscribe.controller.js'
import { addCampaign, addDonations, deleteCampaign, getCampaign, getCampaignForHome, myCampaigns, updatecampaign } from '../controllers/campaign.controller.js'

export const defaultRoute = express.Router()

// Routes
defaultRoute.post('/subscribe', subscribeController) // Subscribe Newsletter
defaultRoute.post('/api/campaign/add', addCampaign) // Campaign Add controller
defaultRoute.get('/api/campaign', getCampaign) // Campaign Add controller
defaultRoute.get('/api/campaigns', getCampaignForHome) // Ge campaign with limit For Home
defaultRoute.post('/api/donation', addDonations), // Adding Donation
defaultRoute.get('/api/allcampaigns', myCampaigns) // Geting All Campaign by Owner UID
defaultRoute.delete('/api/deletecampaign', deleteCampaign) // Delete Campaign By Campaign Id
defaultRoute.patch('/api/updatecampaign', updatecampaign)


