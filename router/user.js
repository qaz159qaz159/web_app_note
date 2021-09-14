const express = require('express')
const userCtrl = require('../controller/user')
const userValidator = require('../validator/user')
const auth = require('../middleware/auth')


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

router.get('/profile/:username', (req, res) => {
    res.render('profile.html')
})

router.get('/profile/:username/favorites', (req, res) => {
    res.render('profile.html')
})

// // user login
// router.post('/users/login', userValidator.login, userCtrl.login)
//
// // user registration
// router.post('/users', userValidator.register, userCtrl.register)
//
// // get current user
// router.get('/user', auth, userCtrl.getCurrentUser)
//
// // update user data
// router.put('/user', auth, userCtrl.updateCurrentUser)

module.exports = router