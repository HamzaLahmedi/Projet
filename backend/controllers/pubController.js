const Pub = require("../models/Publication")
exports.createPub=async(req,res)=>{
    const {title,duree,prix}=req.body
    try {
        
        //check pub
        const checkpub= await Pub.findOne({title})
        if (checkpub){
            return res.status(401).json({errors:[{msg:"pub already exists"}]})
        }
        const pub= new Pub({
            title,duree,prix
        })
        
        await pub.save()

       


        res.status(201).json({pub,msg:"pub created",pub})
    } catch (error) {
        res.status(500).send('server error')
    }
}



exports.allPubs=async(req,res)=>{
    try {
        const pubs=await Pub.find()
        res.status(200).send({msg:"all pubs",pubs})
    } catch (error) {
        res.status(500).send("server error");
    }
    }


    exports.deletePub=async(req,res)=>{
        const {id}=req.params
        try {
            await Pub.findByIdAndDelete(id)
            res.status(200).send("pub deleted")
        } catch (error) {
            res.status(500).send("server error");
        }
    }

    exports.updatePub=async(req,res)=>{
        const {id}=req.params
        try {
            const updatePub=await Pub.findByIdAndUpdate(id,{$set:{...req.body}},{new:true});
            res.status(200).send({msg:"pub updated",updatePub})
        } catch (error) {
            res.status(500).send("server error");
        }
    }


    exports.getOnePub=async(req,res)=>{
        const {id}=req.params
        try {
            const pub = await Pub.findById(id)
            res.status(200).send(pub)
        } catch (error) {
            res.status(500).send("server error");
        }
    }