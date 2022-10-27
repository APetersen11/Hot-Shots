const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage');
    console.log(req.session);
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }

    res.render('signup');
});

router.get('/addsauce', (req, res) => {
    res.render('addsauce');
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

module.exports = router