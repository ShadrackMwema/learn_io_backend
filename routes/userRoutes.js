const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const jwt = require('jsonwebtoken');

router.post('/register', (req, res) => {
    userController.register(req, res);
});

router.post('/login', (req, res) => {
    userController.login(req, res);
});



// Export the router
module.exports = router;