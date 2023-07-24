const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const Joi = require("joi");

const employeePresenceSchema = new mongoose.Schema(
  {
    EmployeeName: String,
    EmployeeID: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
    presence: {
      date: { type: Date, default: Date.now() },
      present: { type: Boolean, default: 0 },
    },
  },
  { timestamps: true }
);

var Employee = mongoose.model("EmployeePresence", employeePresenceSchema);
module.exports = Employee;
