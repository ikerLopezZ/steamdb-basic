import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../api/authService";
import "../styles/login-page.css";

const LoginPage = () => {
  // Estados para el formulario de inicio de sesión
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Estado para manejar mensajes de error
  const [successMessage, setSuccessMessage] = useState(""); // Estado para manejar mensajes de éxito

  const navigate = useNavigate();

  const handleLogin = async (username, password) => {
    try {
      const response = await authService.login(username, password);
      setSuccessMessage(
        "Inicio de sesión exitoso. Redirigiendo a la página principal..."
      );

      setTimeout(() => {
        navigate("/apps/");
      }, 1500);

      console.log(response); // Manejo de la respuesta
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      setErrorMessage("Error al registrarse. Por favor, intente de nuevo."); // Manejo de error
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div className="login">
      <img className="sits-01-icon" alt="" src="/sits-01@2x.png" />
      <img
        className="logo-combined-191a1e-icon"
        alt=""
        src="/logo-combined-191a1e@2x.png"
      />

      <div className="frame1">
        <div className="frame1-1">
          <h1 className="frame1-1-inicia-sesion">Inicia sesión</h1>
          <h1 className="frame1-1-con-tu-nombre-de-usua">
            con tu nombre de usuario
          </h1>
        </div>
        <div className="frame1-2">
          <div className="frame1-2-si-no-tienes-una-cuen">
            Si no tienes una cuenta regístrate
          </div>
          <a className="frame1-2-puedes-registrarte-aq">
            <span>
              <span>¡Puedes</span>
              <span className="span">{` `}</span>
            </span>
            <span className="regstrarte-aqu">regístrarte aquí!</span>
          </a>
        </div>
      </div>

      {/* Formulario de inicio de sesión */}
      <form onSubmit={handleSubmit} className="frame2">
        <h1 className="frame2-inicia-sesion">Inicia sesión</h1>
        <div className="frame2-group1">
          <input
            className="frame2-group1-1"
            placeholder="Nombre de usuario"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          {/*<input
            className="group-item"
            placeholder="Correo electrónico"
            type="email"
            value={groupInput1Value}
            onChange={(event) => setGroupInput1Value(event.target.value)}
/>*/}
          <input
            className="frame2-group1-2"
            placeholder="Contraseña"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="frame2-group2">
          <div className="frame2-group2-rectangle" />
          <div className="frame2-group2-iniciar-sesion">Iniciar sesión</div>
        </button>
        {/* Mensajes de error o éxito */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
