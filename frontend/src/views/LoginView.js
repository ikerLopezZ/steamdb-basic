import React from "react";
import LoginForm from "../components/LoginForm";

const LoginView = () => {
  const handleLogin = async (email, password) => {
    try {
      const response = await authService.login(email, password);
      // Manejar la respuesta del inicio de sesión
      // Por ejemplo, guardar el token en el almacenamiento local y redirigir al usuario

      console.log(response); // Muestra la respuesta o haz algo con ella
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      // Manejar errores de inicio de sesión aquí (mostrar mensaje de error, etc.)
    }
  };

  return (
    <div className="login-view">
      <h1>Inicia sesión con tu correo electrónico</h1>
      <LoginForm onLogin={handleLogin} />
      {/* Otros elementos de la vista de inicio de sesión */}
    </div>
  );
};

export default LoginView;
