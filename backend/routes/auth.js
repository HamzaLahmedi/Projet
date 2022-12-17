const express=require('express')
const { signUp, signIn, current, allUsers, deleteUser, updateUser, getOneUser } = require('../controllers/authController')
const User = require("../models/User")
const isAuth = require('../middleware/isAuth')
const { registerRules,validator, loginRules } = require('../middleware/validator')
const { findByIdAndUpdate } = require('../models/User')
const router=express.Router()

// create user and generate token
router.post('/signup',registerRules,validator,signUp)

router.post('/signin',loginRules,validator,signIn)

router.get('/current',isAuth,current)

router.get('/allUsers',allUsers)

router.delete('/deleteUser/:id',deleteUser)

router.put('/updateUser/:id',updateUser)

router.get('/getOneUser/:id',getOneUser)





module.exports=router