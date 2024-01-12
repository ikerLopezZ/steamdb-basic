const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

/**
 * Middleware para verificar el token JWT en la solicitud.
 * Si el token es válido, el usuario se añade al objeto de solicitud.
 * Si no es válido, se devuelve un error 401.
 */
const verificarToken = (req, res, next) => {
  // Extraer el token del encabezado "Authorization"
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(403).send("Se requiere un token para la autenticación");
  }

  try {
    // Decodificar y verificar el token
    const decoded = jwt.verify(token, SECRET_KEY);
    req.usuario = decoded;
    next();
  } catch (error) {
    // Manejar error de token no válido
    return res.status(401).send("Token no válido");
  }
};

module.exports = verificarToken;
