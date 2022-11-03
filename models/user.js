// single participation model
const mongoose  = require("mongoose");
const bcrypt=require('bcrypt');

const UserSchema =  mongoose.Schema({
  username: { type: String, required: true },
  // profile_pic:{type: String},
  contact: { type: String, required: true},
  password:{type:String,required:true},
  email: { type: String, required: true },
  id_card: String,
  college: String,
  rating: String

},
{
  timestamps: true 
});


UserSchema.pre('save',async function(next){
    
  if(this.isModified('password'))
  {
      this.password=await bcrypt.hash(this.password,8) 
     
  }
  next()
}) 

UserSchema.methods.comparepassword=function(password,cb){
  bcrypt.compare(password,this.password,function(err,isMatch){
      if(err) return cb(next);
      cb(null,isMatch);
  });
}

const User= mongoose.model('User', UserSchema);

module.exports= User;