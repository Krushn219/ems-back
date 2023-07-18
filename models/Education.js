const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const Joi = require("joi");

const educationSchema = new mongoose.Schema(
  {
    SchoolUniversity: { type: String, trim: true, required: true },
    Degree: { type: String, trim: true, required: true },
    Grade: { type: String, trim: true, required: true },
    PassingOfYear: { type: String, trim: true, required: true },
  },
  { timestamps: true }
);
educationSchema.plugin(autoIncrement.plugin, {
  model: "Education",
  field: "EducationID",
});

const EducationValidation = Joi.object().keys({
  SchoolUniversity: Joi.string().max(200).required(),
  Degree: Joi.string().max(200).required(),
  Grade: Joi.string().max(50).required(),
  PassingOfYear: Joi.string().max(10).required(),
});

const Education = mongoose.model("Education", educationSchema);
module.exports = Education;
