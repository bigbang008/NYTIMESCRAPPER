const db = require("../models");

module.exports = {

    findAll: (req, res) => {
        db.Article.find({})
            .then(response => res.json(response))
            .catch(err => res.status(422).json(err))
    },

    create: (req, res) => {
        db.Article
            .create({
                headline: req.body.headline,
                pub_date: req.body.pub_date,
                url: req.body.url,
                snippet: req.body.snippet
            })
            .then(response => res.json(response))
            .catch(err =>
                res.status(422).json(err))
    },

    delete: (req, res) => {
        db.Article.remove({
                _id: req.params.id
            })
            .then(response => res.json(response))
            .catch(err => res.status(422).json(err))
    }

}