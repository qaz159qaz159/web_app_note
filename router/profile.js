const express = require('express')
const profileCtrl = require('../controller/profile')

const router = express.Router()

// get user data
router.get('/:username', profileCtrl.getUserData)

// follow a user
router.post('/:username', profileCtrl.followUser)

// cancel follow a user
router.delete('/:username/follow', profileCtrl.cancelFollowUser)

module.exports = router