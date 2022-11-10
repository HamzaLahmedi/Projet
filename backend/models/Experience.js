const mongoose=require('mongoose')

const experienceschema= new mongoose.Schema({
    role:{
        type:string,
        required:true
    },
    type:{
        type:string,
        required:true
    },
    description:{
        type:string,
        required:true
    },
    videoUrl:{
        type:string,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})
module.exports=mongoose.model('Experience',experienceschema)