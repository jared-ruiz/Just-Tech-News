const router = require('express').Router();
const userRoutes = require('./user-routes');

//any path starting with '/users', use 'userRoutes.js'
router.use('/users', userRoutes);

module.exports = router;