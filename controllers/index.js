const router = require('express').Router();

const apiRoutes = require('./api');
<<<<<<< HEAD

router.use('/api', apiRoutes);
=======
const homeRoutes = require('./home-routes.js');
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

>>>>>>> 22f861a2be9b5dca493aab6188e7473b8bcedab3
//This is so if we make a request to any endpoint that doesn't exist, we'll receive a 404 error
router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;