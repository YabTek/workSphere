const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');

dotenv.config()
const app = express();

const PORT = process.env.PORT || 5000

mongoose.connect("mongodb://127.0.0.1/workSphere")
.then(()=>console.log("connected to mongoDB"))
.catch(err=>console.log(err))

app.use(express.json({limit: "10mb"}))
app.use(morgan("dev"))

app.use("/",(req,res) => {
    res.send("hello world")
})
app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`)
})