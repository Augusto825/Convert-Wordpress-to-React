// models/leadModel.js
const mongoose = require('mongoose');

// Define the lead schema
const lead = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the Lead model
module.exports = mongoose.model('Lead', lead);