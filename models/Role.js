const mongoose = require("mongoose");
const Joi = require("joi");

const roleSchema = new mongoose.Schema(
  {
    RoleName: { type: String, trim: true, required: true },
    // company: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }],
  },
  { timestamps: true }
);

roleSchema.RoleValidation = Joi.object().keys({
  RoleName: Joi.string().max(200).required(),
  CompanyID: Joi.required(),
});

const Role = mongoose.model("Role", roleSchema);
module.exports = Role;
