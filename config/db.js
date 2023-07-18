const mongoose = require("mongoose");

//connecting to mongodb
mongoose.connect(process.env.DATABASEURL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error..!!"));

db.once("open", function () {
  console.log("Connected Successfully...");
});

module.exports = db;

// Not Use
// mongoose.set("useNewUrlParser", true);
// mongoose.set("useFindAndModify", false);
// mongoose.set("useCreateIndex", true);
// mongoose
//   .connect(mongoURI)
//   .then(() => console.log("db connection successful"))
//   .catch((err) => console.log(err));

// Create mongo connection
// const conn = mongoose.createConnection(mongoURI);
// autoIncrement.initialize(conn);
