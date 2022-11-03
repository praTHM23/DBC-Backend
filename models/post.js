const mongoose  = require("mongoose");

const PostSchema =  mongoose.Schema({
  user_id: String,
  title: { type: String, required: true},
  photo:String,
  description: String,
  category: String,
  price: String

},
{
  timestamps: true 
});

const Post= mongoose.model('Post', PostSchema);

module.exports= Post;

