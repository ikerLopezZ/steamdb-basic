from sqlalchemy import Column, Integer, String
from auth_service.database import Base

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(255))  # Especifica una longitud, por ejemplo, 255
    email = Column(String(255), unique=True, index=True)
    hashed_password = Column(String(255))