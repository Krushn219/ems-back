const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  CityName: { type: String, required: true },
  state: [{ type: mongoose.Schema.Types.ObjectId, ref: "State" }],
});
citySchema.plugin(autoIncrement.plugin, {
  model: "City",
  field: "CityID",
});
const City = mongoose.model("City", citySchema);

const CityValidation = Joi.object().keys({
  _id: Joi.optional(),
  StateID: Joi.optional(),
  CityName: Joi.string().max(200).required(),
});
