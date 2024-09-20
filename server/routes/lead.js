// routes/leadRoutes.js
const express = require('express');
const router = express.Router();
const { createLead } = require('../controllers/lead');
const { validateLead } = require('../middleware/validation');

// Route for lead form submission
router.post('/leads', validateLead, createLead);

module.exports = router;
