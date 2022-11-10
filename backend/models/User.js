const mongoose=require('mongoose')

const userschema= new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    age:{
        type:Number,
        required:false
    },
    role:{
        type:String,
        enum:["musician","band"],
        default:"musician"
    },
    password:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('User',userschema)