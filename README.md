# SteamDB Basic

SteamDB Basic es una aplicación web que proporciona información básica sobre las 100 aplicaciones mejor valoradas en Steam del año 2023. Utiliza una arquitectura de microservicios con JavaScript y Express.js para el API Gateway y el servicio de información de Steam, mientras que el servicio de autenticación está desarrollado en Python con FastAPI.

La aplicación maneja las bases de datos utilizando MySQL y MongoDB, y el frontend está construido en React, ofreciendo una interfaz clara y fácil de usar para acceder y visualizar la información.

## Software Necesario

Para ejecutar este proyecto, es necesario tener instalado:

- **Node.js y npm**: Utilizado para ejecutar los microservicios JavaScript y React.
  - [Descargar Node.js](https://nodejs.org/)
- **Python**: Necesario para ejecutar el microservicio de autenticación (Python).
  - [Descargar Python](https://www.python.org/downloads/)
- **MongoDB**: Requerido para la base de datos utilizada por el microservicio de obtención de datos.
  - [Descargar MongoDB](https://www.mongodb.com/try/download/community)
  - Herramientas recomendadas para la gestión de MongoDB:
    - [MongoDB Compass](https://www.mongodb.com/products/compass)
- **MySQL**: Requerido para la base de datos utilizada por el microservicio de autenticación.
  - [Descargar MySQL](https://dev.mysql.com/downloads/mysql/)
  - Herramientas recomendadas para la gestión de MySQL:
    - [MySQL Workbench](https://www.mysql.com/products/workbench/)

## Instalación de Dependencias

Antes de ejecutar los microservicios, es necesario instalar sus dependencias. Desde el directorio raíz del proyecto (`steamdb-basic`):

### API Gateway (Node.js)

#### En la carpeta `api-gateway`

```bash
cd api-gateway
```

##### Instalar dependencias
```bash
npm install
```

### Servicio de Obtención de Datos de Steam (Node.js)

#### En la carpeta `steam-app-info-service`

```bash
cd steam-app-info-service
```

##### Instalar dependencias
```bash
npm install
```

### Servicio de Autenticación (Python)

#### En la carpeta `auth_service`

```bash
cd auth_service
```

##### Activar entorno virtual

```bash
# Windows
env\Scripts\activate
```

```bash
# Unix o MacOS
source env/bin/activate
```

##### Instalar dependencias
```bash
pip install -r requirements.txt
```

### Frontend (React)

#### En la carpeta `frontend`

```bash
cd frontend
```

##### Instalar dependencias
```bash
npm install
```

## Ejecución de Servicios
Para iniciar cada servicio del proyecto, desde el directorio raíz del proyecto (`steamdb-basic`), se deben seguir estos pasos:

#### API Gateway

```bash
cd api-gateway
```

```bash
node api-gateway.js
```

#### Steam App Info Service

```bash
cd steam-app-info-service
```

```bash
node index.js
```

#### Auth Service

```bash
cd auth_service
```

##### Activar entorno virtual (si no lo está ya)

```bash
# Windows
env\Scripts\activate
```

```bash
# Unix o MacOS
source env/bin/activate
```

```bash
cd ..
```

```bash
py -m auth_service.main
```

#### Frontend

```bash
cd frontend
```

```bash
npm start
```

## Acceso al Cliente

Una vez que el frontend está en ejecución, se accede a la interfaz de usuario desde el navegador:

http://localhost:3000

## Documentación de la API

La documentación interactiva de las APIs está disponible una vez que los servicios están en ejecución:

### Servicio de Obtención de Datos de Steam (steam-app-info-service)

- Swagger UI: `http://localhost:5000/api-docs`

### Servicio de Autenticación (auth_service)

- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Ejecución con Docker y Docker Compose

Para facilitar la ejecución de los distintos servicios de SteamDB Basic, el proyecto está configurado para utilizar Docker y Docker Compose. Esto permite lanzar todos los servicios con un conjunto mínimo de comandos y sin la necesidad de una configuración extensa.

### Requisitos Previos

Asegurarse de tener instalado Docker y Docker Compose en el sistema. Se pueden descargar e instalar desde los siguientes enlaces:

- Docker: [https://www.docker.com/get-started](https://www.docker.com/get-started)
- Docker Compose: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

### Instrucciones de Uso

1. **Construir y Levantar los Servicios**: Navegar al directorio raíz del proyecto (`steamdb-basic`) y ejecutar el siguiente comando para construir y levantar todos los servicios definidos en `docker-compose.yml`:

    ```bash
    docker-compose up --build
    ```

    Este comando construirá imágenes Docker para cada servicio (si es necesario) y luego iniciará los contenedores.

2. **Acceder a los Servicios**: Una vez que los servicios están en ejecución, es posible acceder a ellos a través de las siguientes URLs:

   - API Gateway: `http://localhost:8080`
   - Steam App Info Service: `http://localhost:5000`
   - Servicio de Autenticación: `http://localhost:8000`
   - Frontend: `http://localhost:3000`

3. **Detener los Servicios**: Para detener los servicios, se puede utilizar `Ctrl+C` en la terminal donde se están ejecutando. Si se quiere detener y eliminar los contenedores, redes, volúmenes y imágenes creadas por `docker-compose up`, utilizar:

    ```bash
    docker-compose down
    ```

4. **Uso en Modo Detached**: Si se quiere ejecutar los contenedores en el fondo (modo detached), se puede añadir la opción `-d` al comando `docker-compose up`.

    ```bash
    docker-compose up -d
    ```

### Notas Adicionales

Los comandos de Docker y Docker Compose pueden requerir permisos de administrador dependiendo de la configuración. En sistemas Linux, es posible necesitar preceder los comandos con `sudo`.
