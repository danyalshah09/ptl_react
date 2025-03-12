require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors({
  origin: ['https://passutouristlodge.vercel.app', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

// Add debugging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Connect to Database - for each request in serverless
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

// Routes
const bookingRoutes = require('./routes/bookings');
app.use('/api/bookings', bookingRoutes);

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: "Backend is working!" });
});

// Add a generic health check route
app.get('/', (req, res) => {
  res.status(200).send('Backend is running');
});

// Only listen in development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export for serverless
module.exports = app;