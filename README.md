Task Management System
Overview
The Task Management Application is a full-featured platform that allows users to create, view, edit, and delete tasks. It consists of a backend API built with Spring Boot and a frontend developed using Angular.

Features
Create tasks with titles and descriptions.
View a list of all tasks.
View details of individual tasks.
Edit task details.
Delete tasks.
Technologies Used
Backend: Spring Boot, Java, RESTful APIs
Frontend: Angular, TypeScript
Database: MySQL
Tools: Postman (for testing API endpoints)
API Endpoints
Task Management API
GET /api/Tasks: Retrieve all tasks.
GET /api/Tasks/{id}: Retrieve a specific task by ID.
POST /api/Tasks: Create a new task.
PUT /api/Tasks/{id}: Update an existing task by ID.
DELETE /api/Tasks/{id}: Delete a task by ID.
Angular Routes
/task: Redirects to /task/index.
/task/index: Displays a list of all tasks.
/task/:taskId/view: View details of a specific task.
/task/create: Create a new task.
/task/:taskId/edit: Edit an existing task.
Installation and Setup
Backend
Clone the repository:

bash
Copy code
git clone <repository-url>
Navigate to the backend folder and open it in your IDE.

Configure the database connection in application.properties (update database URL, username, and password).

Run the Spring Boot application:

mvn spring-boot:run
Frontend
Navigate to the Angular project directory:

bash cd frontend
Install dependencies:npm install
Start the Angular development server:ng serve
Access the application in your browser at: http://localhost:4200.

Usage

Frontend
Navigate to the task list: /task/index
View details of a task: /task/:taskId/view
Create a new task: /task/create
Edit a task: /task/:taskId/edit

