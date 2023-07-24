const mongoose = require("mongoose");
const Joi = require("joi");

const salarySchema = new mongoose.Schema(
  {
    BasicSalary: { type: String, required: true },
    BankName: { type: String, required: true, trim: true },
    AccountNo: { type: String, required: true },
    AccountHolderName: { type: String, required: true, trim: true },
    IFSCcode: { type: String, required: true, trim: true },
    TaxDeduction: { type: String, required: true },
  },
  { timestamps: true }
);

const SalaryValidation = Joi.object().keys({
  BasicSalary: Joi.string().max(20).required(),
  BankName: Joi.string().max(200).required(),
  AccountNo: Joi.string().max(200).required(),
  AccountHolderName: Joi.string().max(200).required(),
  IFSCcode: Joi.string().max(200).required(),
  TaxDeduction: Joi.string().max(100).required(),
});

const Salary = mongoose.model("Salary", salarySchema);
module.exports = Salary;
