const mongoose = require("mongoose");
const Joi = require("joi");

const leaveApplicationSchema = new mongoose.Schema(
  {
    Leavetype: { type: String, trim: true, required: true },
    FromDate: { type: Date, required: true },
    ToDate: { type: Date, required: true },
    Reasonforleave: { type: String, trim: true, required: true },
    Status: { type: String, required: true },
    employee: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
  },
  { timestamps: true }
);

const LeaveApplicationHRValidation = Joi.object().keys({
  Status: Joi.number().max(3).required(),
});

const LeaveApplicationValidation = Joi.object().keys({
  Leavetype: Joi.string().max(100).required(),

  FromDate: Joi.date().required(),
  ToDate: Joi.date().required(),
  Reasonforleave: Joi.string().max(100).required(),
  Status: Joi.number().max(1).required(),
});

const LeaveApplication = mongoose.model(
  "LeaveApplication",
  leaveApplicationSchema
);
module.exports = LeaveApplication;
