var express = require("express"),
  mongoose = require("mongoose"),
  Joi = require("joi"),
  jwt = require("jsonwebtoken");
require("dotenv").config();
const PORT = process.env.PORT || 4001;
const app = express();
const db = require("./config/db");
var cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/error");
const Employee = require("./models/Employee");
const ApiFeatures = require("./utils/apifeatures");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

//for request body
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(errorMiddleware);

app.get("/", async (req, res) => {
  try {
    const employee = await Employee.find();

    return res.status(200).json({
      success: true,
      employee,
    });
  } catch (error) {
    console.log("error+++", error);
  }
});

//Log IN
app.use("/api", require("./routes/Login"));

app.use("/api/role", require("./routes/Role"));
app.use("/api/position", require("./routes/Position"));
app.use("/api/department", require("./routes/Department"));
app.use("/api/project", require("./routes/Project"));
app.use("/api/salary", require("./routes/Salary"));
app.use("/api/education", require("./routes/Education"));
app.use("/api/family_info", require("./routes/FamilyInfo"));
app.use("/api/work", require("./routes/WorkExperience"));
app.use("/api/leave", require("./routes/LeaveApplication"));
app.use("/api/employee", require("./routes/Employee"));
app.use("/api/employeePresence", require("./routes/EmployeePresence"));

app.listen(PORT, function (err) {
  if (err) {
    console.log("Something Went Wrong...");
  }
  console.log("Server is Running on PORT::", PORT);
});
