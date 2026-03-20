💘 DatingApp 2026

A modern, full-stack social networking application built with .NET 9 and Angular 19.
This project features real-time messaging, photo management, and a robust role-based authorization system.

🚀 Features
User Authentication
Secure registration and login using ASP.NET Identity and JWT (JSON Web Tokens).
Real-time Communication
Live messaging and user presence tracking powered by SignalR.
Member Management
Detailed user profiles, advanced member search with filtering & pagination, and a "Likes" system.
Photo Management
Cloud-based uploads via Cloudinary, including an admin approval pipeline.
Role-Based Authorization
Support for Members, Moderators, and Admins.
Responsive UI
Clean, modern interface built with Angular and styled using Tailwind CSS.

🛠 Tech Stack
🔙 Backend
Framework: .NET 10 Web API
Database:
SQL Server (Production)
SQLite (Development)
Security: JWT Authentication & ASP.NET Identity Roles
External Services: Cloudinary API (image storage)
🔜 Frontend
Framework: Angular 19
State Management: RxJS Observables & Signals
Real-time: SignalR Client
☁️ Hosting & Deployment

This project is configured for automated deployment using GitHub Actions and Azure App Service.

⚙️ CI/CD Workflow
Automation:
Every push to the main branch triggers a GitHub Actions workflow
(main_zayds-da-2026.yml)
Build Process:
Node.js 22 → builds Angular client
.NET 10.x → publishes API
Deployment Target:
Azure Web App: zayds-da-2026
Slot: Production
🏭 Production Configuration

Static Hosting:
The .NET API serves the Angular SPA from the wwwroot folder using:
app.UseStaticFiles();
Fallback Routing: 
An index fallback controller ensures Angular client-side routing works after deployment.
Database: 
Uses Azure SQL Server, with migrations automatically applied on startup.

🔧 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/yourusername/datingapp-2026.git
cd datingapp-2026

2️⃣ Backend Setup
cd API
dotnet watch
⚠️ Ensure your TokenKey and CloudinarySettings are configured in
appsettings.Development.json.

3️⃣ Frontend Setup
cd client
npm install
npm start

📌 Notes
Make sure you have:
.NET SDK installed
Node.js (v22 recommended)
SQL Server / SQLite configured
