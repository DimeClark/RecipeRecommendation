# Recipe Recommendation Platform - Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Python 3.9+
- Git
- PostgreSQL (or Docker)

### Option 1: Docker Setup (Recommended)

1. **Clone and navigate to the project**
   ```bash
   git clone https://github.com/DimeClark/RecipeRecommendation.git
   cd RecipeRecommendation
   ```

2. **Start development services with Docker**
   ```bash
   docker-compose -f docker-compose.dev.yml up -d
   ```

3. **Install dependencies**
   ```bash
   npm run install:all
   ```

4. **Set up environment variables**
   ```bash
   # Backend
   cp backend/.env.example backend/.env
   
   # Frontend
   cp frontend/.env.example frontend/.env
   
   # ML Service
   cp ml-service/.env.example ml-service/.env
   ```

5. **Start development servers**
   ```bash
   npm run dev
   ```

### Option 2: Manual Setup

#### 1. Database Setup
```bash
# Install PostgreSQL and create database
createdb recipe_db

# Or use Docker for just the database
docker-compose -f docker-compose.dev.yml up postgres redis -d
```

#### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env

# Edit .env with your database credentials
# Run database migrations
npx prisma migrate dev
npx prisma generate

# Start backend
npm run dev
```

#### 3. Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env

# Start frontend
npm run dev
```

#### 4. ML Service Setup
```bash
cd ml-service
pip install -r requirements.txt
cp .env.example .env

# Start ML service
python app.py
```

## 🌐 Services

Once everything is running, you can access:

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001
- **ML Service**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs (FastAPI auto-generated)

## 🔧 Development Commands

```bash
# Start all services
npm run dev

# Start individual services
npm run dev:frontend
npm run dev:backend
npm run dev:ml

# Install all dependencies
npm run install:all

# Run tests
npm test

# Build for production
npm run build

# Lint code
npm run lint
```

## 📊 Database Management

```bash
# Navigate to backend directory
cd backend

# Run migrations
npx prisma migrate dev

# Generate Prisma client
npx prisma generate

# Open Prisma Studio (database GUI)
npx prisma studio

# Reset database
npx prisma migrate reset

# Seed database with sample data
npx prisma db seed
```

## 🐛 Troubleshooting

### Common Issues

1. **Port conflicts**
   - Frontend (5173), Backend (3001), ML Service (8000)
   - Change ports in respective config files if needed

2. **Database connection issues**
   - Ensure PostgreSQL is running
   - Check DATABASE_URL in backend/.env
   - Run `npx prisma migrate dev` to set up tables

3. **Module not found errors**
   - Run `npm install` in the respective directory
   - Ensure Node.js version is 18+

4. **Python/ML service issues**
   - Ensure Python 3.9+ is installed
   - Run `pip install -r requirements.txt` in ml-service directory
   - Check Python path and virtual environment

### Reset Everything
```bash
# Stop all services
docker-compose down

# Remove node_modules and reinstall
rm -rf frontend/node_modules backend/node_modules node_modules
npm run install:all

# Reset database
cd backend && npx prisma migrate reset
```

## 🏗️ Project Structure

```
recipe-recommendation/
├── frontend/                 # React TypeScript frontend
│   ├── src/
│   │   ├── components/      # UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   └── services/       # API services
│   └── package.json
├── backend/                 # Node.js Express backend
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Custom middleware
│   │   ├── routes/         # API routes
│   │   └── services/       # Business logic
│   ├── prisma/             # Database schema
│   └── package.json
├── ml-service/             # Python ML service
│   ├── models/             # ML models
│   ├── services/           # ML processing
│   └── app.py              # FastAPI app
└── docker-compose.yml      # Docker configuration
```

## 🚀 Deployment

### Production Docker Build
```bash
docker-compose up -d
```

### Manual Deployment
1. Build frontend: `cd frontend && npm run build`
2. Build backend: `cd backend && npm run build`
3. Deploy to your preferred platform (Vercel, Heroku, Railway, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 Environment Variables

### Backend (.env)
```env
NODE_ENV=development
PORT=3001
DATABASE_URL=postgresql://user:password@localhost:5432/recipe_db
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-secret-key
ML_SERVICE_URL=http://localhost:8000
```

### Frontend (.env)
```env
VITE_API_BASE_URL=http://localhost:3001/api
VITE_ML_SERVICE_URL=http://localhost:8000
```

### ML Service (.env)
```env
MODEL_PATH=./models
UPLOAD_FOLDER=./uploads
PORT=8000
```

---

## 🎯 Next Steps

1. **Set up your development environment** using the instructions above
2. **Explore the codebase** - check out the different components and services
3. **Run the application** and test the basic functionality
4. **Start building features** - begin with recipe CRUD operations
5. **Add AI features** - implement ingredient detection and recommendations
6. **Deploy** your application when ready

Happy coding! 🍽️✨
