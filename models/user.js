// single participation model
const mongoose  = require("mongoose");

const UserSchema =  mongoose.Schema({
  username: { type: String, required: true },
  contact: { type: String, required: true},
  email: { type: String, required: true },
  id_card: String,
  college: String,
  rating: String

},
{
  timestamps: true 
});

const User= mongoose.model('User', UserSchema);

module.exports= User;