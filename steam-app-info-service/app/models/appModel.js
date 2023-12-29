const mongoose = require('mongoose');

const AppSchema = new mongoose.Schema({
  appID: Number,
  name: String,
  type: String,
  osList: String,
  clientIcon: String,
  iconURL: String,
  headerImage: String,
  releaseState: String,
  languages: [String],
  controllerSupport: String,
  primaryGenre: String,
  genres: [String],
  supportedLanguages: [String],
  steamReleaseDate: String,
  developer: String,
  publisher: String,
  isFreeApp: Boolean,
  installDir: String,
  reviewScore: String,
  reviewPercentage: String
});

module.exports = mongoose.model('App', AppSchema);