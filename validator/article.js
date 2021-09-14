const validator = require('../middleware/validate')
const {body, param} = require("express-validator");
const mongoose = require('mongoose')
const {Article} = require('../model')

exports.createArticle = validator([
    body('article.title').notEmpty().withMessage('title should not be empty!'),

])

exports.getArticle = validator([
    validator.isValidObjectId(['params'], 'articleId')
    // param('articleId').custom(async value => {
    //     if (!mongoose.isValidObjectId(value)) {
    //         return Promise.reject('article ID error!')
    //
    //         // sync: fail
    //         throw new Error('article ID error!')
    //     }
    //     // sync: success
    //     return true
    // })
])

exports.updateArticle = [
    validator([
        validator.isValidObjectId(['params'], 'articleId')
    ]),
    async (req, res, next) => {
    console.log(req)
        const articleId = req.params.articleId
        const article = await Article.findById(articleId)
        req.article = article
        if (!article) {
            return res.status(404).end()
        }
        next()
    },
    async (req, res, next) => {
        if (req.user._id.toString() !== req.article.author.toString()) {
            return res.status(403).end()
        }
        next()
    }
]

exports.deleteArticle = exports.updateArticle