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
    <div className="locofylogin">
      <div className="frame-parent">
        <div className="inicia-sesin-parent">
          <h1 className="inicia-sesin">Inicia sesión</h1>
          <h1 className="con-tu-correo">con tu correo electrónico</h1>
        </div>
        <div className="si-no-tienes-una-cuenta-regst-parent">
          <div className="si-no-tienes">Si no tienes una cuenta regístrate</div>
          <div className="si-no-tienes">
            <span>
              <span>¡Puedes</span>
              <span className="span">{` `}</span>
            </span>
            <span className="regstrarte-aqu">regístrarte aquí!</span>
          </div>
        </div>
      </div>
      <img className="sits-01-3-icon" alt="" src="/sits-01-3@2x.png" />
      <img
        className="logo-combined-191a1e-2-icon"
        alt=""
        src="/logo-combined-191a1e-2@2x.png"
      />

      {/* Formulario de inicio de sesión */}
      <form onSubmit={handleSubmit} className="inicia-sesin-group">
        <h1 className="inicia-sesin1">Inicia sesión</h1>
        <div className="group-parent">
          {/* Campos de formulario */}
          <input
            className="group-item"
            placeholder="Nombre de usuario"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            className="group-child"
            placeholder="Contraseña"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {/*<input
            className="group-item"
            placeholder="Correo electrónico"
            type="email"
            value={groupInput1Value}
            onChange={(event) => setGroupInput1Value(event.target.value)}
/>*/}
        </div>
        <div className="has-olvidado-tu">¿Has olvidado tu contraseña?</div>
        <button className="rectangle-parent">
          <div className="group-inner" />
          <div className="registrarse">Iniciar sesión</div>
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
