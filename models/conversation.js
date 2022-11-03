
const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);

Conversation = mongoose.model("Conversation", ConversationSchema);
module.exports=Conversation