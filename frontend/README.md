# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Task Manager Frontend

A modern, responsive React frontend for the Task Manager MERN application.

---

## 🚀 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment variables:**
   - Create a `.env` file in the `frontend` directory (see `.env.example` if provided).
   - Example:
     ```env
     VITE_API_URL=http://localhost:5000
     ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173)

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🖼️ Screenshots

> Add screenshots of the main UI pages below:

- **Landing Page:**
  ![Landing Page](./screenshots/landing.png)
- **Login Page:**
  ![Login Page](./screenshots/login.png)
- **Register Page:**
  ![Register Page](./screenshots/register.png)
- **Dashboard:**
  ![Dashboard](./screenshots/dashboard.png)

---

## 🛠️ Technologies Used

- **React** (with Hooks & Context API)
- **React Router DOM** (routing & protected routes)
- **Axios** (API requests)
- **TailwindCSS** (utility-first styling)
- **Lucide React** (icons)
- **Vite** (build tool)
- **Glassmorphism & Gradients** (modern UI/UX)

---

## 📋 Features
- Authentication (register, login, logout, protected routes)
- Task CRUD (create, read, update, delete)
- Task filtering, sorting, and statistics
- Responsive, modern UI with glassmorphism and purple accent
- Form validation and error handling
- API integration with backend (http://localhost:5000)

---

## 📦 Folder Structure

```
src/
├── components/
│   ├── common/
│   ├── auth/
│   └── tasks/
├── context/
├── pages/
├── services/
├── utils/
├── App.jsx
└── index.jsx
```

---

## 📝 License
MIT
