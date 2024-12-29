const express = require('express');
const ListController = require('../controllers/list.controller');
const { authenticate } = require('../middlewares/auth.middleware');

const router = express.Router();

// Get all todo lists for the authenticated user
router.get('/lists', authenticate, ListController.getAllLists);

// Get a specific todo list by Id
router.get('/lists/:id', authenticate, ListController.getListById);

// Create a new todo list
router.post('/lists', authenticate, ListController.createList);

// Update a todo list by Id
router.put('/lists/:id', authenticate, ListController.updateList);

// Delete a todo list by Id
router.delete('/lists/:id', authenticate, ListController.deleteList);

module.exports = router;