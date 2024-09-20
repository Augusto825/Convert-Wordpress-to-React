// controllers/leadController.js
const Lead = require('../models/lead');
const { validationResult } = require('express-validator');

// Handle lead creation
exports.createLead = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { name, email, message } = req.body;

  try {
    // Create and save new lead
    const newLead = new Lead({ name, email, message });
    await newLead.save();

    // Send success response
    res.status(200).json({ success: true, message: 'Lead submitted successfully!' });
  } catch (error) {
    // Handle any errors
    res.status(500).json({ success: false, message: 'Failed to submit lead', error });
  }
};
