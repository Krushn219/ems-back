const mongoose = require("mongoose");
const Joi = require("joi");

const positionSchema = new mongoose.Schema(
  {
    PositionName: { type: String, trim: true, required: true },
    // company: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }],
  },
  { timestamps: true }
);

//   model: "Position",
//   field: "PositionID",
// });

const PositionValidation = Joi.object().keys({
  PositionName: Joi.string().max(200).required(),
  CompanyID: Joi.required(),
});

const Position = mongoose.model("Position", positionSchema);
module.exports = Position;
