from pydantic import BaseModel

class UserCreate(BaseModel):
    email: str
    username: str
    completeName: str  # Añadir esta línea
    password: str

class UserOut(BaseModel):
    email: str
    username: str
    class Config:
        from_attributes = True
