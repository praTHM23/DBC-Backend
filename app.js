const express = require("express");
const bodyParser = require("body-parser");
const {connectDB} = require("./config/db.js");
const router=require('./routes/index')

const app = express();

// JSON
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get("/", (req, res) => {
  res.send("I'm Working!!");
});
app.use(router)
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
//database connection

connectDB();
