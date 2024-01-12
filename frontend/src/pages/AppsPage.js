import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllApps } from "../api/steamAppInfoService";
import "../styles/apps-page.css";
// import styles from "../styles/apps-page.module.css";

const AppsPage = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const data = await getAllApps();
        setApps(data);
      } catch (error) {
        console.error("Error fetching apps:", error);
      }
    };

    fetchApps();
  });

  return (
    <div className="apps-container">
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

export default AppsPage;
