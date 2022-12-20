require('dotenv').config()

const express=require('express')
const app=express()
const connectDB=require('./config/connectDB')
const authRouter=require('./routes/auth.js')
const pubRouter=require('./routes/pubRoute.js')
const cors=require("cors")
const port=process.env.PORT || 5000



// data base connection
connectDB()

// middleware
app.use(express.json())
app.use(cors({
    origin:'http://localhost:3000', 
    credentials:false,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}))
app.use('/',authRouter)

app.use('/api/pubRoute',pubRouter)

app.listen(port,()=>console.log(`http://localhost:${port}`))