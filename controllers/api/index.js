//Much like the API folder's index.js file that collects the endpoints and prefixes them, 
//here we are collecting the packaged group of API endpoints and prefixing them with the path /api.
const router = require('express').Router();

const userRoutes = require('./user-routes');

router.use('/api', userRoutes);


module.exports = router;