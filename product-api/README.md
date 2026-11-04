# Product API

A RESTful backend API built with *Node.js* and *Express.js* for managing products.
Built as part of the Full Stack JavaScript (MEAN/MERN) course, Unit 2.

## Features

- Full CRUD for products (GET, POST, PUT, DELETE)
- Modular structure: routes, controllers, middleware, config
- API key authentication for write operations
- Centralized error handling and 404 handler
- Request logging (custom logger + morgan)
- Security: helmet and CORS
- Environment-based configuration with dotenv
- Automated tests with jest and supertest

## Tech Stack

Node.js, Express, dotenv, morgan, helmet, cors, nodemon, jest, supertest

## Project Structure


product-api/
├── config/         # app settings (reads .env)
├── controllers/    # business logic
├── middleware/     # logger, auth, error handlers
├── routes/         # URL to controller mapping
├── tests/          # jest + supertest tests
├── postman/        # Postman collection
├── utils/
├── app.js          # Express app setup
├── server.js       # starts the server
└── .env.example    # sample environment variables


## Getting Started

### 1. Clone and install

bash
git clone [your-repo-url]
cd product-api
npm install


### 2. Set up environment variables

Copy .env.example to .env and fill in the values:


PORT=3000
NODE_ENV=development
API_KEY=your_secret_key
CORS_ORIGIN=http://localhost:5173,http://localhost:4200


### 3. Run

bash
npm run dev     # development (nodemon)
npm start       # production
npm test        # run tests


Server runs at http://localhost:3000.

## API Endpoints

| Method | Endpoint            | Description        | Auth required |
|--------|---------------------|--------------------|---------------|
| GET    | /api/products     | Get all products   | No            |
| GET    | /api/products/:id | Get one product    | No            |
| POST   | /api/products     | Create a product   | Yes           |
| PUT    | /api/products/:id | Update a product   | Yes           |
| DELETE | /api/products/:id | Delete a product   | Yes           |

Search: GET /api/products?name=lap

### Authentication

Protected routes need this header:


x-api-key: your_secret_key


### Example: create a product

http
POST /api/products
x-api-key: your_secret_key
Content-Type: application/json

{
  "name": "Keyboard",
  "price": 3500
}


Response 201 Created:

json
{ "id": 3, "name": "Keyboard", "price": 3500 }


### Status codes

| Code | Meaning |
|------|---------|
| 200  | OK |
| 201  | Created |
| 400  | Bad request (missing name or price) |
| 401  | Unauthorized (missing or wrong API key) |
| 404  | Not found |
| 500  | Server error |

## Testing

- *Automated:* npm test runs the jest + supertest suite.
- *Manual:* import postman/Product-API.postman_collection.json into Postman.

## Notes

Data is stored in memory (an array), so it resets when the server restarts.
A database (MongoDB) will be added in a later unit.

## Author

[Ayesha Siddiqua] - [https://github.com/ayeshasidiqua433-tech/hello-full-stack.git]