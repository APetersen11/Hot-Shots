const router = require("express").Router();
const { User, Sauce } = require("../../models");

//get /api/sauce_post
router.get("/", (req, res) => {
  Sauce.findAll({})
    .then((dbsauceData) => res.json(dbsauceData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get specific Post
router.get("/:id", (req, res) => {
  Sauce.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "this post does not exist 🙈!" });
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Post to post
router.post("/", (req, res) => {
  Sauce.create({
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    sco_score: req.body.sco_score
  })
    .then((saucePost) => {
      if (!saucePost) {
        res.status(404).json({ message: "this post does not exist 🙈!" });
      }
      res.json(saucePost);
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//DELETE posts
router.delete("/:id", (req, res) => {
  Sauce.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res
          .status(404)
          .json({ message: "No post found with this Id! (╯°□°）╯︵ ┻━┻" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// not tooo sure what this is supposed to do but looks promising...
// router.post('/addsauce', (req, res) => {
//     User.findOne({
//         where: {
//             name: req.body.name,
//             description: req.body.description,
//             location: req.body.location,
//             sco_score: req.body.sco_score
//         }
//     })
//     .then(dbPostData => {
//         if (!dbPostData) {
//             res.status(404).json({ message: 'This post does not exist 🙈!'});
//             return;
//         }
//         res.json(dbPostData);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     })
// });

module.exports = router;
