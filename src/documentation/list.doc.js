// documentation/list.doc.js
/**
 * @swagger
 * tags:
 *   name: Todo List
 *   description: Manage todo lists
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         task:
 *           type: string
 *         startTime:
 *           type: string
 *           format: date-time
 *           nullable: true
 *         endTime:
 *           type: string
 *           nullable: true
 *           format: date-time
 *         priority:
 *           type: string
 *           enum: [LOW, MILD, HIGH]
 *         category:
 *           type: string
 *           nullable: true
 *         userId:
 *           type: integer
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: 1
 *         title: "Grocery Shopping"
 *         description: "Buy groceries for the week."
 *         task: "Get milk, eggs, bread."
 *         startTime: "2023-01-01T09:00:00.000Z"
 *         endTime: "2023-01-01T11:00:00.000Z"
 *         priority: "HIGH"
 *         category: "Personal"
 *         userId: 1
 *         createdAt: "2023-01-01T00:00:00.000Z"
 *         updatedAt: "2023-01-02T00:00:00.000Z"
 */

/**
 * @swagger
 * /api/v1/lists:
 *   get:
 *     summary: Get all todo lists
 *     tags: [Todo List]
 *     responses:
 *       200:
 *         description: List of todo lists
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/lists/{id}:
 *   get:
 *     summary: Get a todo list by ID
 *     tags: [Todo List]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Todo list ID
 *     responses:
 *       200:
 *         description: Todo list details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       404:
 *         description: Todo list not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/lists:
 *   post:
 *     summary: Create a new todo list
 *     tags: [Todo List]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - task
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               task:
 *                 type: string
 *               startTime:
 *                 type: string
 *                 nullable: true
 *               endTime:
 *                 type: string
 *                 nullable: true
 *               priority:
 *                 type: string
 *                 enum: [LOW, MILD, HIGH]
 *               category:
 *                 type: string
 *                 nullable: true
 *             example:
 *               title: "Grocery Shopping"
 *               description: "Buy groceries for the week."
 *               task: "Get milk, eggs, bread."
 *               startTime: "2023-01-01T09:00:00.000Z"
 *               endTime: "2023-01-01T11:00:00.000Z"
 *               priority: "HIGH"
 *               category: "Personal"
 *     responses:
 *       201:
 *         description: Todo list created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/lists/{id}:
 *   put:
 *     summary: Update a todo list by ID
 *     tags: [Todo List]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Todo list ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               task:
 *                 type: string
 *               startTime:
 *                 type: string
 *                 nullable: true
 *               endTime:
 *                 type: string
 *                 nullable: true
 *               priority:
 *                 type: string
 *                 enum: [LOW, MILD, HIGH]
 *               category:
 *                 type: string
 *                 nullable: true
 *             example:
 *               title: "Grocery Shopping Updated"
 *               description: "Buy groceries and household items."
 *               task: "Get milk, eggs, bread, and cleaning supplies."
 *               startTime: "2023-01-02T10:00:00.000Z"
 *               endTime: "2023-01-02T12:00:00.000Z"
 *               priority: "MILD"
 *               category: "Household"
 *     responses:
 *       200:
 *         description: Todo list updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       404:
 *         description: Todo list not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/lists/{id}:
 *   delete:
 *     summary: Delete a todo list by ID
 *     tags: [Todo List]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Todo list ID
 *     responses:
 *       200:
 *         description: Todo list deleted successfully
 *       404:
 *         description: Todo list not found
 *       500:
 *         description: Internal server error
 */
