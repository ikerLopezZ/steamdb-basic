const API_BASE_URL = 'http://localhost:8080'; // Ajusta según sea necesario

export const searchApps = async (searchTerm) => {
  const token = localStorage.getItem('token');

  // Configura los encabezados de la solicitud para incluir el token de autorización
  const headers = new Headers({
    'Authorization': `Bearer ${token}`
  });

  const response = await fetch(`${API_BASE_URL}/apps/search?name=${searchTerm}`, {
    method: 'GET',
    headers: headers
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

export const getAppDetails = async (appID) => {
  const token = localStorage.getItem('token');

  // Configura los encabezados de la solicitud para incluir el token de autorización
  const headers = new Headers({
    'Authorization': `Bearer ${token}`
  });

  const response = await fetch(`${API_BASE_URL}/apps/${appID}`, {
    method: 'GET',
    headers: headers
  });
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

// Agrega aquí más funciones según necesites interactuar con otros endpoints

// ¡CUIDADO! AQUÍ EL EXPORT LO HACES INDIVIDUALMENTE
