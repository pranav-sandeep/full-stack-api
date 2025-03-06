from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from routers import auth, chat
from database import engine, Base

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(auth.router)
app.include_router(chat.router)

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def read_root():
    return {"message": "Welcome to the Chat Application API","website":"https://raspapi-pranav.itsmehecker.hackclub.app/static/index.html","fun fact":"MOST WEBSITES (including this one) HAVE A /robots.txt which has the structure of the websites"}

@app.get("/robots.txt")
def robots():
    return {"message": "DON\'T GO TO /SKYNET"}

@app.get("/SKYNET")
def skynet():
    return {"message": "SKYNET IS REAL. YOU HAVE BEEN WARNED","message":"you\'re done little human 121.12.472.123, location: AREA 51 wait sorry my bad thats my IP and location UWU"}