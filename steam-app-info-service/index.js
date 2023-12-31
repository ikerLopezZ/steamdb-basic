const express = require("express");
const appRoutes = require("./src/routes/appRoutes");
const cors = require("cors"); // Añade esta línea
const connectDB = require("./config/db");
const fetchAndStoreApps = require("./services/steamService");
// const path = require('path');
// const swaggerUi = require('swagger-ui-express');
// const YAML = require('yamljs');
require("dotenv").config();

// const swaggerDocument = YAML.load(path.join(__dirname, 'openapi.yaml'));
const app = express();
app.use(express.json());

// Establecer la conexión a la base de datos
connectDB();

// Obtener y almacenar información de juegos de Steam
fetchAndStoreApps();

// Rutas de la aplicación
app.use("/apps", appRoutes);

// Configuración de CORS
app.use(
  cors({
    origin: "http://localhost:3000", // Asegúrate de permitir solicitudes desde el origen de tu frontend
  })
);

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
