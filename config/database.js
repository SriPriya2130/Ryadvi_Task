const mongoose = require('mongoose');
require('dotenv').config();// Load environment variables

// Get the MongoDB URI from the .env file
const mongoURI = process.env.MONGODB_URI;
console.log('MongoDB URI:', mongoURI); 

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

module.exports=mongoURI;