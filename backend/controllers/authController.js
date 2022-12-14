const User = require("../models/User")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signUp=async(req,res)=>{
    console.log(req.body)
    
    const {userName,email,password,description,role,age,phone}=req.body
    try {
        //check user
        const checkuser= await User.findOne({email})
        if (checkuser){
            return res.status(401).json({errors:[{msg:"user already exists"}]})
        }
        const user= new User({
            userName,email,password,description,role,age,phone
        })
        user.password=await bcrypt.hash(password,10)
        await user.save()

        // generate token
        const payload={
            id:user._id
        }
        const token = jwt.sign(payload,process.env.secret_key,{expiresIn:'3d'});


        res.status(201).json({user,msg:"user created",token})
    } catch (error) {
        res.status(500).send('server error')
    }
}

exports.signIn=async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({errors:[{msg:"bad cridentials"}]})
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({errors:[{msg:"bad cridentials"}]})
        }
                // generate token
                const payload={
                    id:user._id
                }
                const token = jwt.sign(payload,process.env.secret_key,{expiresIn:'3d'});
        
        
                res.status(200).json({user,msg:"login with success",token})
    } catch (error) {
        res.status(500).send('server error')
    }
}

exports.current=async(req,res)=>{

    try {
        const user=await User.findById(req.user.id).lean()
        const {password,...rest}=user
        res.send(rest)
    } catch (error) {
        res.status(500).send('server error')
  
    }
}
exports.allUsers=async(req,res)=>{
    try {
        const users=await User.find()
        res.status(200).send({msg:"all users",users})
    } catch (error) {
        res.status(500).send("server error");
    }
    }

    exports.deleteUser=async(req,res)=>{
        const {id}=req.params
        try {
            await User.findByIdAndDelete(id)
            res.status(200).send("user deleted")
        } catch (error) {
            res.status(500).send("server error");
        }
    }

    exports.updateUser=async(req,res)=>{
        const {id}=req.params
        try {
            const updateUser=await User.findByIdAndUpdate(id,{$set:{...req.body}},{ new: true });
            res.status(200).send({msg:"user updated",updateUser})
        } catch (error) {
            res.status(500).send("server error");
        }
    }

    exports.getOneUser=async(req,res)=>{
        const {id}=req.params
        try {
            const user = await User.findById(id)
            res.status(200).send(user)
        } catch (error) {
            res.status(500).send("server error");
        }
    }


