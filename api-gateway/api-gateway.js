const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Configuración de CORS
app.use(
  cors({
    origin: "http://localhost:3000", // Permite solicitudes desde el frontend
    credentials: true, // Opcional, si necesitas enviar cookies o headers de autenticación
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
// app.use('/:appID', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));
// app.use('/search', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));

// Enrutamiento para el microservicio auth_service
app.use(
  "/register",
  createProxyMiddleware({ target: "http://localhost:8000", changeOrigin: true })
);
app.use(
  "/login",
  createProxyMiddleware({ target: "http://localhost:8000", changeOrigin: true })
);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`API Gateway escuchando en el puerto ${PORT}`);
});
