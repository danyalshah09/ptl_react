require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors({
  origin: '*', // This allows all origins - only use this in development
  methods: ['GET', 'POST'],
  credentials: true
}));app.use(express.json());

// Add debugging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Add a route handler for the root path
app.get('/', (req, res) => {
  res.json({ message: "Passu Tourist Lodge API is running" });
});

// Routes
const bookingRoutes = require('./routes/bookings');
app.use('/api/bookings', bookingRoutes);
// Update your CORS configuration to be more permissive for development

// Test route
app.get('/test', (req, res) => {
  res.json({ message: "Backend is working!" });
});
// For Vercel serverless functions
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
 
