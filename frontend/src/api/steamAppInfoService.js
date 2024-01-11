const API_BASE_URL = "http://localhost:8080"; // URL del API Gateway

// Función para obtener todas las aplicaciones
export const getAllApps = async () => {
  const token = localStorage.getItem("token");

  // Configura los encabezados de la solicitud para incluir el token de autorización
  const headers = new Headers({
    Authorization: `Bearer ${token}`,
  });

  const response = await fetch(`${API_BASE_URL}/apps`, {
    method: "GET",
    headers: headers,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

// Función para obtener detalles de una aplicación específica por su ID
export const getAppDetails = async (appID) => {
  const token = localStorage.getItem("token");

  const headers = new Headers({
    Authorization: `Bearer ${token}`,
  });

  const response = await fetch(`${API_BASE_URL}/apps/${appID}`, {
    method: "GET",
    headers: headers,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

// Función para buscar aplicaciones por término
export const searchApps = async (searchTerm) => {
  const token = localStorage.getItem("token");
  const headers = new Headers({
    Authorization: `Bearer ${token}`,
  });

  const response = await fetch(
    `${API_BASE_URL}/apps/search?name=${encodeURIComponent(searchTerm)}`,
    {
      method: "GET",
      headers: headers,
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};
