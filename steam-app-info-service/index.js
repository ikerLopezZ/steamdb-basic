const express = require('express');
const appRoutes = require('./app/routes/appRoutes');
const connectDB = require('./config/db');
const fetchAndStoreApps = require('./services/steamService');
// const path = require('path');
// const swaggerUi = require('swagger-ui-express');
// const YAML = require('yamljs');
require('dotenv').config();

// const swaggerDocument = YAML.load(path.join(__dirname, 'openapi.yaml'));
const app = express();
app.use(express.json());

// Establecer la conexión a la base de datos
connectDB();

// Obtener y almacenar información de juegos de Steam
fetchAndStoreApps();

// Rutas de la aplicación
app.use('/', appRoutes);

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
