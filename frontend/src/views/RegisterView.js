import React from "react";
import RegisterForm from "../components/RegisterForm";

const RegisterView = () => {
  const handleRegister = async (email, username, completeName, password) => {
    try {
      await authService.register(email, username, password);
      // Establece el mensaje de éxito
      setSuccessMessage(
        "Registro exitoso. Redirigiendo a la página de inicio de sesión..."
      );

      // Redirige al usuario después de 3 segundos
      setTimeout(() => {
        navigate("/login");
      }, 3000);
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
