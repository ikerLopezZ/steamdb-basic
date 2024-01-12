import os
from datetime import datetime, timedelta
from typing import Optional

from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer
from jose import jwt
from passlib.context import CryptContext
from sqlalchemy.orm import Session

from . import models

# Clave secreta y algoritmo para JWT
SECRET_KEY = os.environ.get("SECRET_KEY")
if not SECRET_KEY:
    raise RuntimeError("La SECRET_KEY no está definida en las variables de entorno")
ALGORITHM = "HS256"

# Utilidades para hash y verificación de contraseñas
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

# Funciones para manejar la autenticación y los tokens
def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def get_user(db: Session, username: str):
# def get_user(db: Session, email: str):
    return db.query(models.User).filter(models.User.username == username).first()
    # return db.query(models.User).filter(models.User.email == email).first()

def authenticate_user(db: Session, username: str, password: str):
# def authenticate_user(db: Session, email: str, password: str):
    try:
        user = get_user(db, username)
        # user = get_user(db, email)
        if not user:
            return False
        if not verify_password(password, user.hashed_password):
            return False
        return user
    except Exception as e:
        print(f"Error durante la autenticación: {e}")
        return False
