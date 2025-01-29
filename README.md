# Real Estate Backend

## Overview
This is a backend service for a real estate application, built using Node.js, Express, and Prisma ORM. It provides APIs for managing properties, users, and transactions.

## Features
- User authentication (JWT-based via express-oauth2-jwt-bearer)
- Property listings management
- User roles (residency,user)
- Booking and transaction handling
- Database integration using Prisma ORM
- RESTful API architecture

## Technologies Used
- Node.js
- Express.js
- Prisma ORM
-MongoDB
- JSON Web Tokens (JWT) for authentication
- dotenv for environment variable management
- CORS for cross-origin requests
- Cookie Parser for managing cookies

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/your-username/Realstate-backend.git
   cd Realstate-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up the environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL="your-database-url"
   PORT="your database PORT"
   ```
4. Migrate the database using Prisma:
   ```sh
   npx prisma migrate dev --name init
   ```
5. Start the server:
   ```sh
   npm run start
   ```


## Prisma Setup
- To generate the Prisma client after making schema changes:
  ```sh
  npx prisma generate
  ```
- To view the Prisma studio (GUI for database management):
  ```sh
  npx prisma studio
  ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

