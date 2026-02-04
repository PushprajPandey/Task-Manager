# Task Manager - Full Stack Application

A modern, production-ready full-stack web application with authentication, protected routes, and CRUD functionality for task management.

## Tech Stack

### Frontend
- **React.js** (Vite) - Fast, modern development environment
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Token-based authentication
- **bcryptjs** - Password hashing

## Features

### Authentication
- User signup with validation
- User login with JWT token generation
- Secure password hashing with bcrypt
- Protected routes requiring authentication

### Dashboard
- User profile display (name and email)
- Complete CRUD operations for tasks
- Search tasks by title
- Filter tasks by status (All, Pending, Completed)
- Toggle task completion status
- Real-time UI updates
- Logout functionality

### Security
- JWT-based authentication
- Password hashing before storage
- Protected API routes
- Token validation on protected routes

## Project Structure

```
login/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── userController.js
│   │   │   └── taskController.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   └── errorHandler.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   └── Task.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── userRoutes.js
│   │   │   └── taskRoutes.js
│   │   ├── utils/
│   │   │   └── jwt.js
│   │   └── server.js
│   ├── .env.example
│   ├── .gitignore
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Alert.jsx
    │   │   ├── Button.jsx
    │   │   ├── Input.jsx
    │   │   ├── Loader.jsx
    │   │   ├── ProtectedRoute.jsx
    │   │   ├── TaskCard.jsx
    │   │   └── TaskModal.jsx
    │   ├── pages/
    │   │   ├── Login.jsx
    │   │   ├── Signup.jsx
    │   │   └── Dashboard.jsx
    │   ├── services/
    │   │   └── api.js
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── .env.example
    ├── .gitignore
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    └── postcss.config.js
```

## API Endpoints

### Authentication
- `POST /api/v1/auth/signup` - Register new user
- `POST /api/v1/auth/login` - Login user

### User Profile
- `GET /api/v1/me` - Get current user profile (Protected)
- `PUT /api/v1/me` - Update user profile (Protected)

### Tasks
- `POST /api/v1/tasks` - Create new task (Protected)
- `GET /api/v1/tasks` - Get all user tasks with search/filter (Protected)
- `GET /api/v1/tasks/:id` - Get single task (Protected)
- `PUT /api/v1/tasks/:id` - Update task (Protected)
- `DELETE /api/v1/tasks/:id` - Delete task (Protected)

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from example:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/task-manager
JWT_SECRET=your_secure_jwt_secret_key_here
NODE_ENV=development
```

5. Start the server:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from example:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
VITE_API_URL=http://localhost:5000/api/v1
```

5. Start the development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:3000`

## Usage

1. Open `http://localhost:3000` in your browser
2. Sign up for a new account
3. Login with your credentials
4. Create, view, update, and delete tasks
5. Use search and filter features to manage tasks
6. Logout when finished

## Validation Rules

### Signup
- Name: Required, minimum 2 characters
- Email: Required, valid email format
- Password: Required, minimum 6 characters

### Login
- Email: Required, valid email format
- Password: Required

### Tasks
- Title: Required, maximum 200 characters
- Description: Optional, maximum 1000 characters
- Completed: Boolean (default: false)

## 🚀 Scaling for Production

To scale this application for production, the frontend and backend can be containerized using Docker and deployed behind a reverse proxy such as Nginx. Environment variables would be managed securely using platform-level secrets. MongoDB indexes can be added on frequently queried fields to improve query performance. A caching layer like Redis could be introduced for read-heavy endpoints. The frontend can be deployed via a CDN for faster delivery. Proper CORS configuration, rate limiting, and centralized logging/monitoring would ensure security and reliability at scale.

## License

MIT


