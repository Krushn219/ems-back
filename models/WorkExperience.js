const mongoose = require("mongoose");
const Joi = require("joi");

const workExperienceSchema = new mongoose.Schema(
  {
    CompanyName: { type: String, trim: true, required: true },
    Designation: { type: String, trim: true, required: true },
    FromDate: { type: Date, required: true },
    ToDate: { type: Date, required: true },
  },
  { timestamps: true }
);

const WorkExperienceValidation = Joi.object().keys({
  CompanyName: Joi.string().max(200).required(),
  Designation: Joi.string().max(200).required(),
  FromDate: Joi.date().required(),
  ToDate: Joi.date().required(),
});

const WorkExperience = mongoose.model("WorkExperience", workExperienceSchema);
module.exports = WorkExperience;
