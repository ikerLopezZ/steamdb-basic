import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllApps } from "../api/steamAppInfoService";
// import "../styles/apps-page.css";
import styles from "../styles/apps-page.module.css";

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
    <div className={styles.Apps}>
      {apps.map((app) => (
        <Link className={styles.frame2} to={`/apps/${app.appID}`}>
            <div className={styles.frame21}>
              <img
                className={styles.dbc71957312bbd3baea65848b545beIcon}
                alt=""
                src={`https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/${app.appID}/${app.iconURL}.jpg`}
              />
              <h1 className={styles.frame21Text}>{app.name}</h1>
            </div>
            <div className={styles.frame22}>
              <img
                className={styles.header2Icon}
                alt=""
                src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${app.appID}/header.jpg`}
              />
              <div className={styles.frame221}>
                <div className={styles.frame2211}>
                  <div className={styles.frame22111}>
                    <h1 className={styles.frame22111Text}>ID de aplicación</h1>
                  </div>
                  <div className={styles.frame22111}>
                    <h1 className={styles.frame22111Text}>{app.appID}</h1>
                  </div>
                </div>
                <div className={styles.frame2211}>
                  <div className={styles.frame22111}>
                    <h1 className={styles.frame22111Text}>Tipo de aplicación</h1>
                  </div>
                  <div className={styles.frame22111}>
                    <h1 className={styles.frame22111Text}>{app.type}</h1>
                  </div>
                </div>
                <div className={styles.frame2211}>
                  <div className={styles.frame22111}>
                    <h1 className={styles.frame22111Text}>Desarrollador</h1>
                  </div>
                  <div className={styles.frame22111}>
                    <h1 className={styles.frame22111Text}>{app.developer}</h1>
                  </div>
                </div>
                <div className={styles.frame2214}>
                  <div className={styles.frame22141}>
                    <h1 className={styles.frame22141Text1}>
                      {app.reviewScore}
                    </h1>
                  </div>
                  <div className={styles.frame22141}>
                    <h1 className={styles.frame22141Text1}>
                      {app.reviewPercentage} %
                    </h1>
                  </div>
                </div>
              </div>
            </div>
        </Link>
      ))}
      {/*<div className={styles.frame1}>
        <img
          className={styles.logoCombined191a1eIcon}
          alt=""
          src="/logo-combined-191a1e@2x.png"
        />
        <img className={styles.sits01Icon} alt="" src="/sits-01@2x.png" />
      </div>*/}
    </div>
  );
};

export default AppsPage;
