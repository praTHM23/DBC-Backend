// const express=require('express')

// const userRouter=require('../routes/user.routes')

// const router=express.Router()

// router.use('/user',userRouter)
// module.exports=userRouter

const express = require("express");
const router=express.Router()
const userRouter= require("../controllers/user.Controller") ;
const messageRouter= require("../controllers/message.Controller") ;
const conversationRouter= require("../controllers/conversation.Controller") ;





router.use("/user", userRouter);
router.use("/message",messageRouter);
router.use("/conversation", conversationRouter);



module.exports=router