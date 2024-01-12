import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../api/authService";
import "../styles/register-page.css";

const RegisterPage = () => {
  // Estados para el formulario de registro
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [completeName, setCompleteName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Estado para manejar mensajes de error
  const [successMessage, setSuccessMessage] = useState(""); // Estado para manejar mensajes de éxito

  const navigate = useNavigate();

  const handleRegister = async (email, username, completeName, password) => {
    try {
      const response = await authService.register(
        email,
        username,
        completeName,
        password
      );
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
    <div className="register">
      <img className="sits-01-icon" alt="" src="/sits-01@2x.png" />
      <img
        className="logo-combined-191a1e-icon"
        alt=""
        src="/logo-combined-191a1e@2x.png"
      />

      <div className="frame1">
        <div className="frame1-1">
          <h1 className="frame1-1-registrate">Regístrate</h1>
          <h1 className="frame1-1-introduciendo-tus-dat">
            introduciendo tus datos
          </h1>
        </div>
        <div className="frame1-2">
          <div className="frame1-2-si-ya-tienes-una-cuen">
            Si ya tienes una cuenta inicia sesión
          </div>
          <a className="frame1-2-puedes-iniciar-sesion">
            <span>
              <span>¡Puedes</span>
              <span className="span">{` `}</span>
            </span>
            <span className="iniciar-sesin-aqu">iniciar sesión aquí!</span>
          </a>
        </div>
      </div>

      {/* Formulario de registro */}
      <form onSubmit={handleSubmit} className="frame2">
        <h1 className="frame2-registrate">Regístrate</h1>
        <div className="frame2-group1">
          <input
            className="frame2-group1-1"
            placeholder="Correo electrónico"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="frame2-group1-2"
            placeholder="Nombre de usuario"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            className="frame2-group1-3"
            placeholder="Nombre completo"
            type="text"
            value={completeName}
            onChange={(event) => setCompleteName(event.target.value)}
          />
          <input
            className="frame2-group1-4"
            placeholder="Contraseña"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            className="frame2-group1-5"
            placeholder="Confirmar contraseña"
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <button className="frame2-group2">
          <div className="frame2-group2-rectangle" />
          <div className="frame2-group2-registrarse">Registrarse</div>
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

export default RegisterPage;
