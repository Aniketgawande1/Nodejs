const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import route files
const url = require('./routes/url');

// Define API routes
app.use('/api/url', url);

// Define a basic route
app.get('/', (req, res) => {
  res.send('URL Shortener API is running...');
});

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
