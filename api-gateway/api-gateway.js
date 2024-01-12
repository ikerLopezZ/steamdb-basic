const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Configuración de CORS (Cross-Origin Resource Sharing)
app.use(
  cors({
    origin: "http://localhost:3000", // Permite solicitudes desde el frontend
    credentials: true,
  })
);

// Documentación y OpenAPI
app.use(
  "/docs",
  createProxyMiddleware({ target: "http://localhost:8000", changeOrigin: true })
);
app.use(
  "/openapi.json",
  createProxyMiddleware({ target: "http://localhost:8000", changeOrigin: true })
);

// Enrutamiento para el microservicio steam-app-info-service
app.use(
  "/apps",
  createProxyMiddleware({ target: "http://localhost:5000", changeOrigin: true })
);

// Enrutamiento para el microservicio auth_service
app.use(
  "/register",
  createProxyMiddleware({ target: "http://localhost:8000", changeOrigin: true })
);
app.use(
  "/login",
  createProxyMiddleware({ target: "http://localhost:8000", changeOrigin: true })
);

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack); // Log del error en la consola del servidor
  res.status(500).send("Algo salió mal"); // Respuesta para el cliente
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`API Gateway escuchando en el puerto ${PORT}`);
});
