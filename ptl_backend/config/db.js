// config/db.js - Optimize connection
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI, {
        // Optimize connection options
        serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
        socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('MongoDB Connected Successfully');
    }
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

module.exports = connectDB;