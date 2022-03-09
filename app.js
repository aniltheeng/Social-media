const express = require('express')
const app = express()

if(process.env.NODE_ENV !== "production"){
    require("dotenv").config({ path:"backend/config/config.env"})
}

const cookieParser = require('cookie-parser')

// using middlewares
app.use(express.json())
app.use(cookieParser())

// here we can also use express.bodyParser.urlEncoded
// app.use(bodyParser().urlencoded({extended:true}))

app.use(express.urlencoded({extended:true}))

// routes import
const post = require('./routes/postRoute')
const user = require('./routes/userRoute')

// using route
app.use('/app',post)
app.use('/app',user)

module.exports = app