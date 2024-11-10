const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/users', userRoutes);

const connectDB = async (dbUri) => {
  try {
    await mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Successfully connected to the database');
  } catch (error) {
    console.error('Error connecting to the database', error);
    process.exit(1); 
  }
};

module.exports = { app, connectDB };
