# FleetFind - Frontend Client

The frontend client for FleetFind, built with React, Vite, Tailwind CSS, and Lucide Icons.

## Architecture

- **Build Tool**: Vite (configured with `envDir: '../'` to load root `.env`)
- **UI & Styling**: Tailwind CSS with custom industrial color palette:
  - Industrial Black: `#171717`
  - Dark Charcoal: `#282321`
  - Safety Yellow: `#FFC000`
  - Construction Orange: `#F47721`
  - Warm Cream: `#F4E8D8`
- **Path Aliasing**: `@/` maps to `src/`

## Directory Structure

```
Frontend/
├── public/
├── src/
│   ├── assets/          # Images, logos, icons
│   ├── components/      # UI components (common, navigation, landing, vehicles, bookings, dashboard)
│   ├── layouts/         # Page layouts (MarketplaceLayout, DashboardLayout, AuthLayout)
│   ├── pages/           # Routed page components
│   ├── features/        # Feature slices
│   ├── services/        # API client & services
│   ├── store/           # Redux Toolkit store & slices
│   ├── hooks/           # Custom React hooks
│   ├── routes/          # Route declarations & role-based guards
│   ├── utils/           # Helper functions & formatters
│   ├── styles/          # Tailwind & custom CSS
│   ├── App.jsx          # Root application component
│   └── main.jsx         # Vite entrypoint
├── index.html
├── vite.config.js       # Vite configuration with root envDir
├── tailwind.config.js   # Custom design tokens
└── package.json
```

## Getting Started

### 1. Install Dependencies
```bash
cd Frontend
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
The application will be accessible at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
