# Blog App

This is a full-stack blog app built with React, Node.js, Express, and MongoDB.

## Features

- User authentication with JWT
- Create, read, update, and delete (CRUD) operations for blog posts
- Posts are associated with the user who created them
- Users can only edit and delete their own posts

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running on your machine

### Installation and Usage

## Backend
1. Clone the repository
2. Run `npm install` in the root directory
3. Create a `.env` file in the root directory with the following variables:
	* `MONGO_URI` - the URI of your MongoDB instance
	* `JWT_SECRET` - a secret key for generating JWTs
4. Run `npm run dev` to start the server

## Frontend
1. Clone the repository
2. `cd blog-client` and run `npm install`
3. `npm run dev` to start the server


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
