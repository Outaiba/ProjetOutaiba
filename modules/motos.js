const mongoose = require("mongoose");

const schema = mongoose.Schema;

const motoSchema = new schema({
  marque: { type: String },
  Kilometrage: { type: String },
  Téléphone: { type: String },
  prix: { type: String },
  gouvernorat: { type: String },
  Description: { type: String },
  image1: { type: String },
  image2: { type: String },
  image3: { type: String },
});

const MOTOS = mongoose.model("MOTOS", motoSchema);

module.exports = MOTOS;
