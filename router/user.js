const express = require('express')
const userCtrl = require('../controller/user')
const userValidator = require('../validator/user')
const auth = require('../middleware/auth')


const router = express.Router()

// user login
router.post('/users/login', userValidator.login, userCtrl.login)

// user registration
router.post('/users', userValidator.register, userCtrl.register)

// get current user
router.get('/user', auth, userCtrl.getCurrentUser)

// update user data
router.put('/user', auth, userCtrl.updateCurrentUser)

module.exports = router