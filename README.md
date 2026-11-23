# FleetFind – Advanced Commercial Fleet & Heavy Equipment Marketplace

> **"Find. Book. Move."**  
> India's premier digital marketplace connecting businesses, contractors, and individuals with heavy commercial transportation vehicles and construction machinery.

---

## 🏗️ Overview

FleetFind is an advanced full-stack digital marketplace engineered to streamline heavy equipment rentals and freight transportation logistics across India. From multi-axle haulers and container trucks to hydraulic excavators and high-capacity mobile cranes, FleetFind supports both instant on-demand bookings and quotation-driven negotiated contracts.

### Vehicle & Equipment Categories
- **Transportation Vehicles**: Heavy-Duty Trucks (Tata Prima, BharatBenz), Container Trucks, Mini Trucks, Pickups, Tractor Trolleys, Tankers, Multi-axle Trailers.
- **Construction & Heavy Machinery**: Hydraulic Excavators, JCB/Backhoe Loaders, Bulldozers, Mobile & Tower Cranes, Road Rollers, Concrete Mixers, Wheel Loaders.

---

## ⚙️ Architecture & Tech Stack

### Frontend
- **Framework**: React.js 18 + Vite
- **Styling**: Tailwind CSS with custom industrial color palette (`#171717`, `#282321`, `#FFC000`, `#F47721`, `#F4E8D8`)
- **State Management**: Redux Toolkit (Session, Cart, Booking draft, Notifications)
- **Icons**: Lucide React
- **HTTP / Real-time**: Axios & Socket.IO Client

### Backend
- **Runtime**: Node.js v22+
- **Server**: Express.js (Modular Monolith)
- **Database**: MongoDB Atlas with Geospatial `2dsphere` Proximity Indexing
- **Caching & Queues**: Redis & BullMQ (Background timers, notifications)
- **Real-Time Gateway**: Socket.IO (Live negotiation bids, booking status, tracking)
- **Payments**: Razorpay (Paise-level integer precision)
- **Media & Documents**: Cloudinary (Fleet images, operator verification)
- **AI Engine**: Google Gemini API (Fleet recommendations, price estimation, logistics assistant)

---

## 📁 Repository Structure

FleetFind enforces strict project conventions:
- **One shared `.env` file** at the repository root.
- `Frontend/vite.config.js` loads root variables via `envDir: '../'`.
- `Backend/config/env.js` explicitly loads `../../.env`.
- Backend middleware folder is strictly named `middleware` (never `middlewares`).

```
FleetFind/
├── .env                 # Sole shared environment file (root only)
├── .gitignore           # Global git ignore configuration
├── README.md            # Root project master documentation
│
├── Frontend/            # React + Vite application
│   ├── src/
│   │   ├── components/  # common, navigation, landing, vehicles, bookings, dashboard
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── App.jsx
│   ├── vite.config.js   # Uses envDir: '../'
│   ├── tailwind.config.js
│   └── package.json
│
└── Backend/             # Express.js modular monolith
    ├── config/          # Environment resolution (resolves root .env)
    ├── controllers/
    ├── middleware/      # Security, auth, error handlers (strictly 'middleware')
    ├── models/
    ├── routes/
    ├── services/
    ├── validators/
    ├── app.js
    ├── server.js
    └── package.json
```

---

## 🚀 Quick Start Guide

### 1. Environment Configuration
The root `.env` file contains all necessary configuration keys for local development.

### 2. Backend Setup
```bash
cd Backend
npm install
npm run dev
```
Backend will start on `http://localhost:5000`. Health check endpoint:  
`GET http://localhost:5000/api/v1/health`

### 3. Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```
Frontend will be accessible at `http://localhost:5173`.

---

## 📅 Phased Implementation Roadmap

- [x] **Phase 1 – Architecture & Repository Setup** (Completed)
- [ ] **Phase 2 – Frontend Foundation & Landing Page** (Pending Approval)
- [ ] **Phase 3 – Backend Foundation & Authentication**
- [ ] **Phase 4 – User & Provider Management**
- [ ] **Phase 5 – Vehicle & Equipment Management**
- [ ] **Phase 6 – Search & Maps Integration**
- [ ] **Phase 7 – Booking Engine (Instant Booking)**
- [ ] **Phase 8 – Quotation & Negotiation Engine**
- [ ] **Phase 9 – Real-Time Features (Socket.IO)**
- [ ] **Phase 10 – Payments Integration (Razorpay)**
- [ ] **Phase 11 – Admin & Analytics Dashboard**
- [ ] **Phase 12 – AI Services (Gemini)**
- [ ] **Phase 13 – Testing & Security Hardening**
- [ ] **Phase 14 – Docker Containerization**
- [ ] **Phase 15 – Kubernetes Orchestration**
- [ ] **Phase 16 – GitHub Actions CI/CD Pipeline**

---

## 📄 License
ISC © FleetFind
