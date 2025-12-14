# 🍰 Sweet Shop Management System

A full-stack **Sweet Shop Management System** built using modern web technologies.  
This project supports **user shopping features**, **admin inventory management**, and **role-based routing**.

---

## 📌 Project Overview

The Sweet Shop Management System allows:
- Users to browse and purchase sweets
- Admins to manage inventory (add, update, delete sweets)
- Role-based login redirection (`/shop` for users, `/admin` for admins)

The project demonstrates clean frontend architecture, RESTful backend APIs, and basic authentication flow.

---

## 🧱 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

### Tools
- Git & GitHub
- Postman
- VS Code

---

## ✨ Features

### Authentication
- User Registration
- User Login
- Role-based redirection (Admin / User)

### User Features
- View all sweets
- Search sweets
- Purchase sweets
- Disabled purchase when stock is zero

### Admin Features
- Admin Dashboard
- Add sweets
- Update sweets
- Delete sweets
- Inventory overview

---

## 🗂️ Project Structure

```

sweet-shop-management-system/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── landing.jsx
│   │   │   ├── login.jsx
│   │   │   ├── register.jsx
│   │   │   ├── shop.jsx
│   │   │   └── admindashboard.jsx
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── tailwind.config.js
│   ├── postcss.config.cjs
│   └── package.json
│
└── README.md

````

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/sweet-shop-management-system.git
cd sweet-shop-management-system
````

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔐 Routing Logic

| Role  | Redirect |
| ----- | -------- |
| Admin | `/admin` |
| User  | `/shop`  |

Admin routes are protected and cannot be accessed by normal users.

---

## 🧪 Testing & Development

* Backend APIs tested using Postman
* Frontend tested manually
* Clean separation of concerns
* Beginner-friendly structure

---

## 🤖 AI Usage Disclosure

AI tools (ChatGPT) were used for:

* Debugging Tailwind, Vite, and PostCSS issues
* Structuring React routing
* Improving UI layout and styling
* Documentation support

All logic and final implementation were reviewed and understood manually.

---

## 🚀 Future Enhancements

* Full backend authentication integration
* Pagination & sorting
* Payment gateway
* Deployment (Vercel / Render)
* Unit testing

---


