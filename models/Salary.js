const mongoose = require("mongoose");

const salarySchema = new mongoose.Schema(
  {
    BasicSalary: { type: String, required: true },
    BankName: { type: String, required: true, trim: true },
    AccountNo: { type: String, required: true },
    AccountHolderName: { type: String, required: true, trim: true },
    IFSCcode: { type: String, required: true, trim: true },
    TaxDeduction: { type: String, required: true },
    Employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  },
  { timestamps: true }
);

const Salary = mongoose.model("Salary", salarySchema);
module.exports = Salary;
