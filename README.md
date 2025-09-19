---

# 🎤 VoiceOwl – Developer Evaluation Task

A minimal full-stack project for mocking audio transcription with a backend (Node.js + TypeScript + MongoDB) and frontend (Angular).

---

## 📂 Project Structure

```
voiceowl/
│
├── backend/    # Node.js + TypeScript API service
├── frontend/   # Angular client UI
└── README.md
```

---

## 🚀 Backend Setup (Port 4000)

### 1. Navigate to backend folder

```bash
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build the project

```bash
npm run build
```

### 4. Start the server

```bash
npm run start
```

The backend runs at **[http://localhost:4000](http://localhost:4000)**

### Endpoints

* `POST /transcription` → accepts `{ "audioUrl": "https://example.com/mp.mp3" }` and stores transcription in MongoDB.
* `GET /transcription` → fetches all transcriptions.

---

## 🌐 Frontend Setup (Port 4200)

### 1. Navigate to frontend folder

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build the project

```bash
ng build
```

### 4. Start development server

```bash
ng serve
```

The frontend runs at **[http://localhost:4200](http://localhost:4200)**

---

## 🧱 Tech Stack

* **Backend:** Node.js, TypeScript, Express, MongoDB, Mongoose
* **Frontend:** Angular, TypeScript, Bootstrap (via CDN)
* **Dev Tools:** Nodemon, ts-node, @types/cors, concurrently

---

## 🗂 Code Structure

### Backend

```
backend/
├── src/
│   ├── models/        # MongoDB models (Mongoose schemas)
│   ├── routes/        # API routes
│   ├── services/      # Business logic (mock transcription, DB ops)
│   ├── app.ts         # Express app
│   └── server.ts      # Entry point
```

### Frontend

```
frontend/
├── src/
│   ├── app/
│   │   ├── app.component.ts      # Main component
│   │   └── app.component.html    # Template
│   └── assets/                   # (optional) static assets
```

---

## 🧪 Improvements for Production

* Replace mock transcription with real AI/ML transcription service (e.g. Whisper API).
* Add authentication and API keys.
* Implement retry & queue mechanism for failed downloads.
* Add Jest tests for backend services.
* Dockerize backend + frontend + MongoDB for deployment.
* Setup CI/CD (GitHub Actions).

---

## 📦 Submission

* Run backend on `http://localhost:4000`
* Run frontend on `http://localhost:4200`
* Make sure MongoDB is running locally (or via Mongo Atlas).
* Open frontend → enter audio URL → transcribe → view results.

---
