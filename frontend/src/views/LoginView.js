import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { authService } from "../api/authService";

const LoginView = () => {
  const [successMessage, setSuccessMessage] = useState(""); // Agrega esta línea
  const navigate = useNavigate(); // Agrega esta línea
  const handleLogin = async (username, password) => {
    try {
      const response = await authService.login(username, password);
      // Manejar la respuesta del inicio de sesión
      // Por ejemplo, guardar el token en el almacenamiento local y redirigir al usuario
      setSuccessMessage(
        "Registro exitoso. Redirigiendo a la página principal..."
      );

      // Redirige al usuario después de 3 segundos
      setTimeout(() => {
        navigate("/apps/");
      }, 1500);

      console.log(response); // Muestra la respuesta o haz algo con ella
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      // Manejar errores de inicio de sesión aquí (mostrar mensaje de error, etc.)
    }
  };

  return (
    <div className="login-view">
      <h1>Inicia sesión con tu nombre de usuario</h1>
      <LoginForm onLogin={handleLogin} />
      {/* Otros elementos de la vista de inicio de sesión */}
    </div>
  );
};

export default LoginView;
