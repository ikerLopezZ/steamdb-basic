import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getAllApps, searchApps } from "../api/steamApi";
import SearchBar from "../components/SearchBar"; // Asegúrate de tener este componente y su archivo CSS correspondiente.
import "../styles/App.css";

const AppsView = () => {
  const [apps, setApps] = useState([]);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("name"); // Obtén el término de búsqueda desde la URL.

  useEffect(() => {
    const fetchApps = async () => {
      try {
        // Determina si debes buscar todas las apps o realizar una búsqueda por nombre.
        const data = searchTerm
          ? await searchApps(searchTerm)
          : await getAllApps();
        setApps(data);
      } catch (error) {
        console.error("Error fetching apps:", error);
      }
    };

    fetchApps();
  }, [searchTerm]); // Agrega searchTerm como dependencia del useEffect.

  return (
    <div className="apps-container">
      <SearchBar /> {/* Renderiza la barra de búsqueda */}
      {apps.map((app) => (
        <div key={app.appID} className="app-entry">
          <Link to={`/apps/${app.appID}`}>
            <img src={app.headerImage} alt={app.name} className="app-image" />
            <div className="app-info">
              <h3>{app.name}</h3>
              <p>{app.type}</p>
              <p>{app.primaryGenre}</p>
              <p>{app.steamReleaseDate}</p>
              {/* Agrega aquí otros datos que consideres relevantes */}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AppsView;
