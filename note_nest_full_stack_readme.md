# 🧠 NoteNest 2.0 – Full Stack Production App

A **modern, AI-enhanced, social-first note platform** that helps users express, organize, and share thoughts with the world — built using the **MERN stack**, designed with **mental health, motivation, and creativity** in mind.

---

## 📘 Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Docs & Research](#docs--research)
- [Setup Instructions](#setup-instructions)
- [Deployment](#deployment)
- [Status](#status)
- [Author](#author)

---

## 📌 About
**NoteNest 2.0** is a full-stack production-grade web application that blends journaling with social connection. It’s designed to:

- Promote mental well-being
- Help users recover from burnout/depression
- Empower creators, students, and professionals to share motivational and meaningful notes
- Enhance expression with built-in AI tools

---

## ✨ Features
- ✅ Create, edit, delete notes with rich formatting
- 🔐 Public/Private visibility toggle
- 📌 Note types: Love, Poem, Business, Nature, etc.
- 🏷️ Tagging and smart search
- ❤️ Like & 💬 comment (threaded)
- 🔔 Real-time notifications via Socket.IO
- 🧠 AI Tools: summarizer, writing enhancer, tag generator
- 👤 User profile with stats, bio, and social graph
- 📊 Dashboard: views, likes, trending tags
- 🌙 Dark mode, responsive design, onboarding tour

---

## 🧰 Tech Stack

### 🖥️ Frontend
- React.js + Vite
- TailwindCSS + Shadcn/UI
- Zustand (state management)
- Axios (API calls)
- React Query (caching & retries)
- Socket.IO client (real-time comments)

### 🌐 Backend
- Node.js + Express.js
- MongoDB + Mongoose
- JWT/Auth0/Clerk (auth)
- Zod (validation)
- Cloudinary / AWS S3 (media storage)
- Socket.IO server (real-time engine)
- OpenAI or Gemini Flash (AI APIs)

### 🧪 Testing & DevOps
- Jest + Supertest
- Cross-env, Husky, Lint-staged, ESLint, Prettier
- GitHub Actions (CI/CD)

### ☁️ Deployment
- **Frontend:** Netlify / Vercel
- **Backend:** Railway / Render
- **Database:** MongoDB Atlas

---

## 🗂️ Folder Structure

### 🔙 Backend
```
note-nest-backend
├── controllers
├── models
├── routes
├── middlewares
├── services
├── utils
├── config
├── sockets
├── tests
├── constants
├── .env.example
└── server.js
```

### 🖼️ Frontend
```
note-nest-frontend
├── components/
│   ├── ui/
│   ├── notes/
│   ├── profile/
├── pages/
│   ├── Home.jsx
│   ├── Explore.jsx
│   ├── NoteDetails.jsx
│   ├── Profile.jsx
├── hooks/
├── store/ (Zustand)
├── services/ (API wrappers)
├── layouts/
├── App.jsx
├── main.jsx
├── index.css
└── tailwind.config.js
```

---

## 📚 Docs & Research

These files document every design and implementation decision:

| Document | Description |
|----------|-------------|
| [`📄 PRD`](./NoteNest2_PRD.md) | Full feature list, objectives, deployment plan |
| [`📄 Problem & Personas`](./NoteNest_Problem_Solution_Personas.md) | Who it's for and why it exists |
| [`📄 Roadmap`](./Production_Grade_WebApp_Roadmap.md) | Step-by-step execution plan |
| [`📄 Backend README`](./NoteNest_Backend_README.md) | Backend-specific setup & route logic |

All available in `/docs` or attached in Canvas. Convert to PDF for distribution if needed.

---

## 🛠️ Setup Instructions

### Backend
```bash
git clone https://github.com/your-handle/note-nest-backend
cd note-nest-backend
cp .env.example .env
npm install
npm run dev
```

### Frontend
```bash
git clone https://github.com/your-handle/note-nest-frontend
cd note-nest-frontend
npm install
npm run dev
```

---

## 🚀 Deployment
- Push both frontend/backend to GitHub
- Connect frontend to **Vercel** or **Netlify**
- Connect backend to **Railway** or **Render**
- Use **MongoDB Atlas** for DB cluster
- Add env variables through dashboard secrets
- Configure domain, CORS, and SSL

---

## 📈 Status
- ✅ Research & Architecture Done
- ✅ Docs (PRD, Personas, Roadmap)
- 🏗️ Backend in progress (auth + note routes)
- 🛠️ AI & realtime features queued
- 🖼️ Frontend starts after backend MVP ready

---

## 🙋 Author
**Prince Reigns**  
MERN Stack Developer  
Twitter: [@PRINCE74512341](https://x.com/PRINCE74512341)

---

## ⭐ Support
Star ⭐ the repo, fork it, or tag me if you build your own version!

> Mental wellness + creativity deserve tools just like productivity does 💙

