const express = require('express');
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const listRoutes = require('./list.routes');

const router = express.Router();

router.use(authRoutes);
console.log("routes.js auth routes");
router.use(userRoutes);
console.log("routes.js user routes");
router.use(listRoutes);
console.log("routes.js list routes");

module.exports = router;