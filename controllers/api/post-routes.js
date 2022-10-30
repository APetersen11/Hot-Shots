const router = require('express').Router();
const { Router } = require('express');
const { User, Post, Sauce } = require('../../models');

//get /api/posts
router.get('/', (req, res) => {
    Post.findAll({})
    .then(dbPostData => res.json(dbPostData))
    .cath(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//get specific Post
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id : req.params.id
        }
    })
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({message:'this post does not exist 🙈!'});
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Post to post lol
router.post('/', (req, res) => {

    Post.create({
        //these were defined in the Post model
        user_id: req.body.user_id,
        title: req.body.title,
        body: req.body.body
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

//DELETE posts
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this Id! (╯°□°）╯︵ ┻━┻' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/addsauce', (req, res) => {
    User.findOne({
        where: {
            id: req.body.id,
            name: req.body.name,
            description: req.body.description,
            location: req.body.location,
            sco_score: req.body.sco_score
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'This post does not exist 🙈!'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;