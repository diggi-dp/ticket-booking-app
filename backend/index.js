const express = require('express')
const cors = require('cors')
const connectMongoDB = require('./db')
const router = require('./src/routes/ticketRoute.js')
require('dotenv').config()


const app = express()
connectMongoDB()

app.use(cors())
app.use(express.json())
app.use(router)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Server is running port', `http://localhost:${PORT}`)
})