# Multi-Service Monolithic Application Deployed with Docker

This is a basic full-stack CRUD application demonstrating on how to set up a **Multi-service monolithic architectured application** using Docker. The app features a **React frontend** (built with Vite), a **Node.js backend** (Express), **MongoDB** for data storage, **Redis** for caching, and an **Nginx reverse proxy** to handle requests. This project is a demonstration of how to orchestrate multiple services using Docker Compose.

---

## **Project Structure**

```
multi-service-app/
│── frontend/         # React (Vite) App
│── backend/          # Node.js + Express API
│── database/         # MongoDB (Docker volume)
│── cache/            # Redis setup
│── proxy/            # Nginx reverse proxy
│── docker-compose.yml
│── .env              # Environment variables
```

---

## **Features**

- **Frontend:** React + Vite for a fast, modern front-end development experience.
- **Backend:** Node.js with Express for handling API requests.
- **MongoDB:** For persistent database storage (user details: name, email).
- **Redis:** For caching user data to improve performance.
- **Nginx:** Reverse proxy for routing traffic to the correct service.
- **Docker Compose:** To manage multi-container applications efficiently.

---

## **Tech Stack**

- **React** with **Vite** (Frontend)
- **Node.js** + **Express** (Backend)
- **MongoDB** (Database)
- **Redis** (Cache)
- **Nginx** (Reverse Proxy)
- **Docker** (Containers)
- **Docker Compose** (Orchestration)

---

## **Getting Started**

### **1. Clone the Repository**

```bash
git clone https://github.com/<your-username>/docker-multi-service-app.git
cd docker-multi-service-app
```

### **2. Environment Setup**

Create a `.env` file in the root of the `backend` directory with the following:

```bash
MONGO_URI=mongodb://admin:password@database:27017/mydatabase?authSource=admin
REDIS_URL=redis://cache:6379
```

### **3. Build and Run the Application**

To build and start all services (frontend, backend, MongoDB, Redis, Nginx) using Docker Compose:

```bash
docker-compose up --build
```

The application should be accessible at:

- **Frontend:** `http://localhost:3000`
- **API:** `http://localhost:5000/api/users`
- **Nginx Proxy:** `http://localhost`

### **4. CRUD Operations**

- **Create a User:**
  - Endpoint: `POST /api/users`
  - Payload: `{ "name": "John Doe", "email": "john@example.com" }`
- **Get All Users:**
  - Endpoint: `GET /api/users`
- **Update a User:**

  - Endpoint: `PUT /api/users/:id`
  - Payload: `{ "name": "John Smith", "email": "johnsmith@example.com" }`

- **Delete a User:**
  - Endpoint: `DELETE /api/users/:id`

---

## **Project Structure Overview**

- **Frontend (React + Vite):**

  - `frontend/src/App.jsx` handles the UI and makes API requests to the backend.

- **Backend (Node.js + Express):**

  - `backend/server.js` provides API routes for CRUD operations using MongoDB.

- **MongoDB:**

  - Stores user data (name, email).

- **Redis:**

  - Caches the list of users for 60 seconds to optimize read performance.

- **Nginx:**
  - Acts as a reverse proxy, routing traffic between the frontend and backend.

---

## **Docker Setup**

The services are defined in the `docker-compose.yml` file:

- **Frontend:** React app running on port `3000`.
- **Backend:** Node.js API running on port `5000`.
- **MongoDB:** Exposed on port `27017`.
- **Redis:** Exposed on port `6379`.
- **Nginx:** Exposed on port `80`, acting as a reverse proxy.

---

## **How to Contribute**

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

---

## **License**

Distributed under the MIT License. See `LICENSE` for more information.

---

## **Acknowledgements**

Special thanks to all the open-source libraries and tools used in this project. and this project is based on the [DevOps Roadmap's Project](https://roadmap.sh/projects/multiservice-docker)
