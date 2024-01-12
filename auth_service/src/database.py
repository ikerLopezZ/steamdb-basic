import os

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = os.environ.get("MYSQL_URI")

if not SQLALCHEMY_DATABASE_URL:
    raise Exception("La URL de la base de datos no está configurada en las variables de entorno")

# Configuración de SQLAlchemy
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base declarativa para modelos SQLAlchemy
Base = declarative_base()
