from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "This is a message from the backend."}
