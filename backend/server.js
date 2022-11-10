require('dotenv').config()

const express=require('express')
const app=express()
const connectDB=require('./config/connectDB')
const authRouter=require('./routes/auth.js')
const port=process.env.PORT || 5000



// data base connection
connectDB()

// middleware
app.use(express.json())

app.use('/api/auth',authRouter)


app.listen(port,()=>console.log(`server running on port ${port}`))