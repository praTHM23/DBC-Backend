// const express = require("express");
// const User = require('../models/user');


// exports.get_users = async (req, res) => {
//   console.log('hi')
//   try {
//     const users = await User.find();
//     res.send(users);
//   }
//   catch (err) {
//     throw err;
//   }
// };

// exports.get_user = async (req, res) => {
//   try {
//     const id = req.params.id;
//     let user = await User.findById(id); // to get the user having the specified id from the database

//     res.send(user);
//   } catch (err) {
//     throw err;
//   }
// };

// exports.post_user = async (req, res) => {
//   try {

//     let user = await new User(req.body); // to get the user having the specified id from the database

//     user.save();
//     res.send("user added")
//   } catch (err) {
//     throw err;
//   }
// };
// exports.put_user = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const user = await User.findOneAndUpdate(id, req.body);
//     res.send("user updated")
//   } catch (err) {
//     throw err;
//   }
// };
// exports.delete_user = async (req, res) => {

//   try {
//     const id = req.params.id;
//     const user = await User.findByIdAndDelete(id);
//     res.send("user deleted")
//   } catch (err) {
//     throw err;
//   }
// };

const cloudinary=require('../utils/cloudinary')
const express = require("express");
const User = require("../models/user.js");
const bcrypt=require('bcrypt');

const userRouter = express.Router();




userRouter.get("/", async(req, res) => {
    try {
        const users = await User.find();
        
        res.send(users);
        }
        catch (err) {
        throw err;
      }
  });
 
  userRouter.get("/:id", async(req, res) => {
    try {
        const id = req.params.id;
        let user = await User.findById(id); // to get the user having the specified id from the database
  
      res.send(user);
    } catch (err) {
      throw err;
    }
  });

  userRouter.post("/", async(req, res,next) => {
    try {
      // console.log(req.body)
      // const result = await cloudinary.uploader.upload(req.file.path, {
      //   resource_type: "auto"
      // })

      let user = await new User({
        username: req.body.username,
        // profile_pic: result.secure_url,
        // contact: req.body.contact,
        password: req.body.password,
        email: req.body.email,
        // id_card: result.secure_url,
        college: req.body.college,
        rating: req.body.rating
      }); // to get the user having the specified id from the database

      user.save();
      res.send("user added")
    } catch (err) {
      throw err;
    }
  });
userRouter.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOneAndUpdate(id, req.body);
    res.send("user updated")
  } catch (err) {
    throw err;
  }
});

userRouter.post('/login',async(req,res)=>{


  // User.findOne({'username':req.body.username},function(err,User){
  //   User.comparepassword(req.body.password,(err,isMatch)=>{
  //     if(!isMatch) return res.json({ message : "password doesn't match"});
  const username=req.body.username
  const password=req.body.password

  const user= await User.findOne({username:username})
  if(!user){
      res.send('unable to Sigin in')
  }
  // console.log(user.password)
  const ismatch=await bcrypt.compare(password,user.password)
  if(!ismatch)
  {
       res.send('unable to Sigin in')
  }
  else{
    res.send('User logged in')
  }

  })



  userRouter.delete("/:id", async(req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
       res.send("user deleted")
    } catch (err) {
      throw err;
    }
  });


module.exports= userRouter;