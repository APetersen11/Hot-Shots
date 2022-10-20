//Much like the API folder's index.js file that collects the endpoints and prefixes them, 
//here we are collecting the packaged group of API endpoints and prefixing them with the path /api.
const router = require('express').Router();

const apiRoutes = require('./api');
const userRoutes = require('./user-routes');

router.use('/api', apiRoutes);
//This is so if we make a request to any endpoint that doesn't exist, we'll receive a 404 error
router.use((req, res) => {
    res.status(404).end();
})

router.use('/users', userRoutes);

module.exports = router;