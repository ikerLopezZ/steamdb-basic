import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import { authService } from "../api/authService";

const RegisterView = () => {
  const [successMessage, setSuccessMessage] = useState(""); // Agrega esta línea
  const navigate = useNavigate(); // Agrega esta línea
  const handleRegister = async (email, username, completeName, password) => {
    try {
      await authService.register(email, username, completeName, password);
      // Establece el mensaje de éxito
      setSuccessMessage(
        "Registro exitoso. Redirigiendo a la página de inicio de sesión..."
      );

      // Redirige al usuario después de 3 segundos
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.error("Error en el registro:", error);
      // Manejar errores de registro aquí
    }
  };

  return (
    <div className="register-view">
      <h1>Regístrate introduciendo tus datos</h1>
      <RegisterForm onRegister={handleRegister} />
      {/* Otros elementos de la vista de registro */}
    </div>
  );
};

export default RegisterView;
