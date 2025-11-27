# myTask - MERN Stack Web App

## Overview
This project is a scalable web application with authentication and dashboard functionality. Built with React.js  and Node.js/Express backend with MongoDB.

## Features
- User authentication (JWT)
- Protected routes
- CRUD operations on tasks/notes/posts
- Responsive UI using TailwindCSS
- Profile fetch & update
- Search and filter functionality
- Logout flow

## Tech Stack
- Frontend: React.js, TailwindCSS
- Backend: Node.js, Express.js, MongoDB
- Authentication: JWT, bcrypt

## Setup
### Backend
1. `cd backend`
2. `npm install`
3. `npm run dev` (starts server at localhost:5000)

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev` 


## Postman Collection

**Auth**
- `POST /auth/signup` – Signup a new user  
- `POST /auth/login` – Login a user  


**Tasks**
- `GET /tasks` – Get all tasks  
- `POST /tasks` – Create a new task  
- `PUT /tasks/:id` – Update a task by ID  
- `DELETE /tasks/:id` – Delete a task by ID  


## Scaling Note
- Project is structured for easy growth with modular frontend and backend.
- Future improvements: microservices, state caching, CI/CD, Docker.


