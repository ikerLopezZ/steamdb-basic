const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const app = express();

app.use('/docs', createProxyMiddleware({ target: 'http://localhost:8000', changeOrigin: true }));
app.use('/openapi.json', createProxyMiddleware({ target: 'http://localhost:8000', changeOrigin: true }));

// Enrutamiento para el microservicio de información de las apps en Node.js
app.use('/apps', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));
app.use('/:appID', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));
app.use('/search', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));

// Enrutamiento para el microservicio de autenticación en FastAPI
app.use('/users/', createProxyMiddleware({ target: 'http://localhost:8000', changeOrigin: true }));
app.use('/token', createProxyMiddleware({ target: 'http://localhost:8000', changeOrigin: true }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`API Gateway escuchando en el puerto ${PORT}`);
});
