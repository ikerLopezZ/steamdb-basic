const App = require('../models/appModel');

exports.getAllApps = async (req, res) => {
  try {
    const apps = await App.find({});
    res.json(apps);
  } catch (error) {
    res.status(500).send('Error al obtener apps');
  }
};

exports.getAppDetails = async (req, res) => {
  try {
    const appID = parseInt(req.params.appID);
    const app = await App.findOne({ appID: appID });

    if (!app) {
      return res.status(404).send('App no encontrada');
    }

    res.json(app);
  } catch (error) {
    res.status(500).send('Error al obtener detalles de la app');
  }
};

exports.searchApps = async (req, res) => {
  try {
    const searchTerm = req.query.name;
    const regex = new RegExp(searchTerm, 'i');

    const apps = await App.find({ name: { $regex: regex } });
    res.json(apps);
  } catch (error) {
    res.status(500).send('Error en la búsqueda de apps');
  }
};
