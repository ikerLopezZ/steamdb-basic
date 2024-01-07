const API_BASE_URL = "http://localhost:8080"; // URL del API Gateway

export const authService = {
  // Función para registrar nuevos usuarios
  register: async (email, username, completeName, password) => {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username, completeName, password }),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("Error de registro:", errorResponse);
      throw new Error("Falló el registro");
    }
    return await response.json();
  },

  // Función para autenticar usuarios y obtener un token de acceso
  login: async (username, password) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ username, password }),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("Error de inicio de sesión:", errorResponse);
      throw new Error("Falló el inicio de sesión");
    }
    const responseData = await response.json();
    localStorage.setItem("token", responseData.access_token); // Aquí podría estar el problema
    return responseData;
  },
};
