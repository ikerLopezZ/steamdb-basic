const jwt = require("jsonwebtoken");
const SECRET_KEY = "tu_clave_secreta_aqui"; // Asegúrate de que esta sea la misma clave utilizada en FastAPI

const verificarToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Extraer el token del encabezado 'Authorization'

  if (!token) {
    return res.status(403).send("Se requiere un token para la autenticación");
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.usuario = decoded;
    next();
  } catch (error) {
    return res.status(401).send("Token no válido");
  }
};

module.exports = verificarToken;
