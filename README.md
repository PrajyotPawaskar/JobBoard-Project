# JobBoard - A Full-Stack MERN Application

JobBoard is a full-stack web application that connects employers and employees, offering seamless functionality for job postings, applications, and profile management. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this project ensures secure access with role-based authorization and JWT authentication.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### User Authentication
- **Sign-Up**: Register as either an `Employee` or `Employer` by providing email, user type, and password.
- **Sign-In**: Secure login using JSON Web Tokens (JWT).

### Profile Management (Employee)
- Employees can create and update their profiles with:
  - Name
  - Email
  - Education
  - Skills
  - Experience
  - Location

### Job Management (Employer)
- Employers can create and manage job postings with fields like:
  - Company Name
  - Role
  - Required Skills
  - Experience Needed
  - Pay
  - Location
- Employers can view a list of applicants for each job.

### Job Application (Employee)
- Employees can browse available jobs and apply to them.
- Employees can view a list of jobs they have applied to.

### Role-Based Authorization
- **Employees**: Access profile management, job browsing, and job applications.
- **Employers**: Access job postings and view applicants.

### State Management
- Context API is used in the React front end to efficiently manage the application state.

### Secure API Communication
- JWT ensures secure authentication and authorization for all API endpoints.

---

## Tech Stack

**Frontend:**
- React.js
- Context API

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB

**Authentication:**
- JSON Web Token (JWT)

---

## Installation

### Prerequisites
- Node.js
- MongoDB
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/PrajyotPawaskar/JobBoard-Project
   cd jobboard
   ```
2. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```
3. Install dependencies for the frontend:
   ```bash
   cd ../frontend
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the `backend` folder.
   - Add the following variables:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```
5. Start the application:
   - Run the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Run the frontend server:
     ```bash
     cd ../frontend
     npm start
     ```
6. Open the application in your browser at `http://localhost:3000`.

---

## Usage
1. **Sign Up**: Register as an employee or employer.
2. **Sign In**: Log in to access your dashboard.
3. **Employee Actions**:
   - Set up your profile.
   - Browse and apply for jobs.
   - View the list of jobs you have applied for.
4. **Employer Actions**:
   - Post new jobs.
   - View applicants for each job.

---

## API Endpoints

### Authentication
- **POST /api/auth/signup**: Register a new user.
- **POST /api/auth/signin**: Log in a user and return a JWT.

### Profile Management
- **GET /api/profile**: Fetch the logged-in user's profile.
- **POST /api/profile**: Create or update the employee's profile.

### Job Management
- **POST /api/jobs**: Create a new job posting (Employer only).
- **GET /api/jobs**: Get a list of all available jobs.
- **GET /api/jobs/:jobId/applicants**: Get a list of applicants for a specific job (Employer only).
- **POST /api/jobs/:jobId/apply**: Apply for a specific job (Employee only).

---

## Folder Structure

```plaintext
jobboard/
├── backend/            # Backend code (Node.js + Express.js)
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   ├── controllers/    # Route logic
│   ├── middleware/     # Authentication and validation middleware
│   ├── config/         # Database connection
│   └── server.js       # Entry point for the backend
├── frontend/           # Frontend code (React.js)
│   ├── src/
│   │   ├── components/ # Reusable components
│   │   ├── context/    # Context API setup
│   │   ├── pages/      # Application pages
│   │   └── App.js      # Main application file
├── README.md           # Project documentation
└── package.json        # Project metadata
```

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

