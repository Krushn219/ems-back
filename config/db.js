const mongoose = require("mongoose");

var DATABASEURL =
  "mongodb+srv://admin:admin@cluster0.gxtdmwa.mongodb.net/EMS-1";
var JWTKEY = "This is jwt Secter Key";

//connecting to mongodb
// mongoose.connect(process.env.DATABASEURL);
mongoose.connect(DATABASEURL);

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
