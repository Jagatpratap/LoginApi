const { connectToMongo } = require("./db");
const express = require('express')
var cors = require('cors')

// Connect to mongoDb 
connectToMongo();

const app = express()
app.use(cors())
app.use(express.json())


const port = 8181

// Available Routes
app.use('/api/auth',require('./routes/auth'))


app.listen(port,()=>{
    console.log(`Login API listning at http://localhost:${port}`)
})
