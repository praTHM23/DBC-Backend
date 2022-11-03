//routes goes here
const express = require("express");
const userRouter= require("../controllers/user.Controller.js") ;

const routes = express.Router();
routes.use("/user", userRouter);


module.exports= routes;
