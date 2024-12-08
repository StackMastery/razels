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

const corsOptions = {
    origin: `${process.env.ALLOWED_ORIGIN}`,
    methods: 'GET,POST,PUT,PATCH,DELETE', 
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}
// Middlewears
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes
app.use('/', defaultRoute)


mongoDBConnection()
    
app.listen(port, () => {
    console.log(`Server Running on ${port}`)
})