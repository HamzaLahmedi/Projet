const mongoose=require('mongoose')

const publicationschema= new mongoose.Schema({
   type:{
    type:String,
    required:true
   },
   duree:{
    type:Date,
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