const mongoose = require("mongoose");

var stateSchema = new mongoose.Schema({
  StateName: { type: String, required: true },
  country: [{ type: mongoose.Schema.Types.ObjectId, ref: "Country" }],
  cities: [{ type: mongoose.Schema.Types.ObjectId, ref: "City" }],
});
stateSchema.plugin(autoIncrement.plugin, {
  model: "State",
  field: "StateID",
});
var State = mongoose.model("State", stateSchema);

const StateValidation = Joi.object().keys({
  _id: Joi.optional(),
  CountryID: Joi.optional(),
  StateName: Joi.string().max(200).required(),
});
