# Task CRUD API

A simple RESTful CRUD API built with **Node.js** and **Express** for managing tasks.

## Features

- Get all tasks
- Get a task by ID
- Create a new task
- Update an existing task
- Delete a task
- Swagger API documentation

---

## Installation

1. Clone or download the project.

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node hello.js
```

The server will start on:

```
http://localhost:3000
```

Swagger documentation:

```
http://localhost:3000/api-docs
```

---

# API Endpoints

## 1. Get All Tasks

**Request**

```bash
curl.exe -i http://localhost:3000/tasks
```

Example Response

```json
[
    {
        "id": 1,
        "title": "Task1",
        "done": true
    },
    {
        "id": 2,
        "title": "Task2",
        "done": false
    }
]
```

---

## 2. Get Task By ID

Replace **1** with the desired task ID.

```bash
curl.exe -i http://localhost:3000/tasks/1
```

Success Response

```json
{
    "id": 1,
    "title": "Task1",
    "done": true
}
```

If the task doesn't exist:

```json
{
    "error": "Task 10 not found"
}
```

---

## 3. Create a New Task

```bash
curl.exe -i -X POST "http://localhost:3000/tasks" -H "Content-Type: application/json" -d "{\`"title\`": \`"Buy milk\`"}"
```

Success Response

```json
{
    "id": 4,
    "title": "Buy milk",
    "done": false
}
```

If the title is missing:

```json
{
    "error": "The 'title' field is required and cannot be empty."
}
```

---

## 4. Update an Existing Task

Replace **2** with the task ID you want to update.

```bash
curl.exe -i -X PUT "http://localhost:3000/tasks/2" -H "Content-Type: application/json" -d "{\`"title\`": \`"Updated Task\`"}"
```

Success Response

```json
{
    "id": 2,
    "title": "Updated Task",
    "done": false
}
```

If the task doesn't exist:

```json
{
    "error": "Task 10 not found"
}
```

---

## 5. Delete a Task

Replace **2** with the task ID.

```bash
curl.exe -i -X DELETE http://localhost:3000/tasks/2
```

Success Response

```
HTTP/1.1 204 No Content
```

If the task doesn't exist:

```json
{
    "error": "Task 10 not found"
}
```

---

# Task Object

```json
{
    "id": 1,
    "title": "Buy milk",
    "done": false
}
```

---

# Project Structure

```
.
├── hello.js
├── swagger.json
├── package.json
├── package-lock.json
└── node_modules/
```

---

# Technologies Used

- Node.js
- Express.js
- Swagger UI Express
- OpenAPI 3.0

---

# Notes

- The API stores tasks **in memory**.
- Restarting the server resets the task list.
- Input validation ensures every new or updated task has a non-empty title.
- API documentation is available through Swagger UI at:

```
http://localhost:3000/api-docs
```
