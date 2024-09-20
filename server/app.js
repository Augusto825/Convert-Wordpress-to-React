// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const leadRoutes = require('./routes/leadRoutes');
const connectDB = require('./config/db');

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Use routes
app.use('/api', leadRoutes);

module.exports = app;