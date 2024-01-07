import React, { useState } from "react";
import "../styles/LoginForm.css";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="form-footer">
        <a href="/forgot-password">¿Has olvidado tu contraseña?</a>
        <button type="submit">Iniciar sesión</button>
      </div>
      <p>
        Si no tienes una cuenta, <a href="/register">¡regístrate aquí!</a>
      </p>
    </form>
  );
};

export default LoginForm;
