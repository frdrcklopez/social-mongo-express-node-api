import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './modules/routes/userRoutes.js'
import tweetRoutes from './modules/routes/tweetRoutes.js'
import { errorHandler } from './modules/middleware/errorMiddleware.js'
import connectDB from './modules/config/db.js'

//Set always to top to read the ENV setup
dotenv.config()

connectDB()

const app = express()
const PORT = process.env.PORT || 5000

// body parser for raw json data
app.use(express.json())
//parser for url encoded
app.use(express.urlencoded({ extended : false }))

app.use('/api/users', userRoutes)
app.use('/api/tweets', tweetRoutes);

app.use(errorHandler)

app.listen(
    PORT, 
    () => console.log(`Server is running on port ${PORT}`)
)
