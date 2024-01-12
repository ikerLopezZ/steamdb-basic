import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAppDetails } from "../api/steamAppInfoService";
import styles from "../styles/app-page.module.css";

const AppPage = () => {
  const { appID } = useParams();
  const [appDetails, setAppDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getAppDetails(appID);

        // Construir la URL de la imagen
        const imageURL = `https://cdn.cloudflare.steamstatic.com/steam/apps/${appID}/header.jpg`;
        // Construir la URL del icono
        const iconURL = `https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/${appID}/${data.iconURL}.jpg`;

        // Actualizando el estado con todos los detalles y la URL de la imagen
        setAppDetails({ ...data, headerImage: imageURL, iconURL: iconURL });
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
    <div className={styles.app}>
      <div className={styles.frame0}>
        <div className={styles.frame1}>
          <img
            className={styles["logo-combined-191a1e-icon"]}
            alt=""
            src="/logo-combined-191a1e@2x.png"
          />
          <img className={styles["sits-01-icon"]} alt="" src="/sits-01@2x.png" />
        </div>
        <div className={styles.frame2}>
          <div className={styles["frame2-1"]}>
            <img
              className={styles["dbc71957312bbd3baea65848b545be-icon"]}
              alt=""
              src={appDetails.iconURL}
            />
            <h1 className={styles["frame2-1-text"]}>{appDetails.name}</h1>
          </div>
          <div className={styles["frame2-2"]}>
            <div className={styles["frame2-2-1"]}>
              <div className={styles["frame2-2-1-1"]}>
                <div className={styles["frame2-2-1-1-1"]}>
                  <h1 className={styles["frame2-2-1-1-1-text"]}>ID de aplicación</h1>
                </div>
                <div className={styles["frame2-2-1-1-2"]}>
                  <h1 className={styles["frame2-2-1-1-1-text"]}>Tipo de aplicación</h1>
                </div>
                <div className={styles["frame2-2-1-1-2"]}>
                  <h1 className={styles["frame2-2-1-1-1-text"]}>Desarrollador</h1>
                </div>
                <div className={styles["frame2-2-1-1-2"]}>
                  <h1 className={styles["frame2-2-1-1-1-text"]}>Editor</h1>
                </div>
                <div className={styles["frame2-2-1-1-2"]}>
                  <h1 className={styles["frame2-2-1-1-1-text"]}>Sistemas compatibles</h1>
                </div>
                <div className={styles["frame2-2-1-1-2"]}>
                  <h1 className={styles["frame2-2-1-1-1-text"]}>Estado de lanzamiento</h1>
                </div>
                <div className={styles["frame2-2-1-1-2"]}>
                  <h1 className={styles["frame2-2-1-1-1-text"]}>Soporte de mando</h1>
                </div>
                <div className={styles["frame2-2-1-1-2"]}>
                  <h1 className={styles["frame2-2-1-1-1-text"]}>Idiomas disponibles</h1>
                </div>
                <div className={styles["frame2-2-1-1-9"]}>
                  <h1 className={styles["frame2-2-1-1-1-text"]}>Aplicación gratuita</h1>
                </div>
              </div>
              <div className={styles["frame2-2-1-2"]}>
                <div className={styles["frame2-2-1-2-1"]}>
                  <h1 className={styles["frame2-2-1-1-1-text"]}>{appDetails.appID}</h1>
                </div>
                <div className={styles["frame2-2-1-1-2"]}>
                  <h1 className={styles["frame2-2-1-1-1-text"]}>{appDetails.type}</h1>
                </div>
                <div className={styles["frame2-2-1-1-2"]}>
                  <h1 className={styles["frame2-2-1-1-1-text"]}>{appDetails.developer}</h1>
                </div>
                <div className={styles["frame2-2-1-1-2"]}>
                  <h1 className={styles["frame2-2-1-1-1-text"]}>{appDetails.publisher}</h1>
                </div>
                <div className={styles["frame2-2-1-1-2"]}>
                  <h1 className={styles["frame2-2-1-1-1-text"]}>{appDetails.osList}</h1>
                </div>
                <div className={styles["frame2-2-1-1-2"]}>
                  <h1 className={styles["frame2-2-1-1-1-text"]}>{appDetails.releaseState}</h1>
                </div>
                <div className={styles["frame2-2-1-1-2"]}>
                  <h1 className={styles["frame2-2-1-1-1-text"]}>{appDetails.controllerSupport}</h1>
                </div>
                <div className={styles["frame2-2-1-1-2"]}>
                  <h1 className={styles["frame2-2-1-1-1-text"]}>{appDetails.supportedLanguages.join(", ")}</h1>
                </div>
                <div className={styles["frame2-2-1-2-9"]}>
                  <h1 className={styles["frame2-2-1-1-1-text"]}>{appDetails.isFreeApp ? "Yes" : "No"}</h1>
                </div>
              </div>
            </div>
            <div className={styles["frame2-2-2"]}>
              <img className={styles["header-1-icon"]} alt="" src={appDetails.headerImage} />
              <div className={styles["frame2-2-2-1"]}>
                <div className={styles["frame2-2-2-1-1"]}>
                  <h1 className={styles["frame2-2-2-1-1-text1"]}>{appDetails.reviewScore}</h1>
                  <h1 className={styles["frame2-2-2-1-1-text2"]}>Puntuación</h1>
                </div>
                <div className={styles["frame2-2-2-1-1"]}>
                  <h1 className={styles["frame2-2-2-1-1-text1"]}>{appDetails.reviewPercentage} %</h1>
                  <h1 className={styles["frame2-2-2-1-1-text2"]}>Porcentaje</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPage;
