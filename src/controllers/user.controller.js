const prisma = require('../config/db');

class UserController {
    // Get all users
    static async getAllUsers(req, res) {
        try {

            console.log('I am get all users');
            const users = await prisma.user.findMany();

            console.log('users: ', users);

            res.status(200).json({ users });
        } catch(error) {
            res.status(500).json({
                error: 'An error occurred while fetching users.',
                details: error.message
            });
        }
    };

    // Get user by ID
    static async getUserById(req, res) {
        try {
            console.log("I am working, get user by id");
            const { id } = req.params;

            const user = await prisma.user.findUnique({
                where: { id: parseInt(id, 10) },
                select: { id: true, firstName: true, lastName: true, email: true, updatedAt: true, createdAt: true }
            });

            if (!user) {
                return res.status(404).json({
                    error: 'User not found.'
                });
            }

            res.status(200).json({ user });
        } catch(error) {
            res.status(500).json({
                error: 'An error occurred while fetching the user.',
                details: error.message
            });
        }
    };

    // Update user
    static async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { email, firstName, lastName } = req.body;

            if (!email) {
                return res.status(400).json({
                    error: 'Email is required.'
                });
            }

            const updatedUser = await prisma.user.update({
                where: { id: parseInt(id, 10) },
                data: { email, firstName, lastName }
            });

            res.status(200).json({
                message: 'User updated successfully.',
                user: updatedUser
            });
        } catch(error) {
            res.status(500).json({
                error: 'An error occurred while updating the user',
                details: error.message
            });
        }
    };

    // Delete user
    static async deleteUser(req, res) {
        try {
            const { id } = req.params;

            await prisma.user.delete({
                where: { id: parseInt(id, 10) }
            });

            res.status(200).json({
                message: 'User deleted successfully.'
            });
        } catch(error) {
            res.status(500).json({
                error: 'An error occurred while deleting the user',
                details: error.message
            });
        }
    };
}

module.exports = UserController;