# Product Catalog - MERN Stack Application

A complete product management system built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- Add new products to the catalog
- View a list of all products
- View detailed information about specific products
- Update existing product details
- Delete products from the catalog
- Search and filter products by name and price range

## Technologies Used

- **MongoDB**: Database for storing product information
- **Express.js**: Backend API framework
- **React**: Frontend UI library
- **Node.js**: JavaScript runtime environment
- **Mongoose**: MongoDB object modeling
- **React Router**: For frontend routing
- **Axios**: For HTTP requests
- **CSS**: For styling the UI

## Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-username/product-catalog.git
   cd product-catalog
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Environment Variables:
   - Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   NODE_ENV=development
   ```
   - Replace `your_mongodb_connection_string` with your actual MongoDB connection string

4. Start the development server:
   ```
   npm run dev
   ```
   This will start both the backend server and React frontend concurrently.

## Project Structure

- `backend/`: Contains the Node.js/Express backend
  - `controllers/`: API controller functions
  - `models/`: MongoDB data models
  - `routes/`: API route definitions
  - `server.js`: Main server file
- `src/`: Contains the React frontend
  - `components/`: Reusable React components
  - `pages/`: Page-level components
  - `services/`: API service functions
  - `App.js`: Main React component

## API Endpoints

- `POST /api/add-product`: Add a new product
- `GET /api/products`: Get all products (with optional filtering)
- `GET /api/product/:id`: Get a specific product by ID
- `PUT /api/update-product/:id`: Update a product
- `DELETE /api/delete-product/:id`: Delete a product
- `GET /api/search`: Search for products

## Security Note

- Make sure to add the `.env` file to your `.gitignore` to prevent sensitive information from being exposed.
- Never commit your MongoDB connection string directly in your code.

## License

This project is licensed under the MIT License.
