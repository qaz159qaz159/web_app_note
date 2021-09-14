const express = require('express')

const router = express.Router()

// user related router
router.use(require('./user'))

// user data related router
router.use('/profiles', require('./profile'))

// article related router
router.use('/articles', require('./article'))

// tag related router
router.use('/tags', require('./tag'))

module.exports = router