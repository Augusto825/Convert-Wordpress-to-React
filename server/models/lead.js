// models/leadModel.js
const mongoose = require('mongoose');

// Define the lead schema
const lead = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  phone: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the Lead model
module.exports = mongoose.model('Leads', lead);