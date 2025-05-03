from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import cv2
import numpy as np
import io
from typing import Optional

app = FastAPI()

# CORS тохиргоо (Next.js-тэй холбогдоход)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ам нээлтийг илрүүлэх функц
def detect_mouth_opening(image_bytes: bytes) -> bool:
    nparr = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    
    # Энгийн жишээ логик (бодит прожектэд MediaPipe эсвэл face-api.js ашиглах)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    mouth_region = gray[200:300, 100:300]  # Зураг дээрх амны бүс
    
    # Энгийн threshold-р шалгах
    _, threshold = cv2.threshold(mouth_region, 120, 255, cv2.THRESH_BINARY)
    white_pixels = np.sum(threshold == 255)
    
    return white_pixels > 5000  # Туршилтын утга

@app.post("/api/detect-mouth")
async def mouth_detection(file: UploadFile = File(...)):
    image_bytes = await file.read()
    is_mouth_open = detect_mouth_opening(image_bytes)
    return {"mouthOpen": is_mouth_open}

@app.get("/")
def read_root():
    return {"message": "Dino Game Backend"}