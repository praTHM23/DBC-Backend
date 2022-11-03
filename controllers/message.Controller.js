const Message = require("../models/messages")

const express = require("express");
const messageRouter = express.Router();

messageRouter.post("/", async(req, res) => {

    const newMessage = new Message(req.body);

    try {
      const savedMessage = await newMessage.save();
      res.status(200).json(savedMessage);
    } catch (err) {
      res.status(500).json(err);
    }
});

messageRouter.get("/", async(req, res) => {

    try {
        const messages = await Message.find({
          conversationId: req.params.conversationId,
        });
        res.status(200).json(messages);
      } catch (err) {
        res.status(500).json(err);
      }
});

module.exports= messageRouter;