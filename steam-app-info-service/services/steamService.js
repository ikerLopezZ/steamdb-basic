const SteamUser = require('steam-user');
const App = require('../app/models/appModel');

// Cliente de Steam
const client = new SteamUser();

const fetchAndStoreApps = () => {
    // Iniciar sesión
    // client.logOn({ accountName: process.env.STEAM_USERNAME, password: process.env.STEAM_PASSWORD });

    // Iniciar sesión en modo anónimo
    client.logOn({});

    client.on('loggedOn', async () => {
        console.log('Conectado a Steam');

        // AppIDs de los mejores 100 juegos de Steam de 2023
        const appIDs = [
            2420510, 1966720, 2231450, 2050650, 2313250, 2608050, 1868140, 1086940,
            2291760, 1942280, 774801, 2263010, 1669980, 2381620, 2532550, 1353230,
            1931770, 1817230, 2324650, 2368470, 1562700, 2378900, 2495980, 2291850,
            2239150, 1989270, 1967430, 2218750, 2250060, 2056220, 1201270, 1562430,
            2365810, 2171690, 2415010, 2303350, 1765350, 2212330, 824600, 1740300,
            2318310, 1304680, 2262610, 1321440, 1958220, 2067780, 2322560, 1336490,
            1882500, 1971650, 1058830, 835960, 1761270, 1227650, 1708150, 1944570,
            2443110, 1955830, 1564790, 1663220, 2181930, 692890, 2083160, 2423320,
            1328350, 714010, 2238900, 2434340, 1497440, 2356500, 2179850, 2313240,
            1710100, 1683150, 756800, 2539960, 2672090, 2231890, 552100, 602960,
            1304930, 2088840, 1545560, 1686940, 1494810, 1623940, 1931020, 1677310,
            1684410, 2084000, 1114940, 1783360, 2373630, 1644940, 1889040, 2667970,
            1574260, 1628610, 843390, 2088030
        ];
        
        client.getProductInfo(appIDs, [], async (err, apps, packages, unknownApps, unknownPackages) => {
            if (err) {
            console.error('Error al obtener información de productos:', err);
            return;
            }

            // Iterar a través de todas las aplicaciones devueltas
            // for (const appID in apps) {
            // if (apps.hasOwnProperty(appID)) {
                // console.log(apps[appID].appinfo); // Inspeccionar la información de la aplicación
            // }
            // }

            for (const appID in apps) {
            if (apps.hasOwnProperty(appID)) {
                const appInfo = apps[appID].appinfo.common;
                const extended = apps[appID].appinfo.extended;
                const config = apps[appID].appinfo.config;
                
                // Verificar si el juego ya existe en la base de datos
                const existingApp = await App.findOne({ appID: parseInt(appID) });
                if (!existingApp) {
                // Si no existe, crear y guardar un nuevo documento
                const app = new App({
                    appID: parseInt(appID),
                    name: appInfo.name,
                    type: appInfo.type,
                    osList: appInfo.oslist,
                    clientIcon: appInfo.clienticon,
                    iconURL: appInfo.icon,
                    headerImage: appInfo.header_image ? appInfo.header_image.english : "",
                    releaseState: appInfo.releasestate,
                    languages: appInfo.languages ? Object.keys(appInfo.languages) : [],
                    controllerSupport: appInfo.controller_support,
                    primaryGenre: appInfo.primary_genre,
                    genres: appInfo.genres ? Object.values(appInfo.genres) : [],
                    supportedLanguages: appInfo.supported_languages ? Object.keys(appInfo.supported_languages) : [],
                    steamReleaseDate: appInfo.steam_release_date,
                    developer: extended ? extended.developer : undefined,
                    publisher: extended ? extended.publisher : undefined,
                    isFreeApp: extended ? extended.isfreeapp === '1' : undefined,
                    installDir: config ? config.installdir : undefined,
                    reviewScore: appInfo.review_score,
                    reviewPercentage: appInfo.review_percentage
                });

                await app.save();
                console.log(`Juego ${app.name} guardado en MongoDB`);
                } else {
                console.log(`Juego ${existingApp.name} ya existe en la base de datos`);
                // Opcional: actualizar datos del juego existente si es necesario
                }
            }
            }
        });
    });
};

module.exports = fetchAndStoreApps;
