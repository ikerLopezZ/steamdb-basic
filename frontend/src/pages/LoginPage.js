import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../api/authService";
import styles from "../styles/login-page.module.css";

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

  const handleNavigate = () => {
    navigate("/register");
  };

  return (
    <div className={styles.login}>
      <div className={styles.frame2}>
        <div className={styles["frame2-1"]}>
          <div className={styles["frame2-1-1"]}>
            <h1 className={styles["frame2-1-1-text1"]}>Inicia sesión</h1>
            <h1 className={styles["frame2-1-1-text2"]}>con tu nombre de usuario</h1>
          </div>
          <div className={styles["frame2-1-2"]}>
            <h1 className={styles["frame2-1-2-text1"]}>
              Si no tienes una cuenta regístrate
            </h1>
            <a className={styles["frame2-1-2-text2"]} onClick={handleNavigate}>
              <span>
                <span>¡Puedes</span>
                <span className={styles.span}>{` `}</span>
              </span>
              <span className={styles["registrarte-aqu"]}>registrarte aquí!</span>
            </a>
          </div>
        </div>
        <div className={styles["frame2-2"]}>
          <h1 className={styles["frame2-2-text"]}>Inicia sesión</h1>
          {/* Formulario de inicio de sesión */}
          <form className={styles["frame2-2-1"]} onSubmit={handleSubmit}>
            <div className={styles["frame2-2-1-1"]}>
              <input
                className={styles["frame2-2-1-1-1"]}
                placeholder="Nombre de usuario"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              {/*<input
            className="frame2-2-1-1-1"
            placeholder="Correo electrónico"
            type="email"
            value={email}
            onChange={(event) => setGroupInput1Value(event.target.value)}
/>*/}
              <input
                className={styles["frame2-2-1-1-1"]}
                placeholder="Contraseña"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button className={styles["frame2-2-1-2"]}>
              <div className={styles["frame2-2-1-2-text"]}>Iniciar sesión</div>
            </button>
            {/* Mensajes de error o éxito */}
            {errorMessage && (
              <div className={styles["error-message"]}>{errorMessage}</div>
            )}
            {successMessage && (
              <div className={styles["success-message"]}>{successMessage}</div>
            )}
          </form>
        </div>
      </div>
      <div className={styles.frame1}>
        <img
          className={styles["logo-combined-191a1e-icon"]}
          alt=""
          src="/logo-combined-191a1e@2x.png"
        />
        <img className={styles["sits-01-icon"]} alt="" src="/sits-01@2x.png" />
      </div>
    </div>
  );
};

export default LoginPage;
