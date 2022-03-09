const app = require("./app");
const PORT = process.env.PORT
const databaseConnect = require('./config/database')

databaseConnect ()

app.listen(process.env.PORT,()=>{
    console.log(`server is working on port:http://localhost:${PORT}`)
})