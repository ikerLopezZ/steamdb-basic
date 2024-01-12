import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAppDetails } from "../api/steamAppInfoService";
import "../styles/app-page-responsive.css";

const AppPage = () => {
  const { appID } = useParams();
  const [appDetails, setAppDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getAppDetails(appID);

        // Construyendo la URL de la imagen
        const imageURL = `https://cdn.cloudflare.steamstatic.com/steam/apps/${appID}/header.jpg`;

        // Actualizando el estado con todos los detalles y la URL de la imagen
        setAppDetails({ ...data, headerImage: imageURL });
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
    <div className="app">
      <img
        className="logo-combined-191a1e-icon"
        alt=""
        src="/logo-combined-191a1e@2x.png"
      />
      <div className="frame3">
        <h1 className="frame3-nombre">{appDetails.name}</h1>
      </div>
      <img className="header-image-icon" alt="" src={appDetails.headerImage} />
      <div className="frame1">
        <h1 className="frame3-nombre">ID de aplicación:</h1>
        <h1 className="frame3-nombre">Tipo de aplicación:</h1>
        <h1 className="frame3-nombre">Desarrollador:</h1>
        <h1 className="frame3-nombre">Editor:</h1>
        <h1 className="frame3-nombre">Sistemas compatibles:</h1>
        <h1 className="frame3-nombre">Estado de lanzamiento:</h1>
        <h1 className="frame3-nombre">Soporte de mando:</h1>
        <h1 className="frame3-nombre">Idiomas disponibles:</h1>
        <h1 className="frame3-nombre">Aplicación gratuita:</h1>
        <h1 className="frame3-nombre">Puntuación:</h1>
        <h1 className="frame3-nombre">Porcentaje:</h1>
      </div>
      <div className="frame2">
        <h1 className="frame3-nombre">{appDetails.appID}</h1>
        <h1 className="frame3-nombre">{appDetails.type}</h1>
        <h1 className="frame3-nombre">{appDetails.developer}</h1>
        <h1 className="frame3-nombre">{appDetails.publisher}</h1>
        <h1 className="frame3-nombre">{appDetails.osList}</h1>
        <h1 className="frame3-nombre">{appDetails.releaseState}</h1>
        <h1 className="frame3-nombre">{appDetails.controllerSupport}</h1>
        <h1 className="frame3-nombre">
          {appDetails.supportedLanguages.join(", ")}
        </h1>
        <h1 className="frame3-nombre">{appDetails.isFreeApp ? "Yes" : "No"}</h1>
        <h1 className="frame3-nombre">{appDetails.reviewScore}</h1>
        <h1 className="frame3-nombre">{appDetails.reviewPercentage}%</h1>
      </div>
      <img className="sits-01-icon" alt="" src="/sits-01@2x.png" />
    </div>
  );
};

export default AppPage;
