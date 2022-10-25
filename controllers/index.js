const router = require('express').Router();

const apiRoutes = require('./api');
<<<<<<< HEAD
=======

router.use('/api', apiRoutes);
=======
>>>>>>> ba5995174c280d16127bf9bd2df3121d588a22ac
const homeRoutes = require('./home-routes.js');
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

<<<<<<< HEAD
=======

router.use('/api', apiRoutes);
>>>>>>> develop
=======
>>>>>>> 22f861a2be9b5dca493aab6188e7473b8bcedab3
>>>>>>> ba5995174c280d16127bf9bd2df3121d588a22ac
//This is so if we make a request to any endpoint that doesn't exist, we'll receive a 404 error
router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;