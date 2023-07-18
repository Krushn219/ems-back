const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  CountryName: { type: String, required: true },
  states: [{ type: mongoose.Schema.Types.ObjectId, ref: "State" }],
});
countrySchema.plugin(autoIncrement.plugin, {
  model: "Country",
  field: "CountryID",
});

const Country = mongoose.model("Country", countrySchema);

const CountryValidation = Joi.object().keys({
  _id: Joi.optional(),
  CountryID: Joi.optional(),
  CountryName: Joi.string().max(200).required(),
});
