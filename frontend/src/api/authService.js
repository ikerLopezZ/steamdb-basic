const API_BASE_URL = 'http://localhost:8080'; // Ajusta según sea necesario

export const authService = {
  login: async (username, password) => {
    const response = await fetch(`${API_BASE_URL}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
    });
    localStorage.setItem("token", response.data.access_token);
    if (!response.ok) {
      throw new Error('Falló el inicio de sesión');
    }
    return await response.json();
  },
  
  register: async (email, username, completeName, password) => {
    const response = await fetch(`${API_BASE_URL}/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, username, completeName, password }),
    });
    if (!response.ok) {
      throw new Error('Falló el registro');
    }
    return await response.json();
  },
};
