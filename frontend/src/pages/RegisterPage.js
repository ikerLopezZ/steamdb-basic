import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../api/authService";
import "../styles/register-page.css";

const RegisterPage = () => {
  // Estados para el formulario de registro
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [completeName, setCompleteName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Estado para manejar mensajes de error
  const [successMessage, setSuccessMessage] = useState(""); // Estado para manejar mensajes de éxito

  const navigate = useNavigate();

  const handleRegister = async (email, username, completeName, password) => {
    try {
      const response = await authService.register(email, username, completeName, password);
      setSuccessMessage(
        "Registro exitoso. Redirigiendo a la página de inicio de sesión..."
      );
      
      setTimeout(() => {
        navigate("/login");
      }, 1500);

      console.log(response); // Manejo de la respuesta
    } catch (error) {
      console.error("Error en el registro:", error);
      setErrorMessage("Error al registrarse. Por favor, intente de nuevo."); // Manejo de error
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      handleRegister(email, username, completeName, password);
    } else {
      setErrorMessage("Las contraseñas no coinciden.");
    }
  };

  return (
    <div className="locofyregister">
      {/* Formulario de registro */}
      <form onSubmit={handleSubmit} className="regstrate-parent">
        <h1 className="regstrate">Regístrate</h1>
        <div className="group-container">
          {/* Campos de formulario */}
          <input
            className="group-input"
            placeholder="Confirmar contraseña"
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <input
            className="group-child1"
            placeholder="Contraseña"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            className="group-child2"
            placeholder="Nombre completo"
            type="text"
            value={completeName}
            onChange={(event) => setCompleteName(event.target.value)}
          />
          <input
            className="group-child3"
            placeholder="Nombre de usuario"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            className="group-child4"
            placeholder="Correo electrónico"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button className="rectangle-group">
          <div className="rectangle-div" />
          <div className="registrarse1">Registrarse</div>
        </button>
        {/* Mensajes de error o éxito */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
      </form>

      {/* Otros elementos de la vista */}
      <div className="frame-group">
        <div className="regstrate-group">
          <h1 className="regstrate1">Regístrate</h1>
          <h1 className="introduciendo-tus-datos">introduciendo tus datos</h1>
        </div>
        <div className="si-ya-tienes-una-cuenta-inicia-parent">
          <div className="si-ya-tienes">
            Si ya tienes una cuenta inicia sesión
          </div>
          <a className="puedes-iniciar-sesin-container">
            <span>
              <span>¡Puedes</span>
              <span className="span1">{` `}</span>
            </span>
            <span className="iniciar-sesin-aqu">iniciar sesión aquí!</span>
          </a>
        </div>
      </div>
      <img className="sits-01-3-icon1" alt="" src="/sits-01-3@2x.png" />
      <img
        className="logo-combined-191a1e-2-icon1"
        alt=""
        src="/logo-combined-191a1e-2@2x.png"
      />
    </div>
  );
};

export default RegisterPage;
