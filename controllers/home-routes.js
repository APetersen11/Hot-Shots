const router = require('express').Router();
//home page!
router.get('/', (req, res) => {
    res.render('homepage');
    console.log(req.session);
});
//login if not logged in redirect
router.get('/login', (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/dashboard');
    //     return;
    // }

    res.render('login');
});
//sign up session authentication
router.get('/signup', (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/dashboard');
    //     return;
    // }

    res.render('signup');
});
//redirect if tried to access without loggin in
router.get('/addsauce', (req, res) => {
    // if (!req.session.loggedIn) {
    //     res.redirect('/login');
    //     res.status(401);
    // }
    res.render('addsauce');
});
//same here
router.get('/dashboard', (req, res) => {
    // if (!req.session.loggedIn) {
    //     res.redirect('/login');
    //     res.status(401);
    // }
    res.render('dashboard');
});

module.exports = router