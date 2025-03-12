const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI, {
        // These options help with serverless environments
        bufferCommands: false,
        serverSelectionTimeoutMS: 10000,
        socketTimeoutMS: 45000,
      });
      console.log('MongoDB Connected Successfully');
    }
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw err;
  }
};

module.exports = connectDB;