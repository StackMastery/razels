import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoDBConnection from './db/db.js'
import { defaultRoute } from './routes/default.routes.js';

// Env Load in Application First
dotenv.config()

// Express
const app = express()
const port = process.env.PORT || 3000

// Middlewears
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes
app.use('/', defaultRoute)


mongoDBConnection()
    
app.listen(port, () => {
    console.log(`Server Running on ${port}`)
})