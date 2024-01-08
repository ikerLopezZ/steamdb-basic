from pydantic import BaseModel

class UserCreate(BaseModel):
    email: str
    username: str
    completeName: str
    password: str

class UserOut(BaseModel):
    email: str
    username: str
    class Config:
        from_attributes = True
        
# class LoginSchema(BaseModel):
    # username_or_email: str
    # password: str
    
# class LoginSchema(BaseModel):
    # email: str
    # password: str
