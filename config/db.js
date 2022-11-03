// DB connection goes here
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();



exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB Connected");
  } catch (err) {
    console.log(err);
  }
};


