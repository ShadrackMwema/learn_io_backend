const express = require('express');
const userRoutes = require('./userRoutes');
const articles = require('./articlesRoutes');

const router = express.Router();

// Use specific routes with their respective paths
router.use('/api', userRoutes);
router.use('/api', articles);

module.exports = router;