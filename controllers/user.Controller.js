const express = require("express");
const User = require("../models/user.js");

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

  userRouter.post("/", async(req, res) => {
    try {

      let user = await new User(req.body); // to get the user having the specified id from the database
  
       user.save();
       res.send("user added")
    } catch (err) {
      throw err;
    }
  });
  userRouter.put("/:id", async(req, res) => {
    try {
    const id = req.params.id;
       const user  = await User.findOneAndUpdate(id, req.body);
       res.send("user updated")
    } catch (err) {
      throw err;
    }
  });

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