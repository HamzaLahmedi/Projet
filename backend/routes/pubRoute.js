const express=require('express')
const { createPub, allPubs, deletePub, updatePub, getOnePub } = require('../controllers/pubController')
const router=express.Router()
const Pub = require("../models/Publication")


router.post('/createPub',createPub)

router.get('/allPubs',allPubs)


router.delete('/deletePub/:id',deletePub)


router.put('/updatePub/:id',updatePub)



router.get('/getOnePub/:id',getOnePub)
module.exports=router
