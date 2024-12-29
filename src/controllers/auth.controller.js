const prisma = require('../config/db');
const bcrypt = require('bcrypt');
const { generateToken, verifyToken } = require('../utils/jwt');
const redisClient = require('../config/redis');

class AuthController {
    // Register a new user
    static async register(req, res) {
        try {
            const { email, password, firstName, lastName } = req.body;

            if (!email || !password || !firstName || !lastName) {
                return res.status(400).json({
                    error: 'Email and password are required.'
                });
            }

            // Check if user already exists
            const existingUser = await prisma.user.findUnique({
                where: { email },
                include: {
                    todos: true
                }
            });
            if (existingUser) {
                return res.status(409).json({
                    error: 'User already exists.'
                });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create new user
            const user = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    firstName,
                    lastName,
                    todos: {
                        create: []
                    },
                },
            });
            res.status(201).json({
                message: 'User registered successfully.', user
            });
        } catch(error) {
            res.status(500).json({
                error: 'An error occured durring registration.',
                details: error.message
            });
        }
    }

    // Login a user
    static async login(req, res) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({
                    error: 'Email and password are required.'
                });
            }

            // Find the user
            const user = await prisma.user.findUnique({
                where: { email }
            });

            if (!user) {
                return res.status(404).json({
                    error: 'Invalid email or password.'
                });
            }

            // Verify password
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({
                    error: 'Invalid email or password.'
                });
            }

            // Generate JWT
            const token = generateToken(user);

            try {
                await redisClient.set(token, JSON.stringify(user.id), 'EX', 3600 );
                console.log('Token value set successfully');
            } catch (error) {
                console.error('Failed to set token:', error);
                return res.status(500).json({
                    error: 'An error occurred setting token as redis value.',
                    details: error.message
                });
            }

            res.status(200).json({ 
                message: 'Login successful.',
                token
             });
        } catch (error) {
            res.status(500).json({
                error: 'An error occurred during login.',
                details: error.message
            });
        }
    }

    // Logout a user
    static async logout(req, res) {
        try {
            const token = req.headers.authorization?.split(' ')[1];
    
            if (!token) {
                return res.status(401).json({ message: 'No token provided' });
            }

            const decoded = verifyToken(token);
            await redisClient.del(decoded.id);
            res.json({ message: 'User logged out successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = AuthController;