const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const autoIncrement = require("mongoose-auto-increment");

//connecting to mongodb

mongoose.connect(process.env.DATABASEURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
autoIncrement.initialize(db);

db.on("error", console.error.bind(console, "Connection Error..!!"));

db.once("open", function () {
  console.log("Connected Successfully...");
});

module.exports = db;
