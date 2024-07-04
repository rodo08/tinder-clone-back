# Express MongoDB - Tinder Clone API

This is an Express.js API using MongoDB for user management, including authentication, user profile updates, and messaging functionality.

## Features

- User registration and login with JWT authentication
- CRUD operations for user profiles
- Matching users based on gender identity
- Messaging between users

## Prerequisites

- Node.js
- MongoDB
- npm (Node Package Manager)

## Installation

1.  Clone the repository:

    git clone [https://github.com/yourusername/your-repo-name.git](https://github.com/yourusername/your-repo-name.git) cd your-repo-name

2.  Install the dependencies:

    npm install

3.  Create a `.env` file in the root directory and add the following:

    PORT=8000 MONGODB_URI=your_mongodb_uri DB_NAME=your_database_name

## Usage

1.  Start the server:

    npm start

2.  The server will be running on `http://localhost:8000`.

## API Endpoints

### Root Endpoint

- `GET /`

  Returns a simple greeting message.

### User Registration

- `POST /signup`

  Registers a new user.

### User Login

- `POST /login`

  Logs in a user.

### Get User

- `GET /user`

  Retrieves a user profile based on the user ID.

### Get Gendered Users

- `GET /gendered-users`

  Retrieves users based on gender identity.

### Update User

- `PUT /user`

  Updates a user profile.

### Add Match

- `PUT /addmatch`

  Adds a matched user.

### Get Users

- `GET /users`

  Retrieves multiple users based on user IDs.

### Get Messages

- `GET /messages`

  Retrieves messages between two users.

### Post Message

- `POST /message`

  Sends a message from one user to another.

## License

This project is licensed for educational purposes following a tutorial by [Ania Kubów](https://github.com/kubowania).

## Acknowledgments

- Express.js
- MongoDB
- dotenv
- bcrypt
- cors
- uuid
- jsonwebtoken
