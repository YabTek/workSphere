const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoute = require('./routes/authRoutes');
const jobRoute = require('./routes/jobRoutes');
const freelancerRoute = require('./routes/freelancerRoutes');
const clientRoute = require('./routes/clientRoutes');
const applicationRoute = require('./routes/applicationRoutes');

dotenv.config()
const app = express();

const PORT = process.env.PORT 

mongoose.connect("mongodb://127.0.0.1/workSphere")
.then(()=>console.log("connected to mongoDB"))
.catch(err=>console.log(err))

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use('/api/users', authRoute)
app.use('/api/jobs', jobRoute)
app.use('/api/freelancers', freelancerRoute)
app.use('/api/client', clientRoute)
app.use('/api/applications', applicationRoute)

app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`)
})