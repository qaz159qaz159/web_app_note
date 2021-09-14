const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index.html')
})

router.get('/login', (req, res) => {
    res.render('login.html', {
        isLogin: true
    })
})

router.get('/register', (req, res) => {
    res.render('login.html')
})

// // user related router
// router.use(require('./user'))
//
// // user data related router
// router.use('/profiles', require('./profile'))
//
// // article related router
// router.use('/articles', require('./article'))
//
// // tag related router
// router.use('/tags', require('./tag'))

module.exports = router