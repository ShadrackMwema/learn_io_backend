const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
    res.send('User list'); // CWe will change this to our logic
});

// Add more user-related routes as needed
router.post('/', (req, res) => {
    // Logic to create a user
    res.send('User created'); // We will Change this to our logic
});

// Export the router
module.exports = router;
