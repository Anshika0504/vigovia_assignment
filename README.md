# Vigovia Travel Itinerary Generator 🧳📄

This project is a full-stack travel itinerary generator built with **React** (frontend) and **Node.js + Express** (backend). It collects trip details using a dynamic form and generates a well-formatted itinerary PDF using **Puppeteer** and **EJS**.

---

## 🌐 Features

- ✨ Dynamic travel form to collect:
  - Trip title, traveler name, source & destination
  - Number of members and travel dates
  - Daily activities with time
  - Flights and hotel bookings
  - Extra activities

- 🧠 Auto-segregates activities into:
  - Morning (00:00–11:59)
  - Afternoon (12:00–17:59)
  - Evening (18:00–23:59)

- 🖨 Generates a downloadable PDF itinerary styled to match the frontend

---

## 📁 Project Structure

vigovia/
├── backend/
│ ├── app.js
│ ├── controllers/
│ │ └── itineraryController.js
│ ├── routes/
│ │ └── router.js
│ ├── views/
│ │ └── template.ejs
│ ├── public/css/
│ │ └── styles.css
│ └── pdfs/
│ └── [Generated PDFs]
├── frontend/
│ └── [React components like FormPage, Day1, Header, etc.]
└── README.md

---

## 🚀 How to Run Locally

### 🧩 Prerequisites

- Node.js (v14+)
- npm or yarn
- Git

---

### 1. Clone the repository

```bash
git clone https://github.com/Anshika0504/vigovia_assignment.git
cd vigovia_assignment

Start the backend
cd backend
npm install
node app.js

Start the frontend
cd frontend
npm install
npm start
