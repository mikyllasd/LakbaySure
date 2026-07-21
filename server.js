const express = require ('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect ('mongodb://localhost:27017/lakbaysure')
.then (()=>{
    console.log('Connected to MongoDB!')
})
.catch((error)=>{
    console.log('Failed to connect to MongoDB:',error.message)
})

app.use(express.static('public'))
app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})