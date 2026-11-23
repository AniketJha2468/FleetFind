# FleetFind - Backend API

The backend service for FleetFind, a digital marketplace for commercial transportation vehicles and heavy construction machinery.

## Architecture

- **Runtime**: Node.js v22+
- **Framework**: Express.js (Modular Monolith)
- **Configuration**: Strictly loaded from the root `.env` file via `config/env.js`
- **Security**: Helmet, CORS, Cookie-Parser, centralized error handling

## Directory Structure

```
Backend/
├── config/             # Environment & service configurations (resolves root .env)
├── controllers/        # Request handling & HTTP status logic
├── middleware/         # Security, auth, and error handling middleware
├── models/             # Mongoose schemas (geospatial & relational)
├── routes/             # REST route declarations
├── services/           # Core domain business logic
├── validators/         # Request validation schemas
├── jobs/               # Asynchronous queues and background workers
├── sockets/            # Real-time WebSocket gateways
├── utils/              # Reusable helper utilities
├── tests/              # Unit & integration test suites
├── app.js              # Express app configuration & middleware pipeline
├── server.js           # Server bootstrap and lifecycle management
└── package.json
```

## Getting Started

### 1. Environment Configuration
The backend explicitly reads environment variables from the root `.env` file located in `../.env`.

### 2. Install Dependencies
```bash
cd Backend
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Health Check
Once started, verify the server status:
```bash
curl http://localhost:5000/api/v1/health
```
