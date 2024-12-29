/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management endpoints for CRUD operations
*/

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         email:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *   parameters:
 *     UserId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: The unique identifier of the user
 */

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Retrieve a list of all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *             example:
 *               - id: "1"
 *                 firstName: "John"
 *                 lastName: "Doe"
 *                 email: "john.doe@example.com"
 *                 createdAt: "2025-01-01T00:00:00.000Z"
 *                 updatedAt: "2025-01-02T00:00:00.000Z"
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Retrieve user details by ID
 *     tags: [Users]
 *     parameters:
 *       - $ref: '#/components/parameters/UserId'
 *     responses:
 *       200:
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               id: "1"
 *               firstName: "John"
 *               lastName: "Doe"
 *               email: "john.doe@example.com"
 *               createdAt: "2023-01-01T00:00:00.000Z"
 *               updatedAt: "2023-01-02T00:00:00.000Z"
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/users/{id}:
 *   put:
 *     summary: Update user details by ID
 *     tags: [Users]
 *     parameters:
 *       - $ref: '#/components/parameters/UserId'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *             example:
 *               email: "john.doe@example.com"
 *               firstName: "New Joe"
 *               lastName: "New Doe"
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *             example:
 *               message: "User updated successfully"
 *               user:
 *                 id: "1"
 *                 firstName: "John"
 *                 lastName: "Doe"
 *                 email: "new.email@example.com"
 *                 createdAt: "2024-01-01T00:00:00.000Z"
 *                 updatedAt: "2025-01-03T00:00:00.000Z"
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - $ref: '#/components/parameters/UserId'
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

