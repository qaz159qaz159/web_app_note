const express = require('express')
const articleCtrl = require('../controller/article')
const auth = require('../middleware/auth')
const articleValidator = require('../validator/article')

const router = express.Router()

// feed articles
router.get('/feed', articleCtrl.feedArticle)

// get article
router.get('/:articleId', articleValidator.getArticle, articleCtrl.getArticle)

// create article
router.post('/', auth, articleValidator.createArticle, articleCtrl.createArticle)

// get articles
router.get('/', articleCtrl.getArticles)

// update article
router.put('/:articleId', auth, articleValidator.updateArticle, articleCtrl.updateArticle)

// delete article
router.delete('/:articleId', auth, articleValidator.deleteArticle, articleCtrl.deleteArticle)

// add comment to an article
router.post('/:articleId/comments', async (req, res, next) => {
    try {
        res.send('post /:articleId/comments')
    } catch (err) {
        next(err)
    }
})

// get comments from an article
router.get('/:articleId/comments', articleCtrl.addComment)

// delete comment
router.delete('/:articleId/comments/:id', articleCtrl.deleteComment)

// favorite article
router.post('/:articleId/favorite', articleCtrl.favoriteArticle)

// unfavorite article
router.delete('/:articleId/favorite', articleCtrl.unfavoriteArticle)

module.exports = router