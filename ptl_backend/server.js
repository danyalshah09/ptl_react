require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors({
  origin: ['https://passutouristlodge.vercel.app', 'http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS']
}));
app.use(express.json());

// Routes
const bookingRoutes = require('./routes/bookings');

// Simple health check that doesn't require DB connection
app.get('/', (req, res) => {
  res.status(200).send('Server is running');
});

app.get('/api/test', (req, res) => {
  res.json({ message: "Backend is working!" });
});

// Add the database test route here
app.get('/api/db-test', async (req, res) => {
  const startTime = Date.now();
  try {
    await connectDB();
    const connectionTime = Date.now() - startTime;
    res.json({ 
      success: true, 
      message: "Database connection successful", 
      connectionTimeMs: connectionTime 
    });
  } catch (error) {
    const connectionTime = Date.now() - startTime;
    res.status(500).json({ 
      success: false, 
      message: "Database connection failed", 
      error: error.message,
      connectionTimeMs: connectionTime 
    });
  }
});

// Connect DB only for routes that need it
app.use('/api/bookings', async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Database connection failed. Please try again later."
    });
  }
}, bookingRoutes);

// Only start server when running locally
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export for serverless
module.exports = app;