const mongoose = require("mongoose");

// Esquema para la información de las aplicaciones de Steam
const AppSchema = new mongoose.Schema({
  appID: Number,
  name: String,
  type: String,
  osList: String,
  clientIcon: String,
  iconURL: String,
  headerImage: String,
  releaseState: String,

  // Información de idiomas y soporte
  languages: [String],
  controllerSupport: String,
  supportedLanguages: [String],

  // Información de género y categorización
  primaryGenre: String,
  genres: [String],

  // Fechas y detalles de publicación
  steamReleaseDate: String,
  developer: String,
  publisher: String,

  // Información adicional
  isFreeApp: Boolean,
  installDir: String,

  // Información de reseñas
  reviewScore: String,
  reviewPercentage: String,
});

module.exports = mongoose.model("App", AppSchema);
