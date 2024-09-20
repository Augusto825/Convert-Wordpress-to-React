// middleware/validationMiddleware.js
const { body } = require('express-validator');

// Validation rules for creating a lead
exports.validateLead = [
  body('fullName').isLength({ min: 3 }).withMessage('fullName must be at least 3 characters long'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('phone').notEmpty().withMessage('Phonenumber cannot be empty'),
];