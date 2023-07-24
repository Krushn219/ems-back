const mongoose = require("mongoose");
const Joi = require("joi");

const departmentSchema = new mongoose.Schema(
  {
    DepartmentName: { type: String, trim: true, required: true },
    // company: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }],
  },
  { timestamps: true }
);

const DepartmentValidation = Joi.object().keys({
  DepartmentName: Joi.string().max(200).required(),
  CompanyID: Joi.required(),
});

const Department = mongoose.model("Department", departmentSchema);
module.exports = Department;
