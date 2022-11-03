// const express=require('express')

// const userRouter=require('../routes/user.routes')

// const router=express.Router()

// router.use('/user',userRouter)
// module.exports=userRouter

const express = require("express");
const router=express.Router()
const upload=require('../utils/multer')
const userRouter= require("../controllers/user.Controller") ;
const messageRouter= require("../controllers/message.Controller") ;
const conversationRouter= require("../controllers/conversation.Controller") ;
const postRouter=require('../controllers/post.Controller')




router.use("/user", upload.single('id_card'),userRouter);

router.use("/message",messageRouter);
router.use("/conversation", conversationRouter);
router.use('/post',upload.single('photo'),postRouter)
// router.use('/post',postRouter)


module.exports=router