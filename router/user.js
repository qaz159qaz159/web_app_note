const express = require('express')
const userCtrl = require('../controller/user')
const userValidator = require('../validator/user')
const auth = require('../middleware/auth')


const router = express.Router()

router.get('/login', userCtrl.showLogin)

router.get('/register', userCtrl.showRegister)

router.get('/settings', userCtrl.showSettings)

router.get('/profile/:username', userCtrl.showProfile)

router.get('/profile/:username/favorites', userCtrl.showProfile)

module.exports = router