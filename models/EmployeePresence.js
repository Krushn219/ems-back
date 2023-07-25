const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const employeePresenceSchema = new mongoose.Schema(
  {
    EmployeeName: String,
    EmployeeID: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
    presence: {
      date: String,
      present: { type: Boolean, default: 0 },
    },
  },
  { timestamps: true }
);

var Employee = mongoose.model("EmployeePresence", employeePresenceSchema);
module.exports = Employee;
