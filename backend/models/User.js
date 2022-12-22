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
        type:String,
    },
    age:{
        type:String,
    },
    description:{
        type:String,
        
       },

       videoUrl:{
        type:String
                
         },

    role:{
        type:String,
        
        required:true
    },
    password:{
        type:String,
        required:true
    }

})
module.exports=mongoose.model('User',userschema)