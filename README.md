# 🚀 IntelliFy – AI SaaS Platform

IntelliFy is a **full-stack AI SaaS application** built using the **PERN Stack (PostgreSQL, Express.js, React.js, Node.js)** that provides multiple AI-powered productivity tools in a single platform.

The platform integrates the **Google Gemini API** to generate intelligent responses in real-time and uses **Clerk Authentication** to provide secure user authentication and management.

Users can generate articles, create blog titles, generate AI images, and review resumes using AI.

---

## 🌟 Features

### 📝 Article Generator
Generate high-quality AI-powered articles from user prompts.

### 🖼 Image Generator
Create AI-generated images based on text prompts using the Gemini API.

### ✍ Blog Title Generator
Generate engaging blog titles instantly for content creators and bloggers.

### 📄 Resume Reviewer
Upload or paste your resume and receive AI-generated feedback and suggestions.

### 🔐 Secure Authentication
User authentication and session management powered by **Clerk Auth**.

### 🎨 Modern UI
Clean and responsive interface built using **React.js and Tailwind CSS**.

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- Clerk Authentication

### Backend
- Node.js
- Express.js
- REST API Architecture

### Database
- PostgreSQL

### AI Integration
- Google Gemini API

---
### Workflow

1. User logs in using **Clerk authentication**.
2. User selects an AI tool (Article Generator, Image Generator, etc.).
3. The frontend sends a request to the backend API.
4. The backend processes the request and calls the **Gemini API**.
5. The generated response is returned to the frontend.
6. User results can optionally be stored in the **PostgreSQL database**.

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/intellify.git
cd intellify
2️⃣ Install Dependencies

Install frontend dependencies:

cd client
npm install

Install backend dependencies:

cd server
npm install
3️⃣ Setup Environment Variables

Create a .env file inside the server directory.

Example configuration:

PORT=5000

DATABASE_URL=your_postgres_database_url

GEMINI_API_KEY=your_gemini_api_key

CLERK_SECRET_KEY=your_clerk_secret_key
4️⃣ Start the Development Server

Start the backend server:

npm run server

Start the frontend server:

npm run dev

The application should now run on:

http://localhost:5173

---
## 🔗 API Endpoints

| Endpoint | Method | Description |
|--------|--------|-------------|
| /api/article | POST | Generate AI article |
| /api/image | POST | Generate AI image |
| /api/blog-title | POST | Generate blog titles |
| /api/resume-review | POST | Review resume |

---
## 🚀 Key Highlights

- Full-stack PERN architecture
- Secure authentication using Clerk
- AI integration using Google Gemini
- RESTful API design
- Modular backend architecture
- Responsive UI using Tailwind CSS
