const express = require('express');
const AuthController = require('../controllers/auth.controller');

const router = express.Router();

// Register a new user
router.post('/register', AuthController.register);

// Login a user
router.post('/login', AuthController.login);

// Logout a user
router.post('/logout', AuthController.logout);

module.exports = router;