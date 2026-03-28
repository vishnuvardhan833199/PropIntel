# 🚀 PropIntel – AI Property Risk Analyzer

## 📌 Overview

PropIntel is an AI-powered system that analyzes property documents and detects potential risks using OCR and NLP.

## ⚙️ Features

* 📄 OCR-based document reading (Tesseract)
* 🧠 NLP extraction (Owner, Survey No, Area)
* ⚠️ Risk scoring engine
* 🌐 Full-stack app (FastAPI + React)

## 🛠️ Tech Stack

* Backend: FastAPI (Python)
* Frontend: React + Tailwind CSS
* OCR: Tesseract
* NLP: Regex-based extraction

## 🚀 How to Run

### Backend

cd backend
python -m uvicorn app.main:app --reload

### Frontend

cd frontend
npm install
npm run dev

## 📊 Sample Output

* Extracted Data: Owner, Survey Number, Area
* Risk Score: 0–100
* Issues: Missing fields detection

## 🎯 Future Improvements

* Transformer-based NER
* Multi-document linking
* Geo-mapping integration

---

## 👨‍💻 Author

Vishnu Vardhan
