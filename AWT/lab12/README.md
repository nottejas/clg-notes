# Hotel Booking System

A full-stack MERN (MongoDB, Express.js, React, Node.js) application for managing hotel room bookings.

## Features

- View available rooms
- Book a room
- Update booking details
- Cancel a booking
- View booking status

## Project Structure

```
project/
├── backend/              # Node.js backend
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── server.js         # Express server setup
│   ├── seed.js           # Database seeding script
│   ├── .env.example      # Environment variables template
│   └── package.json      # Backend dependencies
├── frontend/             # React frontend
│   ├── public/           # Static files
│   ├── src/              
│   │   ├── components/   # React components
│   │   ├── App.js        # Main App component with routing
│   │   └── index.js      # Entry point
│   └── package.json      # Frontend dependencies
└── README.md             # Project documentation
```

## Installation & Setup

### Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas)

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to create a new `.env` file:
     ```
     cp .env.example .env
     ```
   - Edit the `.env` file and replace the placeholders with your actual MongoDB connection string:
     ```
     PORT=5000
     MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>
     ```

4. Seed the database with sample rooms:
   ```
   npm run seed
   ```

5. Start the server:
   ```
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the React app:
   ```
   npm start
   ```

## API Endpoints

### Rooms

- GET `/api/rooms` - Get all rooms
- GET `/api/rooms/:id` - Get a specific room
- POST `/api/rooms` - Add a new room (admin)
- PUT `/api/rooms/:id` - Update a room (admin)
- DELETE `/api/rooms/:id` - Delete a room (admin)

### Bookings

- POST `/api/book-room` - Book a room
- GET `/api/booking/:id` - Get booking details
- PUT `/api/update-booking/:id` - Update a booking
- DELETE `/api/delete-booking/:id` - Cancel a booking
- GET `/api/search-bookings` - Search bookings

## Tech Stack

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: CSS

## Testing with Postman

You can test the API endpoints with Postman:

1. Start the backend server: `cd backend && npm run dev`
2. Open Postman and create a new request
3. Use `http://localhost:5000` as the base URL
4. Test specific endpoints like `GET http://localhost:5000/api/rooms`

## Environment Variables

The application uses environment variables for configuration. These are stored in a `.env` file that is not committed to the repository for security reasons. A template file `.env.example` is provided instead.

## License

This project is open source and available under the [MIT License](LICENSE). 