const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const Joi = require("joi");

const departmentSchema = new mongoose.Schema(
  {
    DepartmentName: { type: String, trim: true, required: true },
    // company: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }],
  },
  { timestamps: true }
);
departmentSchema.plugin(autoIncrement.plugin, {
  model: "Department",
  field: "DepartmentID",
});

const DepartmentValidation = Joi.object().keys({
  DepartmentName: Joi.string().max(200).required(),
  CompanyID: Joi.required(),
});

const Department = mongoose.model("Department", departmentSchema);
module.exports = Department;
