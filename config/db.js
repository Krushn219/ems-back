const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Use native ES6 promises (preferred)
mongoose.Promise = global.Promise;

//connecting to mongodb
mongoose.connect(process.env.DATABASEURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error..!!"));

db.once("open", function () {
  console.log("Connected Successfully...");
});

module.exports = db;
