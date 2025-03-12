const mongoose = require('mongoose');

// Cache the database connection
let cachedConnection = null;

const connectDB = async () => {
  // If we have a connection already, use it
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    // Set strict connection timeout to avoid hanging
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // 5 seconds timeout for server selection
      socketTimeoutMS: 8000, // 8 seconds timeout for operations
      connectTimeoutMS: 5000 // 5 seconds to connect
    });
    
    cachedConnection = connection;
    console.log('MongoDB Connected Successfully');
    return connection;
  } catch (err) {
    console.error('MongoDB connection error:', err);
    // Return a rejected promise so the error can be handled by the caller
    throw new Error(`Database connection failed: ${err.message}`);
  }
};

module.exports = connectDB;