import React, { useState } from "react";
import "../styles/register-form.css";

const RegisterForm = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [completeName, setCompleteName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setError] = useState(""); // Agrega esta línea

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      onRegister(email, username, completeName, password, confirmPassword);
    } else {
      setError("Las contraseñas no coinciden.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nombre completo"
        value={completeName}
        onChange={(e) => setCompleteName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirmar contraseña"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <div className="form-footer">
        <button type="submit">Registrarse</button>
      </div>
      <p>Si ya tienes una cuenta inicia sesión</p>
      <p>
        ¡Puedes <a href="/login">iniciar sesión aquí</a>!
      </p>
    </form>
  );
};

export default RegisterForm;
