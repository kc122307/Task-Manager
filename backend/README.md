# Task Manager Backend

This is the backend API for the Task Manager MERN application.

## 📁 Folder Structure

```
backend/
├── models/
│   ├── User.js          # User model with bcrypt password hashing
│   └── Task.js          # Task model with user relationship
├── routes/
│   ├── auth.js          # Authentication routes (register, login, me)
│   └── tasks.js         # Task CRUD routes
├── middleware/
│   └── auth.js          # JWT authentication middleware
├── .env.example         # Environment variables example
├── .gitignore          # Git ignore file
├── package.json        # Dependencies and scripts
├── server.js           # Main server file
└── README.md           # This file
```

## 🚀 Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the root directory and add:
```
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_super_secure_jwt_secret_key_here
PORT=5000
NODE_ENV=development
```

For MongoDB Atlas, use:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskmanager
```

### 3. Start the Server
```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

## 📡 API Endpoints

### Authentication Routes
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user info (protected)

### Task Routes (All Protected)
- `GET /api/tasks` - Get all tasks for logged-in user
- `GET /api/tasks/:id` - Get single task by ID
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `GET /api/tasks/stats` - Get task statistics

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## 📊 Database Schema

### User Model
```javascript
{
  name: String (required, 2-50 chars),
  email: String (required, unique, valid email),
  password: String (required, min 6 chars, hashed),
  timestamps: true
}
```

### Task Model
```javascript
{
  title: String (required, max 100 chars),
  description: String (required, max 500 chars),
  completed: Boolean (default: false),
  priority: String (enum: low/medium/high, default: medium),
  dueDate: Date (optional),
  user: ObjectId (ref: User, required),
  timestamps: true
}
```

## 🛡️ Security Features

- Password hashing with bcrypt (cost factor: 12)
- JWT token-based authentication
- Input validation with express-validator
- Protected routes with authentication middleware
- User data isolation (users can only access their own tasks)
- Password exclusion from JSON responses

## 📝 Usage Examples

### Register User
```javascript
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login User
```javascript
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Create Task
```javascript
POST /api/tasks
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Complete project",
  "description": "Finish the MERN stack project",
  "priority": "high",
  "dueDate": "2024-12-31T23:59:59.000Z"
}
```

### Update Task
```javascript
PUT /api/tasks/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "completed": true
}
```

## 🧪 Testing

You can test the API using tools like:
- Postman
- Thunder Client (VS Code extension)
- curl commands
- Frontend application

## 🔧 Development Notes

- The server runs on port 5000 by default
- MongoDB connection with error handling
- CORS enabled for frontend integration
- Comprehensive error handling and validation
- RESTful API design principles
- Optimized database queries with indexing