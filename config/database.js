const mongoose = require('mongoose')

const connectDatabase = ()=>{
    mongoose.connect(process.env.mongodb_URL,{
    })
    .then((con)=>console.log(`database connected to ${con.connection.host}`))
}

module.exports = connectDatabase