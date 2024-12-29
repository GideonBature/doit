const prisma = require('../config/db');

class ListController {
    // Get all todo lists for the authenticated user
    static async getAllLists(req, res) {
        try{
            const lists = await prisma.todo.findMany({
                where: { userId: req.user.userId },
            });

            res.status(200).json({ lists });
        } catch(error) {
            res.status(500).json({
                error: 'An error occurred while fetching todo lists.',
                details: error.message
            });
        }
    }

    // Get a specific todo list by Id
    static async getListById(req, res) {
        try{
            const { id } = req.params;

            const list = await prisma.todo.findUnique({
                where: { id: parseInt(id, 10) },
            });

            if (!list || list.userId !== req.user.userId) {
                return res.status(404).json({
                    error: 'Todo list not found.'
                });
            }
            res.status(200).json({ list });
        } catch(error) {
            res.status(500).json({
                error: 'An error occurred while fetching the todo list.',
                details: error.message
            })
        }
    }

    static async createList(req, res) {
        try{
            const { title, description, task, startTime, endTime, priority, category } = req.body;

            const { userId } = req.user;

            const newList = await prisma.todo.create({
                data: {
                    title,
                    description,
                    task,
                    startTime: startTime ? new Date(startTime) : null,
                    endTime: endTime ? new Date(endTime) : null,
                    priority,
                    category: category ? category : null,
                    userId: parseInt(userId, 10)
                }
            });

            res.status(201).json({
                message: 'Todo list created successfully.',
                list: newList
            });
        } catch(error) {
            res.status(500).json({
                error: 'An error occurred while creating the todo list.',
                details: error.message
            });
        }
    }

    static async updateList(req, res) {
        try{
            const { id } = req.params;
            const { title, description, task, startTime, endTime, priority, category } = req.body;

            const updatedList = await prisma.todo.update({
                where: { id: parseInt(id, 10) },
                data: {
                    title,
                    description,
                    task,
                    startTime: startTime ? new Date(startTime) : null,
                    endTime: endTime ? new Date(endTime) : null,
                    priority,
                    category: category ? category : null
                }
            });

            res.status(200).json({
                message: 'Todo list updated successfully.',
                list: updatedList
            });
        } catch(error) {
            res.status(500).json({
                error: 'An error occurred while updating the todo list.',
                details: error.message
            })
        }
    }

    // Delete a todo list by Id
    static async deleteList(req, res) {
        try {
            const { id } = req.params;

            await prisma.todo.delete({
                where: { id: parseInt(id, 10) },
            });

            res.status(200).json({
                message: 'Todo list deleted successfully.'
            });
        } catch(error) {
            res.status(500).json({
                error: 'An error occurred while deleting the todo list.',
                details: error.message
            })
        }
    }
}

module.exports = ListController;