const mongoose=require('mongoose')

const publicationschema= new mongoose.Schema({
   title:{
    type:String,
    required:true,
    unique:true
},
   duree:{
    type:String,
    required:true
   },
   prix:{
    type:Number,
    required:true
   },
   userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
}
})
module.exports=mongoose.model('Publication',publicationschema)