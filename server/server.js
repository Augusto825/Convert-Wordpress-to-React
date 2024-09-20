// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(bodyParser.json()); // Parse incoming requests with JSON payloads

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/leadsDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Lead Schema
const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Lead Model
const Lead = mongoose.model('Lead', leadSchema);

// Route to handle form submissions
app.post('/api/leads', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save lead to the database
    const newLead = new Lead({ name, email, message });
    await newLead.save();

    // Send success response
    res.status(200).json({ success: true, message: 'Lead submitted successfully!' });
  } catch (error) {
    // Handle errors
    res.status(500).json({ success: false, message: 'Failed to submit lead', error });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
