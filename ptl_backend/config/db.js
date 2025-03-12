const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('MongoDB Connected Successfully');
    }
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

module.exports = connectDB;