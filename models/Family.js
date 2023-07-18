const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const Joi = require("joi");

const familyInfoSchema = new mongoose.Schema(
  {
    Name: { type: String, trim: true, required: true },
    Relationship: { type: String, trim: true, required: true },
    DOB: { type: String, trim: true, required: true },
    Occupation: { type: String, trim: true, required: true },
  },
  { timestamps: true }
);
familyInfoSchema.plugin(autoIncrement.plugin, {
  model: "FamilyInfo",
  field: "FamilyInfoID",
});

const FamilyInfoValidation = Joi.object().keys({
  Name: Joi.string().max(200).required(),
  Relationship: Joi.string().max(200).required(),
  DOB: Joi.date().required(),
  Occupation: Joi.string().max(100).required(),
});

const FamilyInfo = mongoose.model("FamilyInfo", familyInfoSchema);
module.exports = FamilyInfo;
