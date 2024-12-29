# doit Application

doit is a task management application that allows users to manage their tasks efficiently. This application is built using Express.js and Prisma, with a PostgreSQL database.

## Features

- User authentication and authorization.
- CRUD operations for users.
- CRUD operations for task management (Todo).
- Prioritization and categorization of tasks.
- RESTful API documentation using SwaggerUI.

## Prerequisites

Before running the application, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16.x or later recommended)
- [PostgreSQL](https://www.postgresql.org/) (v12 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Redis](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/GideonBature/doit.git
cd doit
```

### 2. Install Dependencies

Run the following command to install all necessary dependencies:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```env
DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
REDIS_URL="redis://<host>:<port>"
JWT_SECRET=your_jwt_secret
JWT_EXPIRY="1h" # for 1 hour
PORT=5000
```

Replace `<username>`, `<password>`, `<host>`, `<port>`, and `<database>` with your PostgreSQL credentials and database name. Set a strong value for `JWT_SECRET`.

### 4. Initialize the Database

Run the following Prisma commands to initialize the database:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

This will apply the migrations and generate the Prisma client.

### 6. Start the Development Server

Run the following command to start the application in development mode:

```bash
npm run dev
```

By default, the application runs on `http://localhost:8000`.

## API Documentation

The application includes Swagger-based documentation for all API endpoints.

### Accessing the Documentation

1. Start the server using `npm run dev`.
2. Navigate to `http://localhost:5000/api-docs` in your browser to view the Swagger UI.

### Example API Endpoints

- **GET** `/users`: Fetch all users.

- **GET** `/users/:id`: Fetch a user by ID.

- **POST** `/users`: Create a new user.

- **PUT** `/users/:id`: Update user details.

- **DELETE** `/users/:id`: Delete a user.

- **GET** `/lists`: Fetch all todo lists for the authenticated user.

- **POST** `/lists`: Create a new todo list.

- **PUT** `/lists/:id`: Update a todo list.

- **DELETE** `/lists/:id`: Delete a todo list.

## Scripts

Here are the available scripts you can use:

- `npm run dev`: Starts the application in development mode using Nodemon.
- `npm run start`: Starts the application in production mode.

## Folder Structure

```
do-it/
├── src/
│   ├── controllers/       # Contains all controller logic
│   ├── middlewares/       # Middleware functions for authentication, validation, etc.
│   ├── models/            # Prisma schema and models
│   ├── routes/            # Application routes
│   ├── config/            # Configuration files (e.g., database config)
│   └── utils/             # Utility functions
├── .env                   # Environment variables
├── package.json           # Project metadata and dependencies
├── README.md              # Project documentation
└── prisma/                # Prisma schema and migrations
```

## Contribution Guidelines

1. Fork the repository and clone it locally.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork and submit a pull request.

## License

This project is Open License. See the `LICENSE` file for details.

## Support

For any questions or support, please open an issue on the repository or contact the maintainer.
