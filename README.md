# casualfunnel
# 🚀 CasualFunnel - User Analytics Platform

A full-stack analytics platform that tracks user interactions on an e-commerce website and visualizes customer behavior through session journeys and click heatmaps.

Built as part of the CasualFunnel Full Stack Engineer Assignment.

---

## 🌐 Live Demo

### Customer Store

Frontend: https://your-vercel-url.vercel.app

### Analytics Dashboard

Frontend: https://your-vercel-url.vercel.app/analytics

### Backend API

https://casualfunnel-6qcj.onrender.com/api

---

# 📌 Objective

Understand how users interact with a website by collecting and analyzing:

* Page Views
* Click Events
* User Sessions
* Session Journeys
* Click Heatmaps

The system enables businesses to visualize user behavior and identify engagement patterns.

---

# 🏗️ System Architecture

```text
┌─────────────────────┐
│  E-Commerce Store   │
└──────────┬──────────┘
           │
           │ Track Events
           ▼
┌─────────────────────┐
│ Analytics SDK       │
│                     │
│ • page_view         │
│ • click             │
│ • session_id        │
│ • coordinates       │
└──────────┬──────────┘
           │
           │ Batch Upload
           ▼
┌─────────────────────┐
│ Node.js Backend     │
│ Express API         │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ MongoDB             │
│ Event Storage       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Analytics Dashboard │
│                     │
│ • Sessions View     │
│ • User Journey      │
│ • Click Heatmap     │
└─────────────────────┘
```

---

# ✨ Features

## Event Tracking

Tracks:

* Page Views
* Click Events

Every event stores:

* Session ID
* Event Type
* Page URL
* Timestamp
* Click Coordinates (x, y)

---

## Session Analytics

View all user sessions.

Features:

* Total event count
* Last activity timestamp
* Session selection
* Real-time event timeline

---

## User Journey Visualization

Displays complete ordered journey of a user session.

Example:

```text
Page View
   ↓
Product View
   ↓
Add To Cart
   ↓
Cart View
   ↓
Checkout
```

---

## Heatmap Visualization

Visual representation of click density.

Features:

* Interactive click plotting
* Density visualization
* Coordinate tracking
* User engagement insights

---

## Modern Dashboard

Includes:

* Dark themed UI
* Glassmorphism design
* Session explorer
* Journey timeline
* Interactive heatmap
* Responsive layout

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router
* Tailwind CSS
* Axios
* Zustand
* Lucide Icons
* Vite

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas

---

# 📂 Project Structure

```text
casualfunnel/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── tracking/
│   └── routes/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

# 🔌 API Endpoints

## Create Events

```http
POST /api/events/create
```

Stores tracked events.

---

## Fetch Sessions

```http
GET /api/events/sessioneventcount
```

Returns all sessions with event counts.

---

## Session Journey

```http
GET /api/events/:sessionId
```

Returns ordered events for a session.

---

## Heatmap Data

```http
GET /api/events/click-data?sessionId=:sessionId
```

Returns click coordinates for heatmap rendering.

---

# ⚙️ Local Setup

## Clone Repository

```bash
git clone https://github.com/tejas-gupta-dev/casualfunnel.git
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```


---

# 📈 Analytics Flow

```text
User Visit
     │
     ▼
Page View Event
     │
     ▼
User Click
     │
     ▼
Track Coordinates
     │
     ▼
Store In MongoDB
     │
     ▼
Session Aggregation
     │
     ▼
Dashboard Visualization
```

---


# 🔮 Future Improvements

* Funnel Drop-off Analysis
* Conversion Tracking
* Real-Time Analytics via WebSockets
* Geographic Heatmaps
* User Segmentation
* Session Replay
* Event Filtering
* Analytics Export

---

# 👨‍💻 Author

Tejas Gupta

GitHub:
https://github.com/tejas-gupta-dev
