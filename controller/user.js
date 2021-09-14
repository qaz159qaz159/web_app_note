const {User} = require('../model')
const jwt = require('../utils/jwt')
const {jwtSecret} = require('../config/config.default')


// user login
exports.login = async (req, res, next) => {
    try {
        // 1. data verification
        // 2. generate token
        const user = req.user.toJSON()

        delete user.password
        const token = await jwt.sign({
            userId: user._id
        }, jwtSecret, {
            expiresIn: 60 * 60 * 24
        })

        // 3. send response
        delete user.password
        res.status(200).json({
            ...user,
            token
        })
    } catch (err) {
        next(err)
    }
}

// user register
exports.register = async (req, res, next) => {
    try {
        // 1. get data
        console.log(req.body)
        // 2. data verification
        // 2.1 base data verification
        // 2.2 business data verification

        // 3. save the data to the database
        let user = new User(req.body.user)
        await user.save()

        user = user.toJSON()

        delete user.password

        res.status(201).json({
            user
        })
    } catch (err) {
        next(err)
    }
}

// get current user
exports.getCurrentUser = async (req, res, next) => {
    try {
        res.status(200).json({
            user: req.user
        })
    } catch (err) {
        next(err)
    }
}

// update user data
exports.updateCurrentUser = async (req, res, next) => {
    try {
        res.send('updateCurrentUser')
    } catch (err) {
        next(err)
    }
}