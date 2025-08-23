# 🚀 Farm Yadri - Quick Setup

Get Farm Yadri running on your machine in minutes.

## 📋 Prerequisites

- **Node.js** (v16+) - [Download](https://nodejs.org/)
- **MongoDB** (v4.4+) - [Download](https://www.mongodb.com/try/download/community)
- **Git** - [Download](https://git-scm.com/)

## ⚡ Setup Steps

### 1. Install Dependencies
```bash
# Frontend
npm install

# Backend
cd backend && npm install && cd ..
```

### 2. Configure Environment
Create `backend/.env`:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/farmyadri
JWT_SECRET=your_secret_key_here
```

### 3. Start MongoDB
```bash
# Start MongoDB service
mongod
```

### 4. Run the App
```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
npm run dev
```

## 🌐 Access
- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:3000

## 🔧 Quick Fixes

**Port in use?**
```bash
# Kill process on port 3000
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9
```

**MongoDB not connecting?**
```bash
# Start MongoDB
mongod
```

**Dependencies issues?**
```bash
rm -rf node_modules package-lock.json && npm install
```

---

**🎉 That's it! Your Farm Yadri app should be running now.**
