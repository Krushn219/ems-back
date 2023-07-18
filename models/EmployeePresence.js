const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const autoIncrement = require("mongoose-auto-increment");
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
employeePresenceSchema.plugin(autoIncrement.plugin, {
  model: "EmployeePresence",
  field: "EmployeePresence",
});

var Employee = mongoose.model("EmployeePresence", employeePresenceSchema);
module.exports = Employee;
