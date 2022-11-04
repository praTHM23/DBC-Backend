const express = require("express");
const Post = require("../models/post.js");
const postRouter = express.Router();
const cloudinary = require("../utils/cloudinary");

postRouter.get("/", async (req, res) => {
  try {
    const posts = await Post.find();

    res.send(posts);
  } catch (err) {
    throw err;
  }
});

postRouter.get("/:user_id", async (req, res, next) => {
  try {
    const user_id = req.params.user_id;

    let post = await Post.find({ user_id: user_id }, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.send(post);
      }
    }).clone();
  } catch (err) {
    throw err;
  }
});

postRouter.post("/", async (req, res, next) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto",
    });
    console.log(result);
    let post = await new Post({
      user_id: req.body.user_id,
      title: req.body.title,
      photo: result.url,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price,
    }); // to get the user having the specified id from the database

    post.save();
    res.send(post);
  } catch (err) {
    throw err;
  }
});
postRouter.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const post = await Post.findOneAndUpdate(id, req.body);
    res.send("post updated");
  } catch (err) {
    throw err;
  }
});

postRouter.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const post = await Post.findByIdAndDelete(id);
    res.send("post deleted");
  } catch (err) {
    throw err;
  }
});

module.exports = postRouter;
