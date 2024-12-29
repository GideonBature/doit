const express = require('express');
const UserController = require('../controllers/user.controller');
const { authenticate } = require('../middlewares/auth.middleware');

const router = express.Router();

// Get all users
router.get('/users', authenticate, UserController.getAllUsers);

// Get user by Id
router.get('/users/:id', authenticate, UserController.getUserById);

// Update user by Id
router.put('/users/:id', authenticate, UserController.updateUser);

// Delete user by Id
router.delete('/users/:id', authenticate, UserController.deleteUser);

module.exports = router;