const API_BASE_URL = 'http://localhost:8000'; // Ajusta según sea necesario

export const authService = {
  login: async (username, password) => {
    const response = await fetch(`${API_BASE_URL}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
    });
    if (!response.ok) {
      throw new Error('Falló el inicio de sesión');
    }
    return await response.json();
  },
  
  register: async (username, email, password) => {
    const response = await fetch(`${API_BASE_URL}/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });
    if (!response.ok) {
      throw new Error('Falló el registro');
    }
    return await response.json();
  },
};
