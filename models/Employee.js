const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const Joi = require("joi");

const employeeSchema = new mongoose.Schema(
  {
    FirstName: { type: String, trim: true, required: true },
    MiddleName: { type: String, trim: true, required: true },
    LastName: { type: String, trim: true, required: true },
    Email: { type: String, trim: true, required: true, unique: true },
    Password: { type: String, required: true },
    Gender: {
      type: String,
      trim: true,
      required: true,
      enum: ["Male", "Female"],
    },
    DOB: { type: Date, required: true },
    DateOfJoining: { type: Date, required: true },
    TerminateDate: { type: Date },
    Deleted: { type: Boolean, default: 0 },
    Photo: { type: String },
    ContactNo: { type: String, required: true },
    EmployeeCode: { type: String, required: true },
    // Account: { type: Number, required: true },
    Account: { type: String, required: true },
    role: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }],
    position: [{ type: mongoose.Schema.Types.ObjectId, ref: "Position" }],
    department: [{ type: mongoose.Schema.Types.ObjectId, ref: "Department" }],
    salary: [{ type: mongoose.Schema.Types.ObjectId, ref: "Salary" }],
    education: [{ type: mongoose.Schema.Types.ObjectId, ref: "Education" }],
    familyInfo: [{ type: mongoose.Schema.Types.ObjectId, ref: "FamilyInfo" }],
    workExperience: [
      { type: mongoose.Schema.Types.ObjectId, ref: "WorkExperience" },
    ],
    leaveApplication: [
      { type: mongoose.Schema.Types.ObjectId, ref: "LeaveApplication" },
    ],
    BloodGroup: { type: String },
    EmergencyContactNo: { type: String },
    Hobbies: { type: String },
    PANcardNo: { type: String },
    PermanentAddress: { type: String },
    PresentAddress: { type: String },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

//   model: "Employee",
//   field: "EmployeeID",
// });

employeeSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// JWT TOKEN
employeeSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Compare Password
employeeSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Generating Password Reset Token
employeeSchema.methods.getResetPasswordToken = function () {
  // Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");
  // Hashing and adding resetPasswordToken to adminSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

var Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
