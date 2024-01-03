const API_BASE_URL = 'http://localhost:8000'; // Ajusta según sea necesario

export const searchApps = async (searchTerm) => {
  const response = await fetch(`${API_BASE_URL}/apps/search?name=${searchTerm}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

export const getAppDetails = async (appID) => {
  const response = await fetch(`${API_BASE_URL}/apps/${appID}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

// Agrega aquí más funciones según necesites interactuar con otros endpoints
