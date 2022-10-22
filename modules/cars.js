const mongoose = require("mongoose");

const schema = mongoose.Schema;

const carsSchema = new schema({
  marque: { type: String },
  model: { type: String },
  prix: { type: String },
  gouvernorat: { type: String },
  Mise_en_circulation: { type: String },
  Puissance_fiscale: { type: String },
  Kilometrage: { type: String },
  Carburant: { type: String },
  Boîte_de_vitesse: { type: String },
  Téléphone: { type: String },
  Description: { type: String },
  image1: { type: String },
  image2: { type: String },
  image3: { type: String },
});

const CARS = mongoose.model("CARS", carsSchema);

module.exports = CARS;
