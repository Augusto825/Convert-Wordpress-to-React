// middleware/validationMiddleware.js
const { body } = require('express-validator');

// Validation rules for creating a lead
exports.validateLead = [
  body('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('message').notEmpty().withMessage('Message cannot be empty'),
];