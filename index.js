const { connectToMongo } = require("./db");
const express = require('express')

// Connect to mongoDb 
connectToMongo();

const app = express()
app.use(express.json())


const port = 8181

// Available Routes
app.use('/api/auth',require('./routes/auth'))


app.listen(port,()=>{
    console.log(`Login API listning at http://localhost:${port}`)
})
