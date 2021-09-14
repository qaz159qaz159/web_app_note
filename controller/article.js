const {Article, User} = require('../model')
const {body} = require("express-validator");

// feed articles
exports.feedArticle = async (req, res, next) => {
    try {
        res.send('feeArticle')
    } catch (err) {
        next(err)
    }
}

// get articles
exports.getArticles = async (req, res, next) => {
    try {
        const {
            limit = 20,
            offset = 0,
            tag,
            author
        } = req.query

        const filter = {}

        if (tag) {
            filter.tagList = tag
        }

        if (author) {
            const user = await User.findOne({username: author})
            filter.author = user ? user._id : null
        }

        const articles = await Article.find(filter)
            .skip(Number.parseInt(offset)) // how many to articles to skip
            .limit(Number.parseInt(limit)) // get how many articles
            .sort({
                //  1 order
                // -1 reverse order
                createDate: -1
            })
        const articlesCount = await Article.countDocuments()
        // const articlesCount = Article.length
        res.status(200).json({
            articles,
            articlesCount
        })
    } catch (err) {
        next(err)
    }
}

// get article
exports.getArticle = async (req, res, next) => {
    try {
        const article = await Article.findById(req.params.articleId)
            .populate('author')
        if (!article) {
            return res.status(404).end()
        }
        res.status(200).json({
            article
        })
    } catch (err) {
        next(err)
    }
}

// create article
exports.createArticle = async (req, res, next) => {
    try {
        const article = new Article(req.body.article)
        article.author = req.user._id
        await article.populate('author')
        await article.save()
        res.status(201).json({
            article
        })
    } catch (err) {
        next(err)
    }
}

// update article
exports.updateArticle = async (req, res, next) => {
    try {
        const article = req.article
        const bodyArticle = req.body.article
        article.title = bodyArticle.title || article.title
        article.description = bodyArticle.description || article.description
        article.body = bodyArticle.body || article.body
        await article.save()
        res.status(200).json({
            article
        })
    } catch (err) {
        next(err)
    }
}

// delete article
exports.deleteArticle = async (req, res, next) => {
    try {
        const article = req.article
        await article.remove()
        res.status(204).end()
    } catch (err) {
        next(err)
    }
}

// add comment to an article
exports.addComment = async (req, res, next) => {
    try {
        res.send('get /:slug/comments')
    } catch (err) {
        next(err)
    }
}

// delete comment
exports.deleteComment = async (req, res, next) => {
    try {
        res.send('delete /:slug/comments/:id')
    } catch (err) {
        next(err)
    }
}

// favorite article
exports.favoriteArticle = async (req, res, next) => {
    try {
        res.send('post /:slug/favorite')
    } catch (err) {
        next(err)
    }
}

// unfavorite article
exports.unfavoriteArticle = async (req, res, next) => {
    try {
        res.send('delete /:slug/favorite')
    } catch (err) {
        next(err)
    }
}