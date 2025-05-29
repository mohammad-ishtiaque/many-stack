const express = require('express');
const connectDB = require('./src/connection/connectDB');
const app = express();
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

// DB Connection
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Welcome to the RV SaaS Backend!');
});

module.exports = app;