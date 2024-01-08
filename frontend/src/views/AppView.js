import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAppDetails } from "../api/steamApi";
import "../styles/app.css"; // Asegúrate de que este archivo de estilos exista y esté configurado correctamente.

const AppView = () => {
  const { appID } = useParams();
  const [appDetails, setAppDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getAppDetails(appID);
        setAppDetails(data);
      } catch (error) {
        console.error("Error fetching app details:", error);
      }
    };

    fetchDetails();
  }, [appID]);

  if (!appDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-details">
      <h1>{appDetails.name}</h1>
      <img src={appDetails.headerImage} alt={appDetails.name} />
      <p>App ID: {appDetails.appID}</p>
      <p>Type: {appDetails.type}</p>
      <p>OS List: {appDetails.osList}</p>
      <p>Client Icon: {appDetails.clientIcon}</p>
      <p>Icon URL: {appDetails.iconURL}</p>
      <p>Release State: {appDetails.releaseState}</p>
      <p>Languages: {appDetails.languages.join(", ")}</p>
      <p>Controller Support: {appDetails.controllerSupport}</p>
      <p>Primary Genre: {appDetails.primaryGenre}</p>
      <p>Genres: {appDetails.genres.join(", ")}</p>
      <p>Supported Languages: {appDetails.supportedLanguages.join(", ")}</p>
      <p>Steam Release Date: {appDetails.steamReleaseDate}</p>
      <p>Developer: {appDetails.developer}</p>
      <p>Publisher: {appDetails.publisher}</p>
      <p>Is Free App: {appDetails.isFreeApp ? "Yes" : "No"}</p>
      <p>Install Dir: {appDetails.installDir}</p>
      <p>Review Score: {appDetails.reviewScore}</p>
      <p>Review Percentage: {appDetails.reviewPercentage}%</p>
      {/* Añade aquí más detalles si es necesario */}
    </div>
  );
};

export default AppView;
