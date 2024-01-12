const express = require("express");
const cors = require("cors"); // Añade esta línea
const path = require('path');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');

// Configuraciones
const PORT = process.env.PORT || 5000;
require("dotenv").config();
const connectDB = require("./config/db");

// Rutas y servicios
const appRoutes = require("./src/routes/appRoutes");
const fetchAndStoreApps = require("./services/steamService");

const app = express();
app.use(express.json());

// Configuración de CORS
app.use(
  cors({
    origin: "http://localhost:3000", // Asegúrate de permitir solicitudes desde el origen de tu frontend
  })
);

// Establecer la conexión a la base de datos
connectDB();

// Obtener y almacenar información de juegos de Steam
fetchAndStoreApps();

// Rutas de la aplicación
app.use("/apps", appRoutes);

// Configuración de Swagger UI
const swaggerDocument = YAML.load(path.join(__dirname, 'docs', 'openapi.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
