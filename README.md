# Recipe Recommendation Platform 🍽️

A full-stack recipe recommendation platform with AI ingredient detection, personalized suggestions, dietary filtering, and smart shopping lists.

## 🚀 Features

### 🤖 AI-Powered Features
- **Ingredient Detection**: Upload photos to identify ingredients using computer vision
- **Smart Recommendations**: ML algorithms suggest recipes based on available ingredients
- **Personalized Suggestions**: Learn from user preferences and dietary restrictions
- **Nutritional Analysis**: Automatic calculation of nutritional information

### 🎯 Core Functionality
- **Recipe Search & Filter**: Advanced filtering by cuisine, diet, time, difficulty
- **Shopping List Generator**: Smart lists based on selected recipes
- **Meal Planning**: Weekly meal planning with automated shopping lists
- **User Profiles**: Save favorites, dietary preferences, and cooking history

### 🛠️ Technical Stack
- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS
- **Backend**: Node.js + Express + TypeScript + Prisma ORM
- **Database**: PostgreSQL with Redis caching
- **ML Service**: Python + TensorFlow + FastAPI
- **Authentication**: JWT with refresh tokens
- **File Storage**: AWS S3 or local storage
- **Deployment**: Docker containers

## 📁 Project Structure

```
recipe-recommendation/
├── frontend/                 # React TypeScript frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── stores/         # State management (Zustand)
│   │   ├── types/          # TypeScript definitions
│   │   └── utils/          # Utility functions
│   ├── public/             # Static assets
│   └── package.json
├── backend/                 # Node.js Express backend
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Custom middleware
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── utils/          # Utility functions
│   │   └── types/          # TypeScript definitions
│   ├── prisma/             # Database schema and migrations
│   └── package.json
├── ml-service/             # Python ML service
│   ├── models/             # ML models
│   ├── services/           # ML processing services
│   ├── utils/              # Utility functions
│   ├── app.py              # FastAPI application
│   └── requirements.txt
└── docker-compose.yml      # Docker configuration
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Python 3.9+
- PostgreSQL (or Docker)
- Git

### Installation

1. **Install all dependencies**
   ```bash
   npm run install:all
   ```

2. **Set up environment variables**
   ```bash
   # Copy environment files
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   cp ml-service/.env.example ml-service/.env
   ```

3. **Start the development servers**
   ```bash
   npm run dev
   ```

This will start:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001
- ML Service: http://localhost:8000

## 🛠️ Development

### Available Scripts

```bash
# Start all services in development mode
npm run dev

# Start individual services
npm run dev:frontend
npm run dev:backend
npm run dev:ml

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

## 🎯 Roadmap

- [ ] Basic recipe CRUD operations
- [ ] User authentication and profiles
- [ ] Ingredient detection from images
- [ ] Recipe recommendation algorithm
- [ ] Shopping list generation
- [ ] Meal planning feature
- [ ] Mobile app (React Native)
- [ ] Social features (sharing, rating)
- [ ] Nutritional tracking
- [ ] Recipe scaling and unit conversion

---

Built with ❤️ by [DimeClark](https://github.com/DimeClark)
